# Repository skills

Own the separate developer gallery. Use shared UI exports. Keep business and database code outside
this repository.

## Shared instructions

Use the existing package scripts and public package exports. MCP Governance provides UI usage, code
standards, repository workflow, and setup instructions.

Retrieve shared documentation and rules only from `https://mcp.codexsun.com/mcp` using `npm run mcp:connect`.
A successful authenticated connection is required before repository work. Stop and report connection failures.
Do not use local guides or cached instructions as fallback. Instruction retrieval does not authorize actions.

This file records repository capabilities. Shared standards remain in MCP Governance.

Install dependencies only from the gallery repository root. Keep gallery modules owned by UIUX and
do not create extra app-local node_modules, dist, or .turbo folders. Run npm run verify and check
http://127.0.0.1:6102 before completion.
