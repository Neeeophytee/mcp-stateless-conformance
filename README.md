# MCP 2026-07-28 Stateless Conformance

[![conformance](https://github.com/Neeeophytee/mcp-stateless-conformance/actions/workflows/conformance.yml/badge.svg)](https://github.com/Neeeophytee/mcp-stateless-conformance/actions/workflows/conformance.yml)
[![spec](https://img.shields.io/badge/MCP%20spec-2026--07--28-6E56CF)](https://modelcontextprotocol.io/specification/2026-07-28/changelog)
[![conformant](https://img.shields.io/badge/conformant-0%20of%204%20probed-999999)](#-fully-conformant-0)
[![corpus](https://img.shields.io/badge/corpus-9743%20servers-0969DA)](servers.json)
[![PRs welcome](https://img.shields.io/badge/PRs-add%20your%20server-8250DF)](CONTRIBUTING.md)
[![r/webafterai](https://img.shields.io/badge/reddit-r%2Fwebafterai-FF4500?logo=reddit&logoColor=white)](https://reddit.com/r/webafterai)
[![newsletter](https://img.shields.io/badge/newsletter-subscribe-FF6719?logo=substack&logoColor=white)](https://webafterai.substack.com/)

Machine-checked conformance of public MCP servers against the
[2026-07-28 specification](https://modelcontextprotocol.io/specification/2026-07-28/changelog).

Every cell below is the result of an HTTP request made against the live endpoint.
No self-reported badges, no vendor claims. Re-run it yourself:

```bash
node conformance.mjs servers.json results.jsonl
```

**Probed:** 2026-10-12T14:37:29.992Z · **Corpus:** 9743 remote servers from the official MCP registry

## Scoreboard

| Verdict | Count | Share |
| --- | ---: | ---: |
| ✅ Fully conformant | **0** | 0.0% |
| 🟡 Implements `server/discover`, fails ≥1 MUST | 1 | 0.0% |
| 🟠 Answers cold requests, no 2026 surface | 2 | 0.0% |
| 🔴 Legacy stateful | 1 | 0.0% |
| 🔒 Auth-gated (not probeable) | 2 | 0.0% |
| 🔌 Deprecated HTTP+SSE transport (not probed) | 447 | 4.6% |
| ⚫ Unreachable | 9290 | 95.4% |

Of **4** servers that answered an unauthenticated request,
**0** (0.0%) fully conform.

> **Read the server count with care.** The 1 servers with any
> 2026 surface come from **1 operators**, and the
> 0 conformant ones from **0 operators**. One vendor may deploy the
> same codebase to many endpoints. Operator count is the honest adoption signal.

### By operator

| Operator | Servers with 2026 surface | Fully conformant |
| --- | ---: | ---: |
| `ac.inference.sh` | 1 | 0 |

## What each check means

| Check | Spec rule | Why it matters |
| --- | --- | --- |
| `server/discover` | major-3 | Servers **MUST** implement it. The single clearest 2026 marker. |
| Cold `tools/list` | major-2 | No `initialize` handshake, so a cold instance must answer request #1. |
| No session id | major-1 | `Mcp-Session-Id` is removed; its presence means sticky routing. |
| `resultType` | major-8 | All results **MUST** carry it. |
| `ttlMs`+`cacheScope` | minor-5 | List results **MUST** be cacheable. |
| `-32022` | minor-12 | Version mismatch **MUST** use `UnsupportedProtocolVersion`. |
| `-32020` | minor-4/12 | `Mcp-Method` header/body mismatch **MUST** be rejected. |

## ✅ Fully conformant (0)

_None yet._

## 🟡 Partial: implements `server/discover` but fails a MUST (1)

| Server | `server/discover` | Cold `tools/list` | No session id | `resultType` | `ttlMs`+`cacheScope` | `-32022` | `-32020` |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| `ac.inference.sh/mcp` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |

## Most-failed rules, among servers that claim 2026

Ranked over the **1** servers that implement `server/discover`, i.e. that
claim the new spec. Servers still on 2025 are counted as non-adopters, not as failures:
a 2025-era server cannot "fail to return `-32022`" when it never defined that code, and
mixing the two populations would turn non-adoption into a fake quality finding.

| Rule | Adopters failing | of 1 |
| --- | ---: | ---: |
| MUST answer cold tools/list without handshake (major-2) | 1 | 100% |
| MUST return -32022 UnsupportedProtocolVersion (minor-12) | 1 | 100% |
| MUST return -32020 HeaderMismatch (minor-4/12) | 1 | 100% |

## Add your server

Shipped 2026-07-28 support? Get it on the board. It takes one line.

1. Add your endpoint to [`servers.json`](servers.json):
   ```json
   { "name": "com.example/my-server", "url": "https://mcp.example.com/mcp", "type": "streamable-http" }
   ```
2. Open a PR. CI probes **only your endpoint** and posts the verdict on the PR within a minute.
3. Merge lands you in the table above on the next run.

**No gatekeeping and no vibes.** The probe decides, and it runs the same nine checks on
your server as on everyone else's. If it fails, the PR tells you exactly which rule and where
in the spec it lives, so you can fix it and push again. Failing the first time is normal;
1 servers currently miss "answer cold tools/list without handshake (major-2)".

Auth-gated servers are welcome too. They're recorded as **unverified**, never as passing.
if you want a green row, expose an unauthenticated `server/discover`, which the spec
requires anyway.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full checklist and how to dispute a verdict.

---

Corpus: the official MCP registry plus community submissions.

[r/webafterai](https://reddit.com/r/webafterai) · [newsletter](https://webafterai.substack.com/)

