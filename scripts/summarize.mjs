// Renders a PR-comment-sized verdict for the endpoints a contributor touched.
//   node scripts/summarize.mjs subset-results.jsonl >> $GITHUB_STEP_SUMMARY
import { readFileSync } from "fs";

const rows = readFileSync(process.argv[2], "utf8")
  .trim()
  .split("\n")
  .filter(Boolean)
  .map((l) => JSON.parse(l));

if (!rows.length) {
  console.log("No endpoints changed in this PR, so there is nothing to probe.");
  process.exit(0);
}

const ICON = {
  conformant: "✅",
  "partial-2026": "🟡",
  "stateless-ish-legacy": "🟠",
  "legacy-stateful": "🔴",
  "auth-required": "🔒",
  unreachable: "⚫",
  error: "⚫",
};

console.log("## Conformance probe\n");
console.log("| Server | Verdict | Failing rules |");
console.log("| --- | --- | --- |");
for (const r of rows) {
  const fails = (r.failures || []).length ? r.failures.join("<br>") : "none";
  console.log(`| \`${r.name}\` | ${ICON[r.verdict] || ""} ${r.verdict} | ${fails} |`);
}

// A PR that only adds an auth-gated or dead endpoint can't be verified, so say
// so plainly rather than letting it read as a pass.
const unverifiable = rows.filter((r) => ["auth-required", "unreachable", "error"].includes(r.verdict));
if (unverifiable.length) {
  console.log(
    `\n> ${unverifiable.length} endpoint(s) could not be probed without credentials or were unreachable. ` +
      `These are recorded as unverified, not as passing.`
  );
}
