<!-- Adding a server? That's the common case — just fill in the first block. -->

**Server:** `com.example/my-server`
**Endpoint:** https://mcp.example.com/mcp

- [ ] Added to `servers.json`
- [ ] This is a distinct deployment, not another subdomain of a server already listed
- [ ] Endpoint is reachable without credentials (or I understand it will be recorded as *unverified*, not passing)

CI probes only the endpoints this PR touches and posts the verdict below. A failing
verdict cites the exact spec rule — fix and push again, no need to reopen.

<!-- Changing the probe or report instead? Describe what rule changed and link the spec line. -->
