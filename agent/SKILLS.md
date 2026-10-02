# Repository skills

Own the separate developer gallery. Use shared UI exports. Keep business and database code outside this repository.

Use the existing package scripts and public package exports. Common UI usage, code standards, repository workflow, and setup instructions are served by mcp-governance. Retrieve them with npm run mcp:connect. Central source: ../../shared/mcp-governance/assist/guides. This file contains repository-specific capability notes, not a duplicate standards catalog.

Install dependencies only from the gallery repository root. Keep gallery modules owned by UIUX and do not create extra app-local node_modules, dist, or .turbo folders. Run npm run verify and check http://127.0.0.1:6102 before completion.
