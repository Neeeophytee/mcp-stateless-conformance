// Emits just the servers a PR added or modified, so contributors get a verdict
// in seconds instead of waiting on a full 1400-endpoint sweep.
//   node scripts/changed-servers.mjs > subset.json
import { execSync } from "child_process";
import { readFileSync } from "fs";

const base = process.env.GITHUB_BASE_REF || "main";
const current = JSON.parse(readFileSync("servers.json", "utf8"));

let before = [];
try {
  before = JSON.parse(execSync(`git show origin/${base}:servers.json`, { encoding: "utf8" }));
} catch {
  // servers.json is new in this PR — everything in it counts as changed.
}

const seen = new Set(before.map((s) => `${s.name}|${s.url}`));
const changed = current.filter((s) => !seen.has(`${s.name}|${s.url}`));

process.stderr.write(`${changed.length} changed endpoint(s) vs origin/${base}\n`);
console.log(JSON.stringify(changed, null, 1));
