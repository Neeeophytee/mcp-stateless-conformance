// MCP 2026-07-28 stateless conformance probe.
//
// Every check below maps to a specific line in the spec changelog, so a failure
// cites a rule rather than an opinion:
//
//   MUST  server/discover implemented ................. major change 3
//   MUST  no initialize handshake required ............ major change 2
//   MUST  no Mcp-Session-Id header .................... major change 1
//   MUST  results carry resultType .................... major change 8
//   MUST  list results carry ttlMs + cacheScope ....... minor change 5
//   MUST  Mcp-Method / Mcp-Name headers accepted ...... minor change 4
//   MUST  UnsupportedProtocolVersion == -32022 ........ minor change 12
//   SHOULD serverInfo in result _meta ................. major change 2
//   SHOULD deterministic tools/list order ............. minor change 3
//
//   node conformance.mjs servers.json results.jsonl
//
import { readFileSync, createWriteStream } from "fs";

const SPEC = "2026-07-28";
const TIMEOUT_MS = 12000;
const CONCURRENCY = Number(process.env.CONC || 10);

const CLIENT_META = {
  "io.modelcontextprotocol/protocolVersion": SPEC,
  "io.modelcontextprotocol/clientInfo": { name: "flowstacks-conformance", version: "0.1" },
  "io.modelcontextprotocol/clientCapabilities": {},
};

async function parseBody(res) {
  const text = await res.text();
  if ((res.headers.get("content-type") || "").includes("text/event-stream")) {
    for (const line of text.split(/\r?\n/)) {
      if (line.startsWith("data:")) {
        try { return JSON.parse(line.slice(5).trim()); } catch {}
      }
    }
    return null;
  }
  try { return JSON.parse(text); } catch { return { __raw: text.slice(0, 300) }; }
}

// Sends a spec-shaped stateless request: envelope _meta in params, plus the
// Mcp-Method / Mcp-Name routing headers the transport now requires.
async function call(url, method, params = {}, opts = {}) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  const headers = {
    "content-type": "application/json",
    accept: "application/json, text/event-stream",
    "user-agent": "flowstacks-mcp-conformance/0.1",
    "mcp-protocol-version": opts.version || SPEC,
    "mcp-method": opts.headerMethod || method,
    ...(opts.name ? { "mcp-name": opts.name } : {}),
    ...(opts.headers || {}),
  };
  const body = {
    jsonrpc: "2.0",
    id: Math.floor(Math.random() * 1e6),
    method,
    params: opts.noEnvelope ? params : { ...params, _meta: { ...CLIENT_META,
      ...(opts.version ? { "io.modelcontextprotocol/protocolVersion": opts.version } : {}) } },
  };
  try {
    const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(body), signal: ctl.signal, redirect: "follow" });
    return { status: res.status, sessionId: res.headers.get("mcp-session-id"),
             wwwAuth: res.headers.get("www-authenticate"), body: await parseBody(res) };
  } catch (e) {
    return { status: 0, error: e.name === "AbortError" ? "timeout" : e.message };
  } finally { clearTimeout(t); }
}

const errCode = (r) => r?.body?.error?.code ?? null;
const result  = (r) => (r?.status === 200 ? r?.body?.result ?? null : null);

async function probe(srv) {
  const out = { name: srv.name, url: srv.url, transport: srv.type, checks: {}, failures: [] };
  const C = out.checks;

  // Only hold a server to a 2026 MUST once it has claimed 2026 by implementing
  // server/discover. Charging a 2025-era server with "did not return -32022" is
  // tautological: it cannot fail to renumber an error code it never defined.
  // Failures are recorded either way; `appliesTo` decides what gets aggregated.
  const fail = (rule) => out.failures.push(rule);

  // The registry's `sse` type is the deprecated HTTP+SSE transport. Probing it
  // with Streamable HTTP POST measures the wrong protocol, so it gets its own
  // bucket instead of a meaningless "legacy-stateful" verdict.
  if (srv.type === "sse") {
    out.verdict = "transport-deprecated";
    out.detail = "declares deprecated HTTP+SSE transport; not probed as Streamable HTTP";
    return out;
  }

  // --- server/discover: the definitive 2026 marker. MUST be implemented. ----
  const disc = await call(srv.url, "server/discover");
  if (disc.status === 0) { out.verdict = "unreachable"; out.detail = disc.error; return out; }
  if (disc.status === 401 || disc.status === 403) {
    out.verdict = "auth-required";
    out.detail = `HTTP ${disc.status}`;
    C.oauthChallenge = !!disc.wwwAuth;
    return out;
  }

  const dres = result(disc);
  C.serverDiscover = !!dres;
  if (dres) {
    C.advertisedVersions = dres.protocolVersions || dres.supportedProtocolVersions || null;
    C.serverName = dres.serverInfo?.name || null;
  } else fail("MUST server/discover (major-3)");

  // --- cold tools/list, no handshake ---------------------------------------
  const cold = await call(srv.url, "tools/list", {}, { name: "" });
  const cres = result(cold);
  C.coldToolsList = !!cres;
  C.coldStatus = cold.status;
  if (!cres) fail("MUST answer cold tools/list without handshake (major-2)");

  // --- session header must be gone -----------------------------------------
  C.issuesSessionId = !!(disc.sessionId || cold.sessionId);
  if (C.issuesSessionId) fail("MUST NOT issue Mcp-Session-Id (major-1)");

  if (cres) {
    out.toolCount = Array.isArray(cres.tools) ? cres.tools.length : null;
    // resultType on every result
    C.resultType = cres.resultType ?? null;
    if (cres.resultType !== "complete") fail("MUST set resultType (major-8)");
    // CacheableResult fields on list endpoints
    C.ttlMs = cres.ttlMs ?? null;
    C.cacheScope = cres.cacheScope ?? null;
    if (cres.ttlMs === undefined || cres.cacheScope === undefined)
      fail("MUST return ttlMs + cacheScope on tools/list (minor-5)");
    // serverInfo echoed in result _meta
    C.serverInfoInMeta = !!cres._meta?.["io.modelcontextprotocol/serverInfo"];
    if (!C.serverInfoInMeta) fail("SHOULD echo serverInfo in result _meta (major-2)");
  }

  // --- version negotiation error code --------------------------------------
  const bogus = await call(srv.url, "tools/list", {}, { version: "1999-01-01" });
  C.badVersionCode = errCode(bogus);
  if (C.badVersionCode !== -32022) fail("MUST return -32022 UnsupportedProtocolVersion (minor-12)");

  // --- header/body mismatch must be rejected -------------------------------
  const mism = await call(srv.url, "tools/list", {}, { headerMethod: "resources/list" });
  C.headerMismatchCode = errCode(mism);
  if (C.headerMismatchCode !== -32020) fail("MUST return -32020 HeaderMismatch (minor-4/12)");

  // --- determinism across independent requests (no sticky routing) ---------
  if (cres) {
    const [a, b] = await Promise.all([
      call(srv.url, "tools/list", {}, { headers: { connection: "close" } }),
      call(srv.url, "tools/list", {}, { headers: { connection: "close" } }),
    ]);
    const ra = result(a), rb = result(b);
    C.independentRequests = !!(ra && rb);
    C.deterministicOrder =
      ra?.tools && rb?.tools
        ? JSON.stringify(ra.tools.map((t) => t.name)) === JSON.stringify(rb.tools.map((t) => t.name))
        : null;
    if (!C.independentRequests) fail("MUST serve independent requests (major-1)");
    if (C.deterministicOrder === false) fail("SHOULD return deterministic tool order (minor-3)");
  }

  // --- legacy surface still present? (informational) -----------------------
  const legacy = await call(srv.url, "initialize",
    { protocolVersion: "2025-11-25", capabilities: {}, clientInfo: { name: "p", version: "0" } },
    { version: "2025-11-25", noEnvelope: true });
  C.legacyInitializeAnswered = !!result(legacy);
  C.legacyNegotiatedVersion = result(legacy)?.protocolVersion || null;

  // --- verdict --------------------------------------------------------------
  const musts = out.failures.filter((f) => f.startsWith("MUST")).length;
  if (C.serverDiscover && musts === 0) out.verdict = "conformant";
  else if (C.serverDiscover) out.verdict = "partial-2026";
  else if (C.coldToolsList) out.verdict = "stateless-ish-legacy";
  else out.verdict = "legacy-stateful";

  // A server that never claimed 2026 is a non-adopter, not a broken implementer.
  // Reports must not blend the two populations into one failure ranking.
  out.claims2026 = !!C.serverDiscover;
  return out;
}

// A single endpoint that never settles must not be able to destroy the whole
// run, so results stream to disk as JSONL and every probe carries a hard
// watchdog that resolves even if fetch abandons its abort.
// The watchdog timer must NOT be unref'd: an unref'd timer cannot hold the event
// loop open, so Node exits with code 13 (unfinished top-level await) before the
// deadline ever fires — which is exactly how the first full CI run died at
// 1471/1472. Clear it on the winning path so a finished probe exits promptly.
const withDeadline = (p, ms, onTimeout) => {
  let timer;
  const deadline = new Promise((res) => { timer = setTimeout(() => res(onTimeout()), ms); });
  return Promise.race([p, deadline]).finally(() => clearTimeout(timer));
};

const servers = JSON.parse(readFileSync(process.argv[2], "utf8"));
const out = createWriteStream(process.argv[3] || "results.jsonl", { flags: "a" });
let i = 0, done = 0;
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (i < servers.length) {
    const s = servers[i++];
    const r = await withDeadline(
      probe(s).catch((e) => ({ name: s.name, url: s.url, verdict: "error", detail: String(e.message), failures: [] })),
      TIMEOUT_MS * 8,
      () => ({ name: s.name, url: s.url, verdict: "unreachable", detail: "watchdog", failures: [] })
    );
    done++;
    out.write(JSON.stringify(r) + "\n");
    process.stderr.write(`${String(done).padStart(4)}/${servers.length} ${r.verdict.padEnd(20)} ${r.name}\n`);
  }
}));
out.end();
process.exit(0);
