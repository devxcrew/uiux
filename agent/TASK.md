# Current task

## Completion wave - 2026-10-04

Source 0.1.8 passed lint, two form tests, production build and enforced bundle budgets. Those implementation steps are complete. Browser gallery acceptance and released UI consumption remain open. Three-OS source-gallery CI is added in this wave.

- [x] Reconcile current status with the GitHub source release and latest owner audit.
- [x] Retrieve fresh authenticated cloud governance before this wave.
- [x] Record this wave's affected checks and accept only gates with direct evidence.

npm run verify passed lint, types, two form tests, build and all JavaScript/CSS budgets.
- [x] Prepare isolated CI coverage for the target Windows/Linux/macOS runtime.
- [ ] Verify this wave's exact GitHub CI results.


Use projects/cxsun/agent/REMAINING-WORK.md for ordered cross-owner dependencies.
Production deployment and real SMTP acceptance remain deferred. No pending external gate is marked complete.

## Prior records

<!-- foundation-checklist:start -->

## Numbered phase checklist

Master: [all foundation tasks](D:/codexsun/projects/cxsun/agent/CHECKLIST.md).

Updated: 2026-10-04. Checked steps have recorded local evidence.
Parents retain incomplete acceptance gates. Mail tests and production deployment are deferred by user.

### Phase 01 - Baseline and ownership

- [x] **01.04 Audit gallery and dependency boundaries** - accepted. Owner: uiux.
  - [x] 01.04.1 Gallery build and source-development boundary reviewed.

### Phase 04 - UI and frontend workflows

- [ ] **04.04 Provide complete public UI examples** - in-review. Owner: uiux.
  - [x] 04.04.1 Resource presentation example and gallery build pass.
  - [x] 04.04.2 Add public TanStack Form/Zod and linked safe save-field-error examples.
  - [ ] 04.04.3 Complete browser interaction acceptance of the examples.

### Phase 06 - Verification and operations

- [ ] **06.04 Verify gallery interactions and performance** - in-review. Owner: uiux.
  - [x] 06.04.1 Typecheck and production build pass.
  - [ ] 06.04.2 Accept gallery interaction, lint/behavior and entry/deferred budgets.

<!-- foundation-checklist:end -->

## Earlier task records

Current task: 04.04 active.
Table documentation includes an interactive public resource-view example.
The example supports list, details, create and edit presentation.
It explicitly distinguishes gallery state from Cxsun live database acceptance.
The current gallery verify command passed maintenance, boundary, typecheck and production build checks.
Browser interaction checks remain required. The verify command does not include lint or component tests.

## Previous task evidence

## Independent review - 2026-10-04

Current task 04.04 remains active. Task 06.04 remains planned.
The resource example uses public UI exports and labeled presentation fixtures.
It does not demonstrate TanStack Form, safe server errors, request races or durable persistence.
README now requires stopping repository work and reporting MCP connection failures. Duplicate guidance was removed.
Released-artifact verification, browser interactions and performance budgets remain unaccepted.

# Foundation owner tasks — 2026-10-04

Current task: 01.04. State: in-review.
Source: projects/cxsun/agent/PLAN.md. Owner scope and dependencies are in agent/PLAN.md.

Owner plans are loaded. Baseline source inspection is complete.
The coordinator must review evidence before accepting the baseline task.
Implementation tasks remain planned. Existing checks do not establish full foundation completion.
No version bump, publication, commit or database change belongs to this task.

## Historical task record

# Current task

Set strict module-owned architecture instructions for all repositories.

## Status

Agent notes and central MCP guidance define modular monoliths, practical DDD, and matching frontend/backend ownership.
Events and queues are optional capabilities. The source-file guideline is 700–900 lines.
No application runtime refactor or new infrastructure was added.

## Release 0.1.6 — 2026-10-03

- Passed npm run verify: dependency order, repository boundary, typecheck, and production build. Web package and workspace lock are aligned.
- Passed authenticated live MCP connection, release metadata, LF, and configured-secret scans.
- Prepared commit subject: #6 - Require audited cloud MCP guidance.

## npm package migration — 2026-10-03

- Prepare public `@devxcrew/core-framework` and `@devxcrew/react-ui` version 0.1.7.
- Project apps use npm dependencies. Explicit local snapshots support side-by-side development.
- Passed package release checks, local package consumption, Cxsun verification, and UIUX verification.
- The original names were blocked by npm's unpublished-name hold. The user selected new package names.

## Publication with new names

- User selected @devxcrew/core-framework and @devxcrew/react-ui to avoid the old-name hold.
- Both @devxcrew/core-framework and @devxcrew/react-ui 0.1.7 are published and visible in the npm registry.
- Registry installation passed. Cxsun lock entries contain npm tarball URLs and integrity hashes. Cxsun clean installation and final app verification are recorded in the application audit.

## Current automated gates - 2026-10-04

- [x] 04.04.2a Provide public TanStack Form, owner-local Zod and safe duplicate field-error example.
- [x] 06.04.2a Include ESLint and two behavior tests in `npm run verify`.
- [x] 06.04.2b Enforce production entry, deferred JavaScript and CSS budgets.
- [ ] 06.04.2c Complete direct-route, keyboard, focus and supported viewport browser acceptance.
- [ ] 06.04.2d Verify coordinated released UI artifact consumption.

Earlier statements that verify omits lint or tests are historical. The current command includes both.
## Workspace GitHub release - 2026-10-04

Release title: Deliver public resource gallery examples.
Add module-owned TanStack Form and Zod examples, safe field feedback, lint checks and explicit bundle budgets.
Update version records, review release checks, then commit and push the current owner branch.
Preserve existing task history and incomplete acceptance gates.
