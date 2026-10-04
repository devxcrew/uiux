# uiux

Own the separate developer gallery. Use shared UI exports. Keep business and database code outside
this repository.

Gallery URL: http://127.0.0.1:6102. Configure the gallery in web/.app.env. Reusable UI comes from
@devxcrew/react-ui.

## Run

Use Node 26.10 or newer and the package manifest requirements. Clone the sibling tools and
mcp-governance repositories along with this repository.

```powershell
npm install
npm run verify
npm run dev
```

## Repository records

- `AGENTS.md`: repository instructions and ownership rules.
- `agent/SKILLS.md`: repository capabilities.
- `agent/TASK.md`: current task and status.
- `agent/PLAN.md`: next steps.
- `agent/CHANGELOG.md`: versioned changes and validation results.

## Shared guidance

Retrieve shared documentation and rules only from `https://mcp.codexsun.com/mcp` using `npm run mcp:connect`.
A successful authenticated connection is required before repository work. Stop and report connection failures.
Do not use local guides or cached instructions as fallback. Instruction retrieval does not authorize actions.

Configure these values with `.env.example`:

- `MCP_SERVER_URL`
- `MCP_SERVER_SECRET`
- `APP_ID`
- `APP_USER`

Keep the secret in ignored `.env` files.

```powershell
npm run mcp:connect
npm run mcp:verify
```

Use `mcp:connect` to retrieve instructions. Use `mcp:verify` for a strict connection test.
Stop repository work and report a failed connection. Editor registration depends on the editor and
the central connection template.

## Maintenance

```powershell
npm run version-bump -- --dry-run
npm run version-bump -- --title "Release title" --note "Change details"
npm run check:versions
npm run fix:line-endings
npm run lines:check
npm run github:now -- --dry-run
```

Version bumps align `package.json`, `package-lock.json`, and `agent/CHANGELOG.md`. Record changes
and validation before committing.

Commit subjects use `#<patch> - <release title>`. For example:
`#5 - Central governance and repository agent layout`.

Review the changed files before an authorized `npm run github:now`. Do not bump again when the
release version is already prepared.

## Tools source and publication

Workspace maintenance delegates to `shared/tools`. The installed npm package remains pinned at
`0.1.3` until agent changelog support is published.

GitHub source releases use `github:now`. Npm publication requires separate authorization.

## Current local verification - 2026-10-04

Run `npm run verify` from this repository root. It includes lint, schema behavior tests, build and bundle budgets.
The resource example uses TanStack Form and an owner-local Zod schema.
Its deterministic save adapter independently validates input and returns a linked duplicate-name field error.
This adapter is a gallery fixture. Cxsun owns live API and database acceptance.

The supported gallery profile is a developer desktop browser with deferred feature pages.
Initial JavaScript gzip is limited to 300 KiB. Initial CSS gzip is limited to 50 KiB.
Each deferred JavaScript chunk is limited to 480 KiB gzip and 1600 KiB raw.
The large ELK layout engine remains deferred for diagram examples. This budget is not a business-app performance target.
The budget script reads Vite's production manifest. It counts static entry imports and fails when a limit is exceeded.
Type declarations resolve through the intentional UI source owner to prevent duplicate React symbols.

### Published UI verification

Run `npm run test:registry` to verify an isolated gallery against published UI 0.2.0. The normal gallery keeps its source-development dependency. The command records installation, clean-install and build results in `agent/REGISTRY-CONSUMER.json`. Browser acceptance is a separate task.
