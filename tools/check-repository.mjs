import { realpathSync, existsSync } from "node:fs";
const expected = realpathSync(new URL("..", import.meta.url));
const actual = realpathSync(process.cwd());
if (actual !== expected || !existsSync(new URL("../web/package.json", import.meta.url))) throw new Error(`Gallery boundary failed: ${actual}`);
console.log(`Gallery boundary ok: ${actual}`);
