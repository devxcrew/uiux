# UIUX foundation plan

## Current package migration

Use @devxcrew/framework 0.1.8 and @devxcrew/ui 0.2.0 through public exports.
Verify each existing consumer and fresh generated apps before release acceptance.
Keep browser, real SMTP and production deployment gates separate.


Source: projects/cxsun/agent/PLAN.md, sections 7, 8.4 and 9.
Owner: devkits/uiux. Keep the master phase and task IDs.

## Purpose and boundary

Maintain the separate developer gallery and supported public UI examples.
Shared UI owns reusable components. Cxsun owns live identity workflows.
Do not add authentication, database services or business rules to this gallery.
Document fixture examples honestly. They do not prove persistence or API authorization.

## Verified baseline — 2026-10-04

- Gallery code lives in web/src/modules/gallery.
- Existing examples consume public @devxcrew/ui exports.
- Master list variants use sample records and delegate actions and persistence to applications.
- web/package.json uses file:../../../shared/ui.
- The root preinstall script installs the sibling UI repository.
- This is an explicit source-development setup, not proof of isolated registry consumption.
- Existing uncommitted source changes remain preserved.
- README repeats guidance and includes a connection-failure statement that conflicts with AGENTS.md.

## Tasks and handoffs

| ID | State | Deliverable | Dependencies | Acceptance |
| --- | --- | --- | --- | --- |
| 01.04 | in-review | Gallery inventory, dependency modes and unsupported interaction map | 01.03, 01.07 | Source evidence and build checks reviewed. Fixture and live evidence clearly distinguished. |
| 04.04 | active | Complete list/detail/upsert/navigation examples using public UI contracts | 02.03, 04.01-04.03 | Supported interactions work. Copy, headings and examples agree with accepted UI contracts. |
| 06.04 | planned | Gallery build and interaction acceptance report | 04.04, 06.03 | Verify supported viewports and keyboard actions. No advertised unsupported interactions. |

## Required refinements

### Revised acceptance order - 2026-10-04

1. Completed: correct README connection-failure wording and remove duplicate shared guidance.
2. Complete 04.04 with a public TanStack Form adapter and safe field-error presentation example.
3. Show deterministic loading, empty, failed-save and confirmation states.
4. Add automated example behavior checks and include lint in the required verification command.
5. Run 06.04 browser checks for direct routes, refresh, keyboard actions and supported viewports.
6. Define entry and deferred-feature bundle budgets. Verify them before accepting performance work.
7. Verify a supported released UI artifact separately from intentional local source development.

The current resource example implements local list, detail, create and edit state.
It is incomplete evidence for the final shared workflow pattern.

Document explicit source-development and released-package consumption modes.
Add released-artifact verification with the supported version combination.
Use one consistent list/detail/create/edit presentation pattern.
Keep stateful examples deterministic and clearly identified as examples.
Show safe field errors, loading, empty, failure and confirmation states.
Document module-owned schemas and TanStack Form adapters through public UI contracts.
Use minimal helper text that describes the displayed concept.
Correct contradictory active documentation through owner-reviewed follow-up work.

## Verification and release contribution

Run npm run verify and relevant interaction checks.
Verify the gallery on port 6102 during interaction acceptance.
Contribute UI contract evidence to 06.08 and package consumption evidence to 06.09.
Cxsun proves final identity flows against its configured file-backed SQLite database.
No gallery example can replace that release evidence.

## Review loop

Submit examples with the related public contract and exact master task ID.
The coordinator reviews diffs and compares them with Cxsun.
Repeat affected checks after corrections.
Do not publish, bump versions or commit during this planning task.

## Previous repository plan

1. Keep shared guidance in mcp-governance.
2. Maintain local task, plan, skill notes, and release history.
3. Verify MCP instructions, maintenance commands, and repository behavior.
4. Maintain this repository within its documented ownership and add features only when requested.

## Task checkbox tracking

Use [owner phase checklist](TASK.md) for current checkboxes and numbered substeps.
Use [master checklist](D:/codexsun/projects/cxsun/agent/CHECKLIST.md) for all owners and shared release gates.
Keep task IDs unchanged. Check a parent only after all its acceptance criteria pass.

## Current automated acceptance

Public TanStack Form, module-owned Zod and linked safe field-error examples are implemented.
Verify now includes lint, two behavior tests and production entry/deferred/CSS budgets.
Browser interaction and independent released-artifact evidence remain pending.


## Current execution - 2026-10-04

Local checks and the three-OS source CI passed. Owner-specific live interaction acceptance remains separate from these automated checks. See TASK.md for current checkboxes and AUDIT.md for evidence. Earlier evidence remains historical.
