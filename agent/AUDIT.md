# Verification evidence

## Package reference cleanup - 2026-10-05

- [x] Retrieve authenticated cloud governance.
- [x] Remove superseded package identifiers from source, fixtures and current documents.
- [x] Use Framework and UI names consistently.
- [x] Scan repository files for remaining superseded identifiers.

Static cleanup only. No test suite, publication or deployment ran in this step.


## Package migration - 2026-10-05

- [x] Retrieve authenticated cloud governance before this migration.
- [x] Update active package imports, helpers and manifests to the shorter public names.
- [x] Install and verify the published registry packages.
- [x] Commit and push the reviewed migration.


## Independent source review - 2026-10-04

- Passed authenticated live MCP retrieval before inspection.
- Passed `npm run verify`: maintenance, repository boundary, typecheck and production build.
- Vite transformed 9497 modules. After the UI corrections, the entry chunk was 596.20 kB. The deferred ELK chunk was 1462.93 kB.
- No performance budget or runtime loading measurement was established by this build.
- Confirmed the resource example uses public UI contracts and identifies its state as presentation fixtures.
- Gap: the example uses local required-field checks rather than the planned TanStack Form and Zod adapter.
- Gap: the verify command omits lint and example behavior tests.
- Corrected: README now requires stopping repository work and reporting a failed MCP connection.
  Removed the duplicate shared-guidance paragraph.
- Partial: UIUX intentionally consumes sibling UI source. This does not establish released-artifact compatibility.
- Untested: browser actions, responsive layouts, focus, contrast and screen-reader behavior.
- Tasks 04.04 and 06.04 are not accepted as complete.
- No version change, publication, commit or push occurred.

Historical sections below describe their original checkpoints. This section records current review results.

## Passed

- Live MCP retrieval verified the foundation guide, audit/todo records, and application metadata
  where applicable.
- Release metadata checks passed.

## Untested

- New application generation was not run.

## Not applicable

- Shared package records do not imply an application login desk.

## Cloud-only governance — 2026-10-03

- Passed: authenticated live instructions and required connection policy for this repository.
- Passed: local MCP endpoint rejected with exit code 1. No local guide fallback.
- Governance: seven protocol/client tests and cloud Worker checks passed.
- Cxsun: two development connection tests passed, including no process start on connection failure.
- Business features were not changed or tested. Source changes remain uncommitted.

## Live connection audit — 2026-10-03

- Passed: this repository retrieves all five cloud guidance documents with its configured app identity.
- Passed: environment secret files are ignored by Git.
- Fixed: imported clients now reject every endpoint except https://mcp.codexsun.com/mcp.
- Fixed: clients validate returned app identity and reject missing instruction content.
- Fixed: request timeout is 15 seconds. Cxsun no longer uses a two-second cloud timeout.
- Passed: official SDK initialization, five live resource reads, and all three live tools.
- Passed: missing/wrong secret, denied origin, and invalid identity HTTP checks.
- Passed: eight governance tests, two Cxsun failure tests, cloud checks, and successful live Cxsun startup.
- No current connection blocker was found. Cloud/network availability and valid secrets remain required.
- Cloud metadata is a deployment snapshot. Source changes require redeployment.
- App IDs identify caller context. The shared developer secret is not per-app authentication.
- Long-term uptime and external editor configuration were not tested. Source changes remain uncommitted.

## Live connection audit — 2026-10-03

- Passed: all six repositories retrieve five cloud guides with their configured app identities.
- Passed: environment secret files are ignored by Git.
- Fixed: imported clients reject every endpoint except https://mcp.codexsun.com/mcp.
- Fixed: clients validate returned app identity and reject missing instruction content.
- Fixed: request timeout is 15 seconds, including Cxsun development startup.
- Passed: official SDK initialization, five live resource reads, and all three live tools.
- Passed: missing/wrong secret, denied origin, and invalid identity HTTP checks.
- Passed: eight governance tests, two Cxsun failure tests, cloud checks, and successful live Cxsun startup.
- No current connection blocker was found. Network availability and valid secrets remain required.
- Cloud metadata is a deployment snapshot. Source changes require redeployment.
- App IDs identify caller context. The shared developer secret is not per-app authentication.
- Long-term uptime and external editor configuration were not tested. Source changes remain uncommitted.

## Release 0.1.6 — 2026-10-03

- Passed npm run verify: dependency order, repository boundary, typecheck, and production build. Web package and workspace lock are aligned.
- Passed authenticated live MCP connection, release metadata, LF, and configured-secret scans.
- Prepared commit subject: #6 - Require audited cloud MCP guidance.

## npm migration — 2026-10-03

- Passed public package preparation for Framework and UI version 0.1.7.
- Passed packed package consumption, Cxsun full verification, UIUX verification, and eight governance tests.
- npm CLI login and device authentication succeeded as devxcrew.
- Publication returned E409. Registry metadata records Framework unpublished at 2026-10-03 03:30:32 UTC and UI at 03:32:35 UTC.
- npm blocks the same package names for 24 hours. Both names should be eligible after October 4 at 09:03 IST.
- Blocked: registry publication, registry installation, and final project lockfile generation.
- Cxsun currently runs with explicitly installed local packed snapshots. Its manifest names the intended npm versions.
- Do not treat the current project lockfile as a completed registry migration.

## npm migration completion — 2026-10-03

- Passed: Cxsun installed both registry packages and records registry URLs and integrity hashes in its lockfile.
- Passed: UIUX typecheck and production build with the new UI package name. UIUX intentionally keeps its local source gallery dependency.
- Passed: Governance cloud checks, deployment, and authenticated connections from all six repositories.
- Passed: Tools source compatibility tests (21 tests). Tools npm publication was not part of this release.
- Untested: Real identity, RBAC, and tenancy; these remain outside this package migration.

## Live MCP access audit — 2026-10-03

- GREEN: authenticated live connection, matching repository metadata, five guidance resources, and all three MCP tools.
- Central evidence: shared/mcp-governance/docs/mcp-access-audit.md.

## Foundation owner audit — 2026-10-04

- Owner MCP cloud connection passed this session before source work, as recorded by the coordinator.
- Passed npm run verify: dependency order, version alignment, line endings, repository boundary, typecheck and production build.
- Vite transformed 9496 modules and completed the production build.
- Build emitted a plugin timing warning. Some diagram chunks exceed 1 MB before compression.
- Reviewed gallery module inventory, public UI imports and master-list sample records.
- Gap: file dependency and preinstall require sibling UI source. Registry consumer isolation remains unverified.
- Gap: static gallery fixtures do not establish working persistence, authorization or complete action behavior.
- Gap: active README has duplicated governance text and a conflicting connection-failure statement.
- Loaded master task IDs 01.04, 04.04 and 06.04.
- Baseline state: in-review. Complete interaction inventory remains required before acceptance.
- Browser interactions on port 6102 were not run. This is build evidence, not full gallery acceptance.
- Existing uncommitted source changes were preserved. No implementation, release, commit or database change.

## Public resource-view examples — 2026-10-04

- Added ResourceContractExample to the Table documentation page.
- Examples consume public ResourceHeader and ResourceTable exports.
- List, details, create, edit, cancel and invalid-value feedback operate on labeled gallery fixtures.
- The page states that Cxsun verifies persistence and authorization through live APIs.
- Passed gallery typecheck with the new public source contract.
- Final build and browser interaction remain required for task 06.04.


## Resource example build verification — 2026-10-04

- Passed npm run verify after the new example: maintenance, boundary, typecheck and production build.
- Vite transformed 9499 modules and completed the build.
- Browser interactions remain coordinator acceptance work.

## Gallery automated acceptance - 2026-10-04

- Passed authenticated MCP connection.
- Passed `npm run verify`: maintenance, owner boundary, typecheck, ESLint, two schema behavior tests and production build.
- Replaced manual required-field logic with public TanStack Form and module-owned Zod.
- Save fixture independently validates input, trims values and returns safe duplicate field errors.
- Error text is linked with aria-describedby. Pending saves disable repeat submission and cancel.
- Added deterministic production manifest budgets for entry, deferred chunks and CSS.
- Measured initial JavaScript gzip: 260127 bytes. Largest deferred gzip: 450528 bytes.
- Supported profile: developer desktop gallery. ELK diagram layout remains deferred.
- Updated maintenance scripts to installed public Tools 0.1.7. Pinned unbounded latest gallery dependencies.

Remaining: direct-route refresh, keyboard, focus, screen-reader, responsive and browser interaction evidence.
No gallery fixture establishes persisted application behavior. Released-package consumer evidence remains a coordinated gate.
# Workspace GitHub release - 2026-10-04

npm run verify passed: types, lint, two form tests, build and JavaScript/CSS bundle budgets.
Configured-secret scan found no matches in Git release candidates.

User authorization: update versions and changelogs, then commit and push all workspace repositories.
Add module-owned TanStack Form and Zod examples, safe field feedback, lint checks and explicit bundle budgets.
Authenticated MCP connection passed for this owner before release work.
This delivery covers GitHub source. Npm publication, production deployment and real email acceptance remain separate gates.

## Completion wave evidence - 2026-10-04

npm run verify passed lint, types, two form tests, build and all JavaScript/CSS budgets.
Authenticated MCP passed before work. New or expanded three-OS CI requires actual remote run evidence. Npm publication and deployed acceptance remain open.


Three-OS source CI passed: GitHub Actions run 37202032805 on Node 26.10.0 and npm 12.2.0.

## Published gallery consumption - 2026-10-04

- Authenticated governance confirmed the source gallery exception.
- React type resolution uses installed public types, without private sibling dependency paths.
- Source verification passed lint, types, two form tests, production build and all bundle budgets.
- An isolated copy consumed published UI 0.2.0, generated a registry-only lock, passed npm ci and full verification. Receipt: REGISTRY-CONSUMER.json.
- Tools is pinned to 0.1.8; Node 26.10 and npm 12.2 are the supported baseline.
- Browser, keyboard and screen-reader acceptance remain pending.
