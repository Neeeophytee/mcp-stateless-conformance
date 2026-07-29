# MCP 2026-07-28 Stateless Conformance

[![conformance](https://github.com/Neeeophytee/mcp-stateless-conformance/actions/workflows/conformance.yml/badge.svg)](https://github.com/Neeeophytee/mcp-stateless-conformance/actions/workflows/conformance.yml)
[![spec](https://img.shields.io/badge/MCP%20spec-2026--07--28-6E56CF)](https://modelcontextprotocol.io/specification/2026-07-28/changelog)
[![conformant](https://img.shields.io/badge/conformant-2%20of%20749%20probed-2EA043)](#-fully-conformant-2)
[![corpus](https://img.shields.io/badge/corpus-1471%20servers-0969DA)](servers.json)
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

**Probed:** 2026-07-29T15:41:43.453Z · **Corpus:** 1471 remote servers from the official MCP registry

## Scoreboard

| Verdict | Count | Share |
| --- | ---: | ---: |
| ✅ Fully conformant | **2** | 0.1% |
| 🟡 Implements `server/discover`, fails ≥1 MUST | 22 | 1.5% |
| 🟠 Answers cold requests, no 2026 surface | 206 | 14.0% |
| 🔴 Legacy stateful | 519 | 35.3% |
| 🔒 Auth-gated (not probeable) | 556 | 37.8% |
| ⚫ Unreachable | 166 | 11.3% |

Of **749** servers that answered an unauthenticated request,
**2** (0.3%) fully conform.

> **Read the server count with care.** Adoption is concentrated: the
> 24 servers with any 2026 surface come from just
> **5 operators**, because
> one vendor may deploy the same codebase to many endpoints. Operator count is the
> honest adoption signal; server count overstates it.

### By operator

| Operator | Servers with 2026 surface | Fully conformant |
| --- | ---: | ---: |
| `ai.dsght` | 1 | 1 |
| `com.apple-rag` | 1 | 1 |
| `ai.trendsmcp` | 20 | 0 |
| `ai.satoshidata` | 1 | 0 |
| `com.babyblueviper` | 1 | 0 |

## What each check means

| Check | Spec rule | Why it matters |
| --- | --- | --- |
| `server/discover` | major-3 | Servers **MUST** implement it. The single clearest 2026 marker. |
| Cold `tools/list` | major-2 | No `initialize` handshake — a cold instance must answer request #1. |
| No session id | major-1 | `Mcp-Session-Id` is removed; its presence means sticky routing. |
| `resultType` | major-8 | All results **MUST** carry it. |
| `ttlMs`+`cacheScope` | minor-5 | List results **MUST** be cacheable. |
| `-32022` | minor-12 | Version mismatch **MUST** use `UnsupportedProtocolVersion`. |
| `-32020` | minor-4/12 | `Mcp-Method` header/body mismatch **MUST** be rejected. |

## ✅ Fully conformant (2)

| Server | `server/discover` | Cold `tools/list` | No session id | `resultType` | `ttlMs`+`cacheScope` | `-32022` | `-32020` |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| `ai.dsght/public` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.apple-rag/mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## 🟡 Partial — implements `server/discover` but fails a MUST (22)

| Server | `server/discover` | Cold `tools/list` | No session id | `resultType` | `ttlMs`+`cacheScope` | `-32022` | `-32020` |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| `ai.satoshidata/wallet-intelligence` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `ai.trendsmcp/amazon` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/app-store` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/competitor-tracking` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/content-strategy` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/crypto` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/ecommerce` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/google-trends` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/market-research` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/news-sentiment` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/news-volume` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/npm` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/reddit` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/seo` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/spotify` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/steam` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/tiktok` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/trends` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/wikipedia` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/x-twitter` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `ai.trendsmcp/youtube` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `com.babyblueviper/invinoveritas` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |

## Most-failed rules

| Rule | Servers failing |
| --- | ---: |
| MUST return -32022 UnsupportedProtocolVersion (minor-12) | 746 |
| MUST return -32020 HeaderMismatch (minor-4/12) | 746 |
| MUST server/discover (major-3) | 725 |
| MUST answer cold tools/list without handshake (major-2) | 519 |
| SHOULD echo serverInfo in result _meta (major-2) | 228 |
| MUST set resultType (major-8) | 227 |
| MUST return ttlMs + cacheScope on tools/list (minor-5) | 227 |
| MUST NOT issue Mcp-Session-Id (major-1) | 35 |
| SHOULD return deterministic tool order (minor-3) | 1 |

## Add your server

Shipped 2026-07-28 support? Get it on the board — it takes one line.

1. Add your endpoint to [`servers.json`](servers.json):
   ```json
   { "name": "com.example/my-server", "url": "https://mcp.example.com/mcp", "type": "streamable-http" }
   ```
2. Open a PR. CI probes **only your endpoint** and posts the verdict on the PR within a minute.
3. Merge lands you in the table above on the next run.

**No gatekeeping and no vibes** — the probe decides, and it runs the same nine checks on
your server as on everyone else's. If it fails, the PR tells you exactly which rule and where
in the spec it lives, so you can fix it and push again. Failing the first time is normal;
746 servers currently miss "return -32022 UnsupportedProtocolVersion (minor-12)".

Auth-gated servers are welcome too. They're recorded as **unverified**, never as passing —
if you want a green row, expose an unauthenticated `server/discover`, which the spec
requires anyway.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full checklist and how to dispute a verdict.

---

Generated by `gen-report.mjs` from `results.json` — do not edit this file by hand, CI
overwrites it. Corpus: the official MCP registry plus community submissions.

[r/webafterai](https://reddit.com/r/webafterai) · [newsletter](https://webafterai.substack.com/)

