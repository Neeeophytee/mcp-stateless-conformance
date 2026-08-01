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

// Build servers.json from the raw pull. This lives here rather than in an ad-hoc
// one-liner because the transport-selection rule below is easy to get wrong and
// needs to be reviewable.
const byName = new Map();
for (const line of readFileSync(RAW, "utf8").trim().split("\n")) {
  let s;
  try { s = JSON.parse(line); } catch { continue; }
  const srv = s.server || s;
  if (!srv.name) continue;
  const rems = (srv.remotes || []).filter((r) => r.type === "streamable-http" || r.type === "sse");
  if (!rems.length) continue;
  // Prefer Streamable HTTP wherever a server offers it. 651 servers declare both
  // transports; taking remotes[0] blindly mislabelled those listing sse first as
  // deprecated-transport-only, which wrongly excluded 19 servers from probing.
  const pick = rems.find((r) => r.type === "streamable-http") || rems[0];
  // Records arrive in ascending version order, so the last write per name is the
  // newest version.
  byName.set(srv.name, { name: srv.name, url: pick.url, type: pick.type });
}
const list = [...byName.values()].sort((a, b) => a.name.localeCompare(b.name));
writeFileSync("servers.json", JSON.stringify(list, null, 1));
process.stderr.write(
  `servers.json: ${list.length} servers ` +
  `(${list.filter((s) => s.type === "sse").length} sse-only)\n`
);
