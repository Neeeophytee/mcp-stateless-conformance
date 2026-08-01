// Full registry pull, resumable.
//
// Two bugs produced the bad corpus this replaces:
//   1. pagination capped at 40 pages, and the registry paginates in NAME order,
//      so the cap yielded an alphabetical prefix (ac.* -> com.b*), not a sample;
//   2. records were buffered in memory to the end, so one failed page at 195
//      discarded 19,500 already-fetched records.
// Both are fixed: no cap, and every page is appended to disk with the cursor
// checkpointed so a rerun resumes instead of restarting.
import { appendFileSync, writeFileSync, readFileSync, existsSync } from "fs";

const RAW = "registry-raw.jsonl";
const CKPT = "registry-cursor.txt";

let cursor = existsSync(CKPT) ? readFileSync(CKPT, "utf8").trim() || null : null;
let pages = 0, records = 0;
if (cursor) process.stderr.write(`resuming from cursor ${cursor}\n`);

while (true) {
  const u = new URL("https://registry.modelcontextprotocol.io/v0/servers");
  u.searchParams.set("limit", "100");
  if (cursor) u.searchParams.set("cursor", cursor);

  let d, attempt = 0;
  while (true) {
    try {
      const r = await fetch(u, { signal: AbortSignal.timeout(45000) });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      d = await r.json();
      break;
    } catch (e) {
      // Long backoff: the registry rate-limits a sustained crawl, and giving up
      // here is what lost the previous run.
      if (++attempt >= 8) {
        process.stderr.write(`page ${pages} failed after 8 tries (${e.message}); checkpoint saved\n`);
        process.exit(1);
      }
      await new Promise((res) => setTimeout(res, Math.min(30000, 2000 * attempt)));
    }
  }

  const batch = d.servers || [];
  if (batch.length) appendFileSync(RAW, batch.map((s) => JSON.stringify(s)).join("\n") + "\n");
  records += batch.length;
  pages++;

  cursor = d.metadata?.nextCursor || null;
  writeFileSync(CKPT, cursor || "");
  if (pages % 25 === 0) process.stderr.write(`  ${pages} pages, ${records} records this session\n`);
  if (!cursor) break;
}

process.stderr.write(`COMPLETE: ${pages} pages, ${records} records this session\n`);
