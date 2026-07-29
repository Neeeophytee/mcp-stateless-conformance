// Folds the streamed JSONL probe output into the results.json envelope that
// gen-report.mjs consumes. Kept separate so a crashed run still leaves usable
// partial results on disk.
//   node scripts/collect.mjs results.jsonl > results.json
import { readFileSync } from "fs";

const rows = readFileSync(process.argv[2], "utf8")
  .trim()
  .split("\n")
  .filter(Boolean)
  .map((l) => JSON.parse(l));

// A re-probe appends, so the same endpoint can appear more than once. Keep the
// last verdict for each, which is the most recent measurement.
const latest = new Map();
for (const r of rows) latest.set(`${r.name}|${r.url}`, r);

console.log(
  JSON.stringify(
    { spec: "2026-07-28", probedAt: new Date().toISOString(), results: [...latest.values()] },
    null,
    1
  )
);
