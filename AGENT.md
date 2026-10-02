# uiux agent notes

Own the separate developer gallery. Use shared UI exports. Keep business and database code outside this repository.

## Repository-specific rules

This developer tool lives in D:\codexsun\devkits\uiux and runs separately from Cxsun.

- Gallery code and examples belong here.
- Consume reusable components through @codexsun/ui from D:\codexsun\shared\ui.
- Keep business modules, authentication, and database code outside the gallery.
- Do not commit .app.env, node_modules, dist, or runtime files.
- Run npm run verify from this directory and check the gallery on port 6102.

## Working instructions

Read agent/SKILLS.md, agent/TASK.md, agent/PLAN.md, and agent/CHANGELOG.md before work. Common standards live only in shared/mcp-governance/assist/guides. Use npm run mcp:connect for current instructions. If MCP is offline, read this AGENT.md and the central files when available. Continue development without a connection gate.

Use npm run version-bump with a title and note for a release. Maintain agent/CHANGELOG.md and preserve history. Use npm run fix:line-endings and npm run lines:check. Run npm run check:versions and the repository checks before npm run github:now. Review its changed files and commit subject. The subject uses #<patch> - <release title>. Commit, push, and publish only within user authorization.

Keep MCP_SERVER_SECRET in ignored .env and outside frontend code. App ID and app user are developer context only.
