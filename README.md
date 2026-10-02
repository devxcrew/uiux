# UIUX Developer Gallery

UIUX runs separately from Cxsun and previews the public components, blocks, layouts, pages, and templates in D:\codexsun\shared\ui. It has no backend, login requirement, or database.

From D:\codexsun\devkits\uiux:

```powershell
npm install
npm run verify
npm run dev
```

Open http://127.0.0.1:6102/. Cxsun runs independently on port 5173.

The web workspace links @codexsun/ui through file:../../../shared/ui. The install hook installs shared UI dependencies. Configure WEB_HOST and WEB_PORT in web/.app.env; defaults are 127.0.0.1 and 6102. Keep this local file out of Git. web/.app.env.example contains the template.

Gallery code belongs in web/src/modules/gallery. Shared components are imported through the public UI package exports. npm run build writes the standalone frontend to dist; npm run preview --workspace @codexsun/uiux-web serves that build.

## Common maintenance commands

All repositories use the installed @devxcrew/tools package through these root scripts:

```powershell
npm run tools:check
npm run version:show
npm run version:update -- --dry-run
npm run check:versions
npm run changelog:show
npm run changelog:append -- --title "Change title" --note "Change details"
npm run lines:check
npm run fix:line-endings
npm run github:now -- --dry-run
```

Version updates and changelog appends change local files. github:now without --dry-run can commit and push after its review prompts. Reusable UI and framework packages keep their package-specific build contracts; the gallery keeps its standalone Vite workspace.

## Common governance MCP

Use npm run mcp:connect for read-only repository, UI, and code guidance. It continues offline using the guides in assist/governance. Configure the connection through .env.example. See assist/GOVERNANCE.md for headers and client setup. This command is independent of application startup and verification.
