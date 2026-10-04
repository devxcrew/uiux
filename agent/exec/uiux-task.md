# Gallery work

## Ownership

Work from `D:\codexsun\devkits\uiux`. Read `AGENTS.md` and `agent/SKILLS.md` before edits. Gallery
code belongs here. Reusable components belong to `shared/ui` and use public `@devxcrew/react-ui` exports.
Keep business APIs, identity, storage, and databases outside the gallery.

## Run

Install dependencies from the repository root. Configure `web/.app.env` using
`web/.app.env.example`. Keep local environment files out of Git.

```powershell
npm install
npm run verify
npm run dev
```

Gallery URL: `http://127.0.0.1:6102/`. Cxsun runs separately on port 5173.

## Verify

`npm run verify` checks directory boundaries, TypeScript, and the production build.

In the browser, check the overview and sidebar navigation. Open representative component, block,
layout, page, and template previews. Investigate browser errors. The gallery has no backend,
identity, or database checks.
