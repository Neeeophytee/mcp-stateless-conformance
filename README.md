# MCP 2026-07-28 Stateless Conformance

[![conformance](https://github.com/Neeeophytee/mcp-stateless-conformance/actions/workflows/conformance.yml/badge.svg)](https://github.com/Neeeophytee/mcp-stateless-conformance/actions/workflows/conformance.yml)
[![spec](https://img.shields.io/badge/MCP%20spec-2026--07--28-6E56CF)](https://modelcontextprotocol.io/specification/2026-07-28/changelog)
[![conformant](https://img.shields.io/badge/conformant-151%20of%206005%20probed-2EA043)](#-fully-conformant-151)
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

**Probed:** 2026-08-24T06:53:17.391Z · **Corpus:** 9794 remote servers from the official MCP registry

## Scoreboard

| Verdict | Count | Share |
| --- | ---: | ---: |
| ✅ Fully conformant | **151** | 1.5% |
| 🟡 Implements `server/discover`, fails ≥1 MUST | 131 | 1.3% |
| 🟠 Answers cold requests, no 2026 surface | 2659 | 27.1% |
| 🔴 Legacy stateful | 3064 | 31.3% |
| 🔒 Auth-gated (not probeable) | 2612 | 26.7% |
| 🔌 Deprecated HTTP+SSE transport (not probed) | 447 | 4.6% |
| ⚫ Unreachable | 730 | 7.5% |

Of **6005** servers that answered an unauthenticated request,
**151** (2.5%) fully conform.

> **Read the server count with care.** The 282 servers with any
> 2026 surface come from **191 operators**, and the
> 151 conformant ones from **117 operators**. One vendor may deploy the
> same codebase to many endpoints. Operator count is the honest adoption signal.

### By operator

| Operator | Servers with 2026 surface | Fully conformant |
| --- | ---: | ---: |
| `io.github.cyanheads` | 29 | 29 |
| `com.jithox` | 3 | 3 |
| `io.github.stillmarcus24` | 3 | 3 |
| `io.github.adewale` | 2 | 2 |
| `io.github.SidneyBissoli` | 2 | 2 |
| `io.github.beepboop2025` | 2 | 1 |
| `ac.inference.sh` | 1 | 1 |
| `ai.childadhd` | 1 | 1 |
| `ai.childpsychiatry` | 1 | 1 |
| `ai.childanxiety` | 1 | 1 |
| `ai.dsght` | 1 | 1 |
| `ai.jobero` | 1 | 1 |
| `ai.muffed` | 1 | 1 |
| `ai.pubfi` | 1 | 1 |
| `ai.teenanxiety` | 1 | 1 |
| `ai.teenpsychiatry` | 1 | 1 |
| `ai.teenadhd` | 1 | 1 |
| `ai.teentherapy` | 1 | 1 |
| `ai.workingmemory` | 1 | 1 |
| `app.noemic` | 1 | 1 |
| `app.racecalendar` | 1 | 1 |
| `app.saber.mcp` | 1 | 1 |
| `app.onehaus` | 1 | 1 |
| `app.sallim` | 1 | 1 |
| `blog.tenjin` | 1 | 1 |
| `au.com.cameronwilson.camfeed` | 1 | 1 |
| `build.exascale` | 1 | 1 |
| `cat.2022` | 1 | 1 |
| `build.naru` | 1 | 1 |
| `co.tempguru` | 1 | 1 |
| `com.a2a2p` | 1 | 1 |
| `com.apple-rag` | 1 | 1 |
| `com.babyblueviper` | 1 | 1 |
| `com.cloudflare.mcp` | 1 | 1 |
| `com.contrastcyber` | 1 | 1 |
| `com.emorahealth` | 1 | 1 |
| `com.epovest` | 1 | 1 |
| `com.feranor` | 1 | 1 |
| `com.geezerkeeper` | 1 | 1 |
| `com.gleanmark` | 1 | 1 |
| `com.holdingsintel` | 1 | 1 |
| `com.kitsdeals` | 1 | 1 |
| `com.mandateshield` | 1 | 1 |
| `com.meritvalue` | 1 | 1 |
| `com.negativeev` | 1 | 1 |
| `com.ntop` | 1 | 1 |
| `com.obriym-crm` | 1 | 1 |
| `com.politicalcomms` | 1 | 1 |
| `com.predictionmarketspicks` | 1 | 1 |
| `com.psychiatryforkids` | 1 | 1 |
| `com.quantum-expectations` | 1 | 1 |
| `com.rigorloop` | 1 | 1 |
| `com.songstoyoureyes` | 1 | 1 |
| `com.somosvelora` | 1 | 1 |
| `com.teenpsychiatry` | 1 | 1 |
| `com.tipranks` | 1 | 1 |
| `com.tulimoa` | 1 | 1 |
| `com.wikitolica` | 1 | 1 |
| `com.zyberno` | 1 | 1 |
| `dev.e18e` | 1 | 1 |
| `dev.busymate` | 1 | 1 |
| `dev.svelte` | 1 | 1 |
| `dev.turva` | 1 | 1 |
| `dev.zerm` | 1 | 1 |
| `eu.tradedashboard` | 1 | 1 |
| `fyi.medrates` | 1 | 1 |
| `glass.cocktail` | 1 | 1 |
| `io.agent4` | 1 | 1 |
| `io.blockchainanalysis` | 1 | 1 |
| `io.gamefork` | 1 | 1 |
| `io.github.addychang` | 1 | 1 |
| `io.github.africanmarketos591` | 1 | 1 |
| `io.github.antoinedelorme` | 1 | 1 |
| `io.github.asokore` | 1 | 1 |
| `io.github.ariffazil` | 1 | 1 |
| `io.github.byimprint` | 1 | 1 |
| `io.github.Cmoen11` | 1 | 1 |
| `io.github.crossi-dev` | 1 | 1 |
| `io.github.Dahliyaal` | 1 | 1 |
| `io.github.DHEBP` | 1 | 1 |
| `io.github.DrRataplan` | 1 | 1 |
| `io.github.fmadore` | 1 | 1 |
| `io.github.gautamgb` | 1 | 1 |
| `io.github.HEUSAI` | 1 | 1 |
| `io.github.imprezahost` | 1 | 1 |
| `io.github.KG-NINJA` | 1 | 1 |
| `io.github.LE-VAI` | 1 | 1 |
| `io.github.MarshallBear1` | 1 | 1 |
| `io.github.medprice-ai` | 1 | 1 |
| `io.github.nalegaluorg` | 1 | 1 |
| `io.github.nu-people` | 1 | 1 |
| `io.github.PatrickPi1312` | 1 | 1 |
| `io.github.privatelawattorneys` | 1 | 1 |
| `io.github.rhein1` | 1 | 1 |
| `io.github.re-port-flow` | 1 | 1 |
| `io.github.rationalbloks` | 1 | 1 |
| `io.github.rezearcher` | 1 | 1 |
| `io.github.seunghan91` | 1 | 1 |
| `io.github.Steven3265` | 1 | 1 |
| `io.github.tcador` | 1 | 1 |
| `io.github.Tanbir404` | 1 | 1 |
| `io.github.tickadoo` | 1 | 1 |
| `io.github.vassiliylakhonin` | 1 | 1 |
| `io.github.vybenetwork` | 1 | 1 |
| `io.github.youdotcom-oss` | 1 | 1 |
| `io.github.zemloai-ctrl` | 1 | 1 |
| `io.github.zation` | 1 | 1 |
| `io.mediawork` | 1 | 1 |
| `io.seaworthy` | 1 | 1 |
| `link.cyberelf.whetstone` | 1 | 1 |
| `org.wegtultrarich` | 1 | 1 |
| `online.sasame` | 1 | 1 |
| `ru.activatedai` | 1 | 1 |
| `ru.layero` | 1 | 1 |
| `sh.releases` | 1 | 1 |
| `site.chatgpt.larklaon.one-bad-idea` | 1 | 1 |
| `xyz.urbanplayground` | 1 | 1 |
| `ai.trendsmcp` | 20 | 0 |
| `io.github.johnisanerd` | 18 | 0 |
| `io.github.mikerawsonnz` | 9 | 0 |
| `io.github.PrometheusAgency` | 8 | 0 |
| `io.github.apifymcpfactory-droid` | 3 | 0 |
| `io.github.Cookient16` | 3 | 0 |
| `io.github.dizzyvinci` | 2 | 0 |
| `ai.analyticslegends` | 1 | 0 |
| `ai.primateintelligence` | 1 | 0 |
| `ai.satoshidata` | 1 | 0 |
| `ai.wubble` | 1 | 0 |
| `app.2ools` | 1 | 0 |
| `at.designare` | 1 | 0 |
| `co.ainumbers` | 1 | 0 |
| `com.apify` | 1 | 0 |
| `com.am-lich` | 1 | 0 |
| `com.ainetcafe` | 1 | 0 |
| `com.datasignalslab` | 1 | 0 |
| `com.dapdip` | 1 | 0 |
| `com.globalsourcepartners` | 1 | 0 |
| `com.gribstream` | 1 | 0 |
| `com.leewaystudio` | 1 | 0 |
| `com.metricduck` | 1 | 0 |
| `com.saasbrowser` | 1 | 0 |
| `com.sponsorable` | 1 | 0 |
| `com.teamwork` | 1 | 0 |
| `com.unlistedinc` | 1 | 0 |
| `dev.desvela` | 1 | 0 |
| `com.viatsy` | 1 | 0 |
| `dev.gemot` | 1 | 0 |
| `dev.promplate` | 1 | 0 |
| `events.belong` | 1 | 0 |
| `io.github.agenticempire` | 1 | 0 |
| `io.github.avabuildsdata` | 1 | 0 |
| `io.github.AshutoshRaj97` | 1 | 0 |
| `io.github.benmilne-com` | 1 | 0 |
| `io.github.cnghockey` | 1 | 0 |
| `io.github.fashionmascherine-svg` | 1 | 0 |
| `io.github.gbude-sudo` | 1 | 0 |
| `io.github.getambr` | 1 | 0 |
| `io.github.hassanahashish-design` | 1 | 0 |
| `io.github.jackculpan` | 1 | 0 |
| `io.github.iQuesta` | 1 | 0 |
| `io.github.influqa` | 1 | 0 |
| `io.github.JdPG23` | 1 | 0 |
| `io.github.kapoost` | 1 | 0 |
| `io.github.killbridge` | 1 | 0 |
| `io.github.Kubedoll-Heavy-Industries` | 1 | 0 |
| `io.github.KincaidYang` | 1 | 0 |
| `io.github.makloai` | 1 | 0 |
| `io.github.Nikolife2016` | 1 | 0 |
| `io.github.oasdiff` | 1 | 0 |
| `io.github.peterod99` | 1 | 0 |
| `io.github.parkragsterman` | 1 | 0 |
| `io.github.projecttron` | 1 | 0 |
| `io.github.shawndei` | 1 | 0 |
| `io.github.snehdhruv` | 1 | 0 |
| `io.github.sreichsbb-stack` | 1 | 0 |
| `io.github.Stackbilt-dev` | 1 | 0 |
| `io.github.sunholo-data` | 1 | 0 |
| `io.github.trip2g` | 1 | 0 |
| `io.github.veyvey45-eng` | 1 | 0 |
| `io.github.wrbtc` | 1 | 0 |
| `io.github.workopia` | 1 | 0 |
| `io.github.Whitemarmot` | 1 | 0 |
| `io.laraplugins` | 1 | 0 |
| `io.systemprompt` | 1 | 0 |
| `live.innernet` | 1 | 0 |
| `llc.facet` | 1 | 0 |
| `me.untype` | 1 | 0 |
| `net.origingrid` | 1 | 0 |
| `rs.ferritin` | 1 | 0 |
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

## ✅ Fully conformant (151)

| Server | `server/discover` | Cold `tools/list` | No session id | `resultType` | `ttlMs`+`cacheScope` | `-32022` | `-32020` |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| `ac.inference.sh/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.childadhd/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.childanxiety/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.childpsychiatry/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.dsght/public` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.jobero/job-search` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.muffed/muffed` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.pubfi/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.teenadhd/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.teenanxiety/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.teenpsychiatry/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.teentherapy/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ai.workingmemory/memory` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `app.noemic/noemic` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `app.onehaus/haus` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `app.racecalendar/f1` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `app.saber.mcp/saber` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `app.sallim/contract-compass` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `au.com.cameronwilson.camfeed/camfeed` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `blog.tenjin/tenjin` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `build.exascale/osint` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `build.naru/contract-compass` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `cat.2022/catalunya-2022` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `co.tempguru/event-staffing` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.a2a2p/a2a2p` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.apple-rag/mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.babyblueviper/invinoveritas` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.cloudflare.mcp/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.contrastcyber/api` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.emorahealth/mental-health-care` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.epovest/ai-visibility` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.feranor/resilience` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.geezerkeeper/referral-exit-routes` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.gleanmark/trademark-search` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.holdingsintel/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.jithox/einvoice-readiness` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.jithox/eu-import-preflight` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.jithox/eu-sanctions-preflight` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.kitsdeals/deals` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.mandateshield/payment-authority` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.meritvalue/meritvalue` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.negativeev/bet-checker` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.ntop/docs` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.obriym-crm/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.politicalcomms/docs` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.predictionmarketspicks/quant` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.psychiatryforkids/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.quantum-expectations/quantum-expectations` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.rigorloop/research-bounties` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.somosvelora/velora` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.songstoyoureyes/catalog` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.teenpsychiatry/library` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.tipranks/tipranks` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.tulimoa/platform` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.wikitolica/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `com.zyberno/zyberno` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `dev.busymate/busymate-devtools` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `dev.e18e/e18e` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `dev.svelte/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `dev.turva/turva-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `dev.zerm/zerm` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `eu.tradedashboard/eu-trade-explorer` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `fyi.medrates/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `glass.cocktail/cocktail-glass` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.agent4/agent4-tenant` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.blockchainanalysis/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.gamefork/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.addychang/miniurl` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.adewale/agentic-mermaid` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.adewale/keyboardia` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.africanmarketos591/mvr-api` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.antoinedelorme/kweenkl-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.ariffazil/arifos` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.asokore/statcite` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.beepboop2025/liquilens` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.byimprint/intelligence` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.Cmoen11/redm-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.crossi-dev/latam-tools` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/arxiv-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/bls-labor-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/calculator-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/cdc-health-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/clinicaltrialsgov-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/cyanheads-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/ensembl-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/eur-lex-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/eurostat-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/federal-regulations-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/fema-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/gdelt-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/gutenberg-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/met-museum-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/musicbrainz-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/national-parks-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/nhtsa-vehicle-safety-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/onebusaway-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/open-meteo-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/openalex-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/pentest-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/pokeapi-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/pubchem-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/pubmed-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/secedgar-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/socrata-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/stackexchange-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/usgs-water-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.cyanheads/wikidata-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.Dahliyaal/justicelibre` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.DHEBP/dero-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.DrRataplan/fonto-docs` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.fmadore/iwac-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.gautamgb/mcp-server-mcpindex` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.HEUSAI/notsy-facturacion` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.imprezahost/impreza-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.KG-NINJA/hyperxosist-agent` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.LE-VAI/designesy-org` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.MarshallBear1/juno-open-health-tools` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.medprice-ai/mcp-medprice-ai` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.nalegaluorg/nalegalu` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.nu-people/nue-people-jobs` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.PatrickPi1312/eu-compliance` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.privatelawattorneys/wiki-private-law` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.rationalbloks/rationalbloks-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.re-port-flow/reportflow-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.rezearcher/tech-risk` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.rhein1/agoragentic` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.seunghan91/ainote` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.SidneyBissoli/ibge-br-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.SidneyBissoli/medical-terminologies-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.Steven3265/homechecker-guides` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.stillmarcus24/stillos-edge-gate` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.stillmarcus24/stillos-kya` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.stillmarcus24/stillos-notary-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.Tanbir404/zephex` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.tcador/787daily` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.tickadoo/tickadoo-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.vassiliylakhonin/profile-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.vybenetwork/vybe-solana-api` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.youdotcom-oss/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.zation/agent-radar` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.zemloai-ctrl/elecz` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.mediawork/mediawork` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.seaworthy/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `link.cyberelf.whetstone/tools` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `online.sasame/research` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `org.wegtultrarich/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ru.activatedai/activated-ai` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `ru.layero/layero` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `sh.releases/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `site.chatgpt.larklaon.one-bad-idea/not-work` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `xyz.urbanplayground/events` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## 🟡 Partial: implements `server/discover` but fails a MUST (131)

| Server | `server/discover` | Cold `tools/list` | No session id | `resultType` | `ttlMs`+`cacheScope` | `-32022` | `-32020` |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| `ai.analyticslegends/sap-analytics` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| `ai.primateintelligence/mcp` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
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
| `app.2ools/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `at.designare/knowledge` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `co.ainumbers/tools` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| `com.ainetcafe/ai-netcafe` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `com.am-lich/vietnamese-calendar` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `com.apify/apify-mcp-server` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `com.dapdip/youtube-growth` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `com.datasignalslab/datasignals-lab-mcp` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `com.globalsourcepartners/emerging-markets-research` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `com.gribstream/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `com.leewaystudio/code-synapse` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `com.metricduck/financial-analysis` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `com.saasbrowser/saas-browser` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| `com.sponsorable/sponsorable` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `com.teamwork/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `com.unlistedinc/unlisted` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `com.viatsy/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| `dev.desvela/brand-watch` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `dev.gemot/gemot` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `dev.promplate/hmr` | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ |
| `events.belong/long-events` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.agenticempire/axint` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `io.github.apifymcpfactory-droid/eu-vat-validator` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.apifymcpfactory-droid/llms-txt-checker` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.apifymcpfactory-droid/tech-stack-detector` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.AshutoshRaj97/agentready-mcp` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.avabuildsdata/mcp-us-business-data` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.beepboop2025/undertow` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| `io.github.benmilne-com/benmilne` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.cnghockey/sats4ai` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| `io.github.Cookient16/ai-brand-visibility-tracker` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.Cookient16/bluesky-mentions-scraper` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.Cookient16/bluesky-profile-scraper` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.dizzyvinci/building-permit-aggregator` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.dizzyvinci/shopify-catalog-monitor` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.fashionmascherine-svg/document-to-json-mcp` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.gbude-sudo/dreameros-scs-gateway` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.getambr/ambr-mcp-server` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `io.github.hassanahashish-design/agent-signals-mcp` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.influqa/crypto-agent-mail` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.iQuesta/MCP-iQuesta` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.jackculpan/flightseatmap` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
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
| `io.github.kapoost/humanmcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `io.github.killbridge/startupjobs-mcp` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.KincaidYang/whois` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `io.github.Kubedoll-Heavy-Industries/helm-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `io.github.makloai/mcp-server-dashform` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `io.github.mikerawsonnz/auth-token-service` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/authenticated-llm-agent` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/authenticated-mcp-agent` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/authenticated-multi-llm-agent` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/gosce-portfolio-router` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/llm-observability-orchestration` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/llm-orchestration-agent` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/structured-output-agent` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.mikerawsonnz/traced-llm-proxy` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.Nikolife2016/pulsefeed-x402` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| `io.github.oasdiff/oasdiff` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `io.github.parkragsterman/whyismy-org` | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| `io.github.peterod99/nynch` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
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
| `io.github.sunholo-data/parse` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `io.github.trip2g/trip2g` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `io.github.veyvey45-eng/travel-monitor-launch` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.github.Whitemarmot/copyright01` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.workopia/workopia-mcp` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `io.github.wrbtc/wallet-intelligence` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `io.laraplugins/mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `io.systemprompt/reports` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| `live.innernet/innernet` | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| `llc.facet/ucp-shopping` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| `me.untype/aboard` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| `net.origingrid/origingrid-mcp` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `rs.ferritin/rustdoc` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `space.0/space0` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `to.agentservices/agentservices` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |

## Most-failed rules, among servers that claim 2026

Ranked over the **282** servers that implement `server/discover`, i.e. that
claim the new spec. Servers still on 2025 are counted as non-adopters, not as failures:
a 2025-era server cannot "fail to return `-32022`" when it never defined that code, and
mixing the two populations would turn non-adoption into a fake quality finding.

| Rule | Adopters failing | of 282 |
| --- | ---: | ---: |
| MUST return -32022 UnsupportedProtocolVersion (minor-12) | 118 | 42% |
| MUST return -32020 HeaderMismatch (minor-4/12) | 111 | 39% |
| SHOULD echo serverInfo in result _meta (major-2) | 59 | 21% |
| MUST answer cold tools/list without handshake (major-2) | 55 | 20% |
| MUST set resultType (major-8) | 48 | 17% |
| MUST return ttlMs + cacheScope on tools/list (minor-5) | 38 | 13% |
| MUST NOT issue Mcp-Session-Id (major-1) | 2 | 1% |
| MUST serve independent requests (major-1) | 1 | 0% |

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
118 servers currently miss "return -32022 UnsupportedProtocolVersion (minor-12)".

Auth-gated servers are welcome too. They're recorded as **unverified**, never as passing.
if you want a green row, expose an unauthenticated `server/discover`, which the spec
requires anyway.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full checklist and how to dispute a verdict.

---

Corpus: the official MCP registry plus community submissions.

[r/webafterai](https://reddit.com/r/webafterai) · [newsletter](https://webafterai.substack.com/)

