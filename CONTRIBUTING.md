# Contributing

The point of this repo is that **nobody's server gets on the list by asking**. Every row
is the result of live HTTP requests against the endpoint, re-run weekly. That's the whole
value, so the contribution process is deliberately mechanical.

## Add your server

Add one entry to `servers.json`:

```json
{
  "name": "com.example/my-server",
  "url": "https://mcp.example.com/mcp",
  "type": "streamable-http"
}
```

- `name` — reverse-DNS, matching the official registry convention. The part before `/` is
  treated as your **operator id**, and the report groups by it (see below).
- `url` — the exact Streamable HTTP POST endpoint.
- `type` — `streamable-http`, or `sse` if you're still on the deprecated transport.

Open a PR. CI probes only the endpoints your PR touched and posts a verdict table on the
PR, usually within a minute. No maintainer judgement is involved.

## What gets checked

Nine rules, each citing its line in the [spec changelog](https://modelcontextprotocol.io/specification/2026-07-28/changelog):

| Rule | Spec |
| --- | --- |
| `server/discover` implemented | major-3 |
| Answers `tools/list` cold, no handshake | major-2 |
| Never issues `Mcp-Session-Id` | major-1 |
| Results carry `resultType` | major-8 |
| List results carry `ttlMs` + `cacheScope` | minor-5 |
| Rejects header/body method mismatch with `-32020` | minor-4/12 |
| Rejects unknown version with `-32022` | minor-12 |
| Echoes `serverInfo` in result `_meta` (SHOULD) | major-2 |
| Deterministic `tools/list` order (SHOULD) | minor-3 |

A server is **conformant** only when it implements `server/discover` and fails zero MUSTs.
SHOULD failures are reported but don't block a green verdict.

## Why operator grouping exists

One vendor deploying the same codebase to twenty subdomains is one implementation, not
twenty. The report leads with operator counts because server counts overstate adoption —
at last count, 24 "2026-aware" servers came from 5 operators. Please don't submit twenty
near-identical endpoints; submit the ones that are genuinely distinct deployments.

## Auth-gated servers

Submit them. They're recorded as **unverified**, never as passing, because the probe can't
authenticate. If you want a verifiable row, expose an unauthenticated `server/discover` —
the spec requires servers to implement it for exactly this reason, so clients can negotiate
before authenticating.

## Disputing a verdict

Verdicts are measurements, not opinions, and measurements can be wrong. Open an issue with:

1. The verdict you got and the rule you think is misapplied.
2. A `curl` showing your server's actual response.
3. The spec line you're reading differently.

If the probe is wrong, that's a bug in `conformance.mjs` and it gets fixed — the probe has
been wrong before. The first version of it tested the *previous* protocol entirely, sending
`initialize` and omitting the required per-request `_meta` envelope; a server operator's
precise error message is what caught it.

## Running it yourself

```bash
node conformance.mjs servers.json results.jsonl   # streams JSONL, survives hung endpoints
node scripts/collect.mjs results.jsonl > results.json
node gen-report.mjs results.json > README.md
```

Never edit `README.md` by hand — CI regenerates it from `results.json` on every run.
Report changes go in `gen-report.mjs`.
