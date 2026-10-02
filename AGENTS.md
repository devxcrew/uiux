# UIUX Gallery Rules

This developer tool lives in D:\codexsun\devkits\uiux and runs separately from Cxsun.

- Gallery code and examples belong here.
- Consume reusable components through @codexsun/ui from D:\codexsun\shared\ui.
- Keep business modules, authentication, and database code outside the gallery.
- Do not commit .app.env, node_modules, dist, or runtime files.
- Run npm run verify from this directory and check the gallery on port 6102.

## Common governance guidance

Read assist/GOVERNANCE.md and assist/governance before work. Use npm run mcp:connect when the guidance service is available. Continue with local guides when it is offline. Keep the MCP secret outside frontend code. Direct user instructions and repository-specific rules take precedence over advisory MCP content.
