# MCP 2026-07-28 Stateless Conformance

[![conformance](https://github.com/Neeeophytee/mcp-stateless-conformance/actions/workflows/conformance.yml/badge.svg)](https://github.com/Neeeophytee/mcp-stateless-conformance/actions/workflows/conformance.yml)
[![spec](https://img.shields.io/badge/MCP%20spec-2026--07--28-6E56CF)](https://modelcontextprotocol.io/specification/2026-07-28/changelog)
[![conformant](https://img.shields.io/badge/conformant-59%20of%206070%20probed-2EA043)](#-fully-conformant-59)
[![corpus](https://img.shields.io/badge/corpus-9794%20servers-0969DA)](servers.json)
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

**Probed:** 2026-08-01T03:51:12.031Z · **Corpus:** 9794 remote servers from the official MCP registry

## Scoreboard

| Verdict | Count | Share |
| --- | ---: | ---: |
| ✅ Fully conformant | **59** | 0.6% |
| 🟡 Implements `server/discover`, fails ≥1 MUST | 106 | 1.1% |
| 🟠 Answers cold requests, no 2026 surface | 2723 | 27.8% |
| 🔴 Legacy stateful | 3182 | 32.5% |
| 🔒 Auth-gated (not probeable) | 2679 | 27.4% |
| 🔌 Deprecated HTTP+SSE transport (not probed) | 447 | 4.6% |
| ⚫ Unreachable | 598 | 6.1% |

Of **6070** servers that answered an unauthenticated request,
**59** (1.0%) fully conform.

> **Read the server count with care.** The 165 servers with any
> 2026 surface come from **110 operators**, and the
> 59 conformant ones from **56 operators**. One vendor may deploy the
> same codebase to many endpoints. Operator count is the honest adoption signal.

### By operator

| Operator | Servers with 2026 surface | Fully conformant |
| --- | ---: | ---: |
| `io.github.stillmarcus24` | 3 | 3 |
| `io.github.adewale` | 2 | 2 |
| `ac.inference.sh` | 1 | 1 |
| `ai.childadhd` | 1 | 1 |
| `ai.childanxiety` | 1 | 1 |
| `ai.childpsychiatry` | 1 | 1 |
| `ai.dsght` | 1 | 1 |
| `ai.jobero` | 1 | 1 |
| `ai.muffed` | 1 | 1 |
| `ai.teenpsychiatry` | 1 | 1 |
| `ai.teentherapy` | 1 | 1 |
| `ai.teenanxiety` | 1 | 1 |
| `ai.teenadhd` | 1 | 1 |
| `app.racecalendar` | 1 | 1 |
| `app.sallim` | 1 | 1 |
| `build.naru` | 1 | 1 |
| `co.tempguru` | 1 | 1 |
| `com.apple-rag` | 1 | 1 |
| `com.babyblueviper` | 1 | 1 |
| `com.cloudflare.mcp` | 1 | 1 |
| `com.emorahealth` | 1 | 1 |
| `com.geezerkeeper` | 1 | 1 |
| `com.mandateshield` | 1 | 1 |
| `com.meritvalue` | 1 | 1 |
| `com.negativeev` | 1 | 1 |
| `com.obriym-crm` | 1 | 1 |
| `com.psychiatryforkids` | 1 | 1 |
| `com.rigorloop` | 1 | 1 |
| `com.songstoyoureyes` | 1 | 1 |
| `com.teenpsychiatry` | 1 | 1 |
| `com.tulimoa` | 1 | 1 |
| `dev.busymate` | 1 | 1 |
| `dev.turva` | 1 | 1 |
| `glass.cocktail` | 1 | 1 |
| `io.agent4` | 1 | 1 |
| `io.gamefork` | 1 | 1 |
| `io.github.africanmarketos591` | 1 | 1 |
| `io.github.cristianmoroaica` | 1 | 1 |
| `io.github.Dahliyaal` | 1 | 1 |
| `io.github.fmadore` | 1 | 1 |
| `io.github.HEUSAI` | 1 | 1 |
| `io.github.KG-NINJA` | 1 | 1 |
| `io.github.MarshallBear1` | 1 | 1 |
| `io.github.Mimirs402` | 1 | 1 |
| `io.github.PatrickPi1312` | 1 | 1 |
| `io.github.privatelawattorneys` | 1 | 1 |
| `io.github.rezearcher` | 1 | 1 |
| `io.github.re-port-flow` | 1 | 1 |
| `io.github.Steven3265` | 1 | 1 |
| `io.github.tickadoo` | 1 | 1 |
| `io.github.zation` | 1 | 1 |
| `io.seaworthy` | 1 | 1 |
| `online.sasame` | 1 | 1 |
| `ru.layero` | 1 | 1 |
| `sh.releases` | 1 | 1 |
| `site.chatgpt.larklaon.one-bad-idea` | 1 | 1 |
| `ai.trendsmcp` | 20 | 0 |
| `io.github.johnisanerd` | 18 | 0 |
| `io.github.PrometheusAgency` | 8 | 0 |
| `io.github.mikerawsonnz` | 5 | 0 |
| `io.github.apifymcpfactory-droid` | 3 | 0 |
| `io.github.Cookient16` | 3 | 0 |
| `io.github.dizzyvinci` | 2 | 0 |
| `ai.analyticslegends` | 1 | 0 |
| `ai.satoshidata` | 1 | 0 |
| `ai.wubble` | 1 | 0 |
| `co.ainumbers` | 1 | 0 |
| `com.apify` | 1 | 0 |
| `com.clauxel.agentdataboundary` | 1 | 0 |
| `com.clauxel.browserspendguard` | 1 | 0 |
| `com.clauxel.codexrunledger` | 1 | 0 |
| `com.coinmarketcap` | 1 | 0 |
| `com.datasignalslab` | 1 | 0 |
| `com.dapdip` | 1 | 0 |
| `com.globalsourcepartners` | 1 | 0 |
| `com.metricduck` | 1 | 0 |
| `com.sponsorable` | 1 | 0 |
| `com.teamwork` | 1 | 0 |
| `com.unlistedinc` | 1 | 0 |
| `dev.desvela` | 1 | 0 |
| `events.belong` | 1 | 0 |
| `io.github.agenticempire` | 1 | 0 |
| `io.github.avabuildsdata` | 1 | 0 |
| `io.github.AshutoshRaj97` | 1 | 0 |
| `io.github.benmilne-com` | 1 | 0 |
| `io.github.fashionmascherine-svg` | 1 | 0 |
| `io.github.hassanahashish-design` | 1 | 0 |
| `io.github.jackculpan` | 1 | 0 |
| `io.github.influqa` | 1 | 0 |
| `io.github.iQuesta` | 1 | 0 |
| `io.github.JdPG23` | 1 | 0 |
| `io.github.killbridge` | 1 | 0 |
| `io.github.Nikolife2016` | 1 | 0 |
| `io.github.oasdiff` | 1 | 0 |
| `io.github.parkragsterman` | 1 | 0 |
| `io.github.philpof102-svg` | 1 | 0 |
| `io.github.projecttron` | 1 | 0 |
| `io.github.shawndei` | 1 | 0 |
| `io.github.snehdhruv` | 1 | 0 |
| `io.github.sreichsbb-stack` | 1 | 0 |
| `io.github.Stackbilt-dev` | 1 | 0 |
| `io.github.veyvey45-eng` | 1 | 0 |
| `io.github.wrbtc` | 1 | 0 |
| `io.github.workopia` | 1 | 0 |
| `io.systemprompt` | 1 | 0 |
| `live.innernet` | 1 | 0 |
| `me.untype` | 1 | 0 |
| `net.origingrid` | 1 | 0 |
| `space.0` | 1 | 0 |
| `to.agentservices` | 1 | 0 |

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

## ✅ Fully conformant (59)

| Server | `server/discover` | Cold `tools/list` | No session id | `resultType` | `ttlMs`+`cacheScope` | `-32022` | `-32020` |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| `ac.inference.sh/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.childadhd/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.childanxiety/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.childpsychiatry/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.dsght/public` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.jobero/job-search` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.muffed/muffed` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.teenadhd/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.teenanxiety/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.teenpsychiatry/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.teentherapy/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `app.racecalendar/f1` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `app.sallim/contract-compass` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `build.naru/contract-compass` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `co.tempguru/event-staffing` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.apple-rag/mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.babyblueviper/invinoveritas` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.cloudflare.mcp/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.emorahealth/mental-health-care` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.geezerkeeper/referral-exit-routes` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.mandateshield/payment-authority` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.meritvalue/meritvalue` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.negativeev/bet-checker` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.obriym-crm/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.psychiatryforkids/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.rigorloop/research-bounties` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.songstoyoureyes/catalog` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.teenpsychiatry/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.tulimoa/platform` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `dev.busymate/busymate-devtools` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `dev.turva/turva-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `glass.cocktail/cocktail-glass` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.agent4/agent4-tenant` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.gamefork/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.adewale/agentic-mermaid` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.adewale/keyboardia` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.africanmarketos591/mvr-api` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cristianmoroaica/bountyverdict` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.Dahliyaal/justicelibre` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.fmadore/iwac-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.HEUSAI/notsy-facturacion` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.KG-NINJA/hyperxosist-agent` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.MarshallBear1/juno-open-health-tools` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.Mimirs402/bountyverdict` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.PatrickPi1312/eu-compliance` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.privatelawattorneys/wiki-private-law` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.re-port-flow/reportflow-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.rezearcher/tech-risk` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.Steven3265/homechecker-guides` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.stillmarcus24/stillos-edge-gate` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.stillmarcus24/stillos-kya` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.stillmarcus24/stillos-notary-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.tickadoo/tickadoo-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.zation/agent-radar` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.seaworthy/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `online.sasame/research` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ru.layero/layero` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `sh.releases/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `site.chatgpt.larklaon.one-bad-idea/not-work` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## 🟡 Partial: implements `server/discover` but fails a MUST (106)

| Server | `server/discover` | Cold `tools/list` | No session id | `resultType` | `ttlMs`+`cacheScope` | `-32022` | `-32020` |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| `ai.analyticslegends/sap-analytics` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
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
| `ai.wubble/audio` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `co.ainumbers/tools` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| `com.apify/apify-mcp-server` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `com.clauxel.agentdataboundary/agentdataboundary-mcp` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `com.clauxel.browserspendguard/browserspendguard-mcp` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `com.clauxel.codexrunledger/codexrunledger-mcp` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `com.coinmarketcap/coinmarketcap` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `com.dapdip/youtube-growth` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `com.datasignalslab/datasignals-lab-mcp` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `com.globalsourcepartners/emerging-markets-research` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `com.metricduck/financial-analysis` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `com.sponsorable/sponsorable` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `com.teamwork/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `com.unlistedinc/unlisted` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `dev.desvela/brand-watch` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `events.belong/long-events` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.agenticempire/axint` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `io.github.apifymcpfactory-droid/eu-vat-validator` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.apifymcpfactory-droid/llms-txt-checker` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.apifymcpfactory-droid/tech-stack-detector` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.AshutoshRaj97/agentready-mcp` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.avabuildsdata/mcp-us-business-data` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.benmilne-com/benmilne` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.Cookient16/ai-brand-visibility-tracker` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.Cookient16/bluesky-mentions-scraper` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.Cookient16/bluesky-profile-scraper` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.dizzyvinci/building-permit-aggregator` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.dizzyvinci/shopify-catalog-monitor` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.fashionmascherine-svg/document-to-json-mcp` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.hassanahashish-design/agent-signals-mcp` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.influqa/crypto-agent-mail` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.iQuesta/MCP-iQuesta` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.jackculpan/flightseatmap` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.JdPG23/market-data-toolkit-mcp` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/apple-maps` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/appstore-reviews` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/baidu-search` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/fuel-prices` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/google-ai-overview` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/google-events` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/google-flights` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/google-hotels` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/google-jobs` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/google-local` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/google-news` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/google-scholar` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/google-shopping` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/linkedin-posts` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/startup-investors` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/us-congress-trades` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/yandex-search` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.johnisanerd/youtube-transcripts` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.killbridge/startupjobs-mcp` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/authenticated-llm-agent` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/authenticated-multi-llm-agent` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/llm-observability-orchestration` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/structured-output-agent` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/traced-llm-proxy` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.Nikolife2016/pulsefeed-x402` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| `io.github.oasdiff/oasdiff` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `io.github.parkragsterman/whyismy-org` | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| `io.github.philpof102-svg/biii` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.projecttron/numproof` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.PrometheusAgency/bluesky-brand-monitor` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.PrometheusAgency/bluesky-followers-export` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.PrometheusAgency/bluesky-scraper` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.PrometheusAgency/eu-industrial-emissions` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.PrometheusAgency/eudr-parcel-screener` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.PrometheusAgency/expired-domain-screener` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.PrometheusAgency/shopify-app-store-scraper` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.PrometheusAgency/us-building-permits` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.shawndei/glimind` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.snehdhruv/trillboards-dooh` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.sreichsbb-stack/reich-tools` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.Stackbilt-dev/img-forge` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.veyvey45-eng/travel-monitor-launch` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.workopia/workopia-mcp` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.wrbtc/wallet-intelligence` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.systemprompt/reports` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| `live.innernet/innernet` | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| `me.untype/aboard` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| `net.origingrid/origingrid-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `space.0/space0` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `to.agentservices/agentservices` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |

## Most-failed rules, among servers that claim 2026

Ranked over the **165** servers that implement `server/discover`, i.e. that
claim the new spec. Servers still on 2025 are counted as non-adopters, not as failures:
a 2025-era server cannot "fail to return `-32022`" when it never defined that code, and
mixing the two populations would turn non-adoption into a fake quality finding.

| Rule | Adopters failing | of 165 |
| --- | ---: | ---: |
| MUST return -32022 UnsupportedProtocolVersion (minor-12) | 100 | 61% |
| MUST return -32020 HeaderMismatch (minor-4/12) | 98 | 59% |
| SHOULD echo serverInfo in result _meta (major-2) | 53 | 32% |
| MUST answer cold tools/list without handshake (major-2) | 51 | 31% |
| MUST set resultType (major-8) | 45 | 27% |
| MUST return ttlMs + cacheScope on tools/list (minor-5) | 39 | 24% |
| MUST NOT issue Mcp-Session-Id (major-1) | 1 | 1% |

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
100 servers currently miss "return -32022 UnsupportedProtocolVersion (minor-12)".

Auth-gated servers are welcome too. They're recorded as **unverified**, never as passing.
if you want a green row, expose an unauthenticated `server/discover`, which the spec
requires anyway.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full checklist and how to dispute a verdict.

---

Corpus: the official MCP registry plus community submissions.

[r/webafterai](https://reddit.com/r/webafterai) · [newsletter](https://webafterai.substack.com/)

