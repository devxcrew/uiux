# uiux

Own the separate developer gallery. Use shared UI exports. Keep business and database code outside this repository.

Gallery URL: http://127.0.0.1:6102. Configure the gallery in web/.app.env. Reusable UI comes from @codexsun/ui.

## Run

Use Node 26.10 or newer and the package manifest requirements. Clone the sibling tools and mcp-governance repositories along with this repository.

```powershell
npm install
npm run verify
npm run dev
```

## Guidance and agent records

Common guidance and audit reports live only in ../../shared/mcp-governance/assist. This repository has no assist folder. Read AGENT.md and agent/SKILLS.md, TASK.md, PLAN.md, and CHANGELOG.md. AGENTS.md is an agent discovery pointer.

Configure MCP_SERVER_URL, MCP_SERVER_SECRET, APP_ID, and APP_USER through .env.example. Keep the secret in ignored .env. Run npm run mcp:connect to retrieve instructions or npm run mcp:verify for a strict connection test. Connection failures do not gate application work. Editor registration uses the central connection template and remains client-specific.

## Maintenance

```powershell
npm run version-bump -- --dry-run
npm run version-bump -- --title "Release title" --note "Change details"
npm run check:versions
npm run fix:line-endings
npm run lines:check
npm run github:now -- --dry-run
```

Version bumps update package.json, package-lock.json, and agent/CHANGELOG.md. Record changes and validation before committing. The commit subject is #<patch> - <release title>, for example #4 - Common MCP governance guidance. Review the files before an authorized npm run github:now. Do not bump again during GitHub review if the release version is already updated.

The workspace maintenance entry point delegates to shared/tools. The installed npm tools version remains pinned at 0.1.3 until a release with agent changelog support is published. GitHub source releases use github:now. Npm publication requires separate authorization.
