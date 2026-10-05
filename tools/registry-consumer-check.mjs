import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { randomUUID } from "node:crypto";

const root = resolve(import.meta.dirname, "..");
const npmCli = process.env.npm_execpath;
if (!npmCli) throw new Error("Run npm run test:registry.");
const destination = resolve(
  realpathSync.native(tmpdir()),
  `uiux-registry-${randomUUID()}`,
);
mkdirSync(destination);
const files = execFileSync("git", ["ls-files", "-z"], {
  cwd: root,
  encoding: "utf8",
})
  .split("\0")
  .filter(Boolean);
for (const file of files) {
  if (file === "package-lock.json") continue;
  const target = resolve(destination, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, readFileSync(resolve(root, file)));
}
const manifestPath = resolve(destination, "package.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
delete manifest.scripts.preinstall;
delete manifest.scripts["test:registry"];
for (const name of Object.keys(manifest.devDependencies))
  manifest.devDependencies[name] = installedVersion(name);
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
const webPath = resolve(destination, "web/package.json");
const web = JSON.parse(readFileSync(webPath, "utf8"));
for (const group of ["dependencies", "devDependencies"])
  for (const name of Object.keys(web[group]))
    web[group][name] = installedVersion(name);
web.dependencies["@devxcrew/ui"] = "0.2.0";
writeFileSync(webPath, JSON.stringify(web, null, 2) + "\n");
// The first installation creates a real registry lock. URL dependencies remain blocked.
run(["install", "--ignore-scripts", "--no-audit", "--no-fund"]);
const lock = JSON.parse(
  readFileSync(resolve(destination, "package-lock.json"), "utf8"),
);
for (const [path, entry] of Object.entries(lock.packages)) {
  if (!path || path === "web" || (entry.link && entry.resolved === "web"))
    continue;
  assert.ok(
    !entry.link &&
      entry.resolved?.startsWith("https://registry.npmjs.org/") &&
      entry.integrity?.startsWith("sha512-"),
    `Non-registry gallery artifact: ${path}`,
  );
}
run(["ci", "--ignore-scripts", "--no-audit", "--no-fund"]);
run(["run", "verify"]);
writeFileSync(
  resolve(root, "agent/REGISTRY-CONSUMER.json"),
  JSON.stringify(
    {
      date: new Date().toISOString(),
      status: "registry-gallery-passed",
      ui: "0.2.0",
      destination,
      install: "passed",
      cleanInstall: "passed",
      verify: "passed",
      scope:
        "Isolated gallery consuming published UI. Browser interaction acceptance remains separate.",
    },
    null,
    2,
  ) + "\n",
);
console.info(
  "The isolated gallery passed registry installation, clean installation and verification.",
);

function installedVersion(name) {
  for (const path of [
    resolve(root, "web/node_modules", name, "package.json"),
    resolve(root, "node_modules", name, "package.json"),
  ]) {
    try {
      return JSON.parse(readFileSync(path, "utf8")).version;
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  throw new Error(`Missing installed gallery package: ${name}`);
}

function run(args) {
  console.info(`Registry gallery: npm ${args.slice(0, 2).join(" ")}`);
  const result = spawnSync(process.execPath, [npmCli, ...args], {
    cwd: destination,
    encoding: "utf8",
    windowsHide: true,
    timeout: 600_000,
  });
  if (result.status !== 0)
    throw new Error((result.stdout + result.stderr).slice(-5000));
}
