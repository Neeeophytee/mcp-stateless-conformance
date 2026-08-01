// Renders the conformance README from raw probe output.
//   node gen-report.mjs results.json > README.md
import { readFileSync } from "fs";

const d = JSON.parse(readFileSync(process.argv[2], "utf8"));
const R = d.results;
const by = (v) => R.filter((r) => r.verdict === v);
const pct = (n) => ((n / R.length) * 100).toFixed(1);

const conformant = by("conformant");
const partial = by("partial-2026");
const statelessIsh = by("stateless-ish-legacy");
const legacy = by("legacy-stateful");
const auth = by("auth-required");
const deprecated = by("transport-deprecated");
const unreachable = by("unreachable").concat(by("error"));
// Only servers we actually measured over Streamable HTTP count as probed.
const probed = R.length - auth.length - unreachable.length - deprecated.length;

const operators = (list) => new Set(list.map((r) => r.name.split("/")[0])).size;

const rows = (list) =>
  list
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((r) => {
      const c = r.checks || {};
      const y = (v) => (v === true ? "✅" : v === false ? "❌" : "—");
      return `| \`${r.name}\` | ${y(c.serverDiscover)} | ${y(c.coldToolsList)} | ${y(!c.issuesSessionId)} | ${y(c.resultType === "complete")} | ${y(c.ttlMs !== null && c.cacheScope !== null)} | ${y(c.badVersionCode === -32022)} | ${y(c.headerMismatchCode === -32020)} |`;
    })
    .join("\n");

const HEAD = `| Server | \`server/discover\` | Cold \`tools/list\` | No session id | \`resultType\` | \`ttlMs\`+\`cacheScope\` | \`-32022\` | \`-32020\` |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |`;

// Which MUST trips implementers up most. Ranked ONLY over servers that claimed
// 2026 by implementing server/discover: counting a 2025-era server as "failed to
// return -32022" is tautological — it never defined that code — and blending the
// two populations turns non-adoption into a fake implementation-quality finding.
const adopters = R.filter((r) => r.claims2026 ?? (r.checks && r.checks.serverDiscover));
const tally = {};
for (const r of adopters) for (const f of r.failures || []) tally[f] = (tally[f] || 0) + 1;
const ranked = Object.entries(tally).sort((a, b) => b[1] - a[1]);

// Badges live here, not in README.md, because CI regenerates the README on every
// run — anything hand-added to that file is silently overwritten. Counts are
// interpolated so the shields stay truthful after each re-probe.
const REPO = "Neeeophytee/mcp-stateless-conformance";
// shields.io splits label/message/color on "-", so a literal dash must be doubled
// or "2026-07-28" silently shatters the badge into extra fields.
const esc = (s) => encodeURIComponent(String(s).replace(/-/g, "--").replace(/_/g, "__"));
const badge = (label, msg, color, extra = "") =>
  `https://img.shields.io/badge/${esc(label)}-${esc(msg)}-${color}${extra}`;

console.log(`# MCP 2026-07-28 Stateless Conformance

[![conformance](https://github.com/${REPO}/actions/workflows/conformance.yml/badge.svg)](https://github.com/${REPO}/actions/workflows/conformance.yml)
[![spec](${badge("MCP spec", "2026-07-28", "6E56CF")})](https://modelcontextprotocol.io/specification/2026-07-28/changelog)
[![conformant](${badge("conformant", `${conformant.length} of ${probed} probed`, conformant.length ? "2EA043" : "999999")})](#-fully-conformant-${conformant.length})
[![corpus](${badge("corpus", `${R.length} servers`, "0969DA")})](servers.json)
[![PRs welcome](${badge("PRs", "add your server", "8250DF")})](CONTRIBUTING.md)
[![r/webafterai](${badge("reddit", "r/webafterai", "FF4500", "?logo=reddit&logoColor=white")})](https://reddit.com/r/webafterai)
[![newsletter](${badge("newsletter", "subscribe", "FF6719", "?logo=substack&logoColor=white")})](https://webafterai.substack.com/)

Machine-checked conformance of public MCP servers against the
[2026-07-28 specification](https://modelcontextprotocol.io/specification/2026-07-28/changelog).

Every cell below is the result of an HTTP request made against the live endpoint.
No self-reported badges, no vendor claims. Re-run it yourself:

\`\`\`bash
node conformance.mjs servers.json results.jsonl
\`\`\`

**Probed:** ${d.probedAt} · **Corpus:** ${R.length} remote servers from the official MCP registry

## Scoreboard

| Verdict | Count | Share |
| --- | ---: | ---: |
| ✅ Fully conformant | **${conformant.length}** | ${pct(conformant.length)}% |
| 🟡 Implements \`server/discover\`, fails ≥1 MUST | ${partial.length} | ${pct(partial.length)}% |
| 🟠 Answers cold requests, no 2026 surface | ${statelessIsh.length} | ${pct(statelessIsh.length)}% |
| 🔴 Legacy stateful | ${legacy.length} | ${pct(legacy.length)}% |
| 🔒 Auth-gated (not probeable) | ${auth.length} | ${pct(auth.length)}% |
| 🔌 Deprecated HTTP+SSE transport (not probed) | ${deprecated.length} | ${pct(deprecated.length)}% |
| ⚫ Unreachable | ${unreachable.length} | ${pct(unreachable.length)}% |

Of **${probed}** servers that answered an unauthenticated request,
**${conformant.length}** (${probed ? ((conformant.length / probed) * 100).toFixed(1) : 0}%) fully conform.

> **Read the server count with care.** The ${conformant.length + partial.length} servers with any
> 2026 surface come from **${operators([...conformant, ...partial])} operators**, and the
> ${conformant.length} conformant ones from **${operators(conformant)} operators** — one vendor may deploy the
> same codebase to many endpoints. Operator count is the honest adoption signal.

### By operator

| Operator | Servers with 2026 surface | Fully conformant |
| --- | ---: | ---: |
${(() => {
  const ops = {};
  for (const r of [...conformant, ...partial]) {
    const o = r.name.split("/")[0];
    ops[o] = ops[o] || { n: 0, c: 0 };
    ops[o].n++;
    if (r.verdict === "conformant") ops[o].c++;
  }
  return Object.entries(ops)
    .sort((a, b) => b[1].c - a[1].c || b[1].n - a[1].n)
    .map(([o, v]) => `| \`${o}\` | ${v.n} | ${v.c} |`)
    .join("\n");
})()}

## What each check means

| Check | Spec rule | Why it matters |
| --- | --- | --- |
| \`server/discover\` | major-3 | Servers **MUST** implement it. The single clearest 2026 marker. |
| Cold \`tools/list\` | major-2 | No \`initialize\` handshake — a cold instance must answer request #1. |
| No session id | major-1 | \`Mcp-Session-Id\` is removed; its presence means sticky routing. |
| \`resultType\` | major-8 | All results **MUST** carry it. |
| \`ttlMs\`+\`cacheScope\` | minor-5 | List results **MUST** be cacheable. |
| \`-32022\` | minor-12 | Version mismatch **MUST** use \`UnsupportedProtocolVersion\`. |
| \`-32020\` | minor-4/12 | \`Mcp-Method\` header/body mismatch **MUST** be rejected. |

## ✅ Fully conformant (${conformant.length})

${conformant.length ? HEAD + "\n" + rows(conformant) : "_None yet._"}

## 🟡 Partial — implements \`server/discover\` but fails a MUST (${partial.length})

${partial.length ? HEAD + "\n" + rows(partial) : "_None._"}

## Most-failed rules, among servers that claim 2026

Ranked over the **${adopters.length}** servers that implement \`server/discover\` — i.e. that
claim the new spec. Servers still on 2025 are counted as non-adopters, not as failures:
a 2025-era server cannot "fail to return \`-32022\`" when it never defined that code, and
mixing the two populations would turn non-adoption into a fake quality finding.

| Rule | Adopters failing | of ${adopters.length} |
| --- | ---: | ---: |
${ranked.length ? ranked.map(([k, v]) => `| ${k} | ${v} | ${((v / adopters.length) * 100).toFixed(0)}% |`).join("\n") : "| _no adopters in corpus_ | — | — |"}

## Add your server

Shipped 2026-07-28 support? Get it on the board — it takes one line.

1. Add your endpoint to [\`servers.json\`](servers.json):
   \`\`\`json
   { "name": "com.example/my-server", "url": "https://mcp.example.com/mcp", "type": "streamable-http" }
   \`\`\`
2. Open a PR. CI probes **only your endpoint** and posts the verdict on the PR within a minute.
3. Merge lands you in the table above on the next run.

**No gatekeeping and no vibes** — the probe decides, and it runs the same nine checks on
your server as on everyone else's. If it fails, the PR tells you exactly which rule and where
in the spec it lives, so you can fix it and push again. Failing the first time is normal;
${ranked[0] ? `${ranked[0][1]} servers currently miss "${ranked[0][0].replace(/^MUST |^SHOULD /, "")}"` : "most servers miss at least one rule"}.

Auth-gated servers are welcome too. They're recorded as **unverified**, never as passing —
if you want a green row, expose an unauthenticated \`server/discover\`, which the spec
requires anyway.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full checklist and how to dispute a verdict.

## Corrections

**2026-08-01 — the first published results were wrong and have been retracted.**

The initial corpus was not the registry. It was an alphabetical prefix of it, running
\`ac.inference.sh\` → \`com.boostedchat\`, because the fetch script capped pagination at 40
pages while the registry paginates in name order. It covered 1,472 of 9,794 remote servers
(15%) and contained **zero \`io.github.*\` servers** — a namespace that is 5,006 servers, or
51% of all remote servers in the registry. Reported by a reader on r/mcp.

Published as "2 of 752 conformant". Actually ${conformant.length} of ${probed}. The retracted
figure was wrong in both directions that matter: it undercounted conformant servers ~30x,
and its claim that adoption came from "just 5 operators" was an artifact of the biased
sample — the real figure is ${operators([...conformant, ...partial])} operators.

Two further bugs found in the same review:

- The failure ranking charged 2025-era servers with failing 2026 MUSTs. A server that never
  adopted the spec cannot "fail to return \`-32022\`"; 728 of 749 counted failures were
  non-adopters. The ranking is now computed only over servers that claim 2026.
- Servers declaring the deprecated HTTP+SSE transport were probed with Streamable HTTP POST
  and labelled legacy-stateful. That measures the wrong protocol; they now have their own
  bucket and are excluded from the probed denominator.

Fixes: \`scripts/fetch-registry.mjs\` has no page cap and checkpoints its cursor, so the
truncation cannot recur silently and a network failure resumes rather than discarding the
run. The nine checks themselves were never implicated.

---

Corpus: the official MCP registry plus community submissions.

[r/webafterai](https://reddit.com/r/webafterai) · [newsletter](https://webafterai.substack.com/)
`);
