import { execFileSync } from "node:child_process";

const result = execFileSync("git", ["status", "--short"], { encoding: "utf8" });
console.log(result || "Working tree is clean.");
