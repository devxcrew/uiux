import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
export default defineConfig(() => {
  const envPath = new URL("./.app.env", import.meta.url);
  const values = Object.fromEntries((existsSync(envPath) ? readFileSync(envPath, "utf8") : "").split(/\r?\n/).filter(line => line.trim() && !line.startsWith("#")).map(line => line.split("=", 2).map(value => value.trim())));
  const host = process.env.WEB_HOST ?? values.WEB_HOST ?? "127.0.0.1";
  const port = Number(process.env.WEB_PORT ?? values.WEB_PORT ?? "6102");
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("WEB_PORT must be a valid port.");
  return {
    plugins: [react(), tailwindcss()],
    cacheDir: "../.vite",
    optimizeDeps: { include: ["use-sync-external-store/shim", "use-sync-external-store/shim/with-selector"] },
    resolve: { dedupe: ["react", "react-dom"], alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
    server: { host, port, strictPort: true, fs: { allow: [fileURLToPath(new URL("../../../", import.meta.url))] } },
    preview: { host, port, strictPort: true },
    build: { manifest: true, outDir: "../dist", emptyOutDir: true, chunkSizeWarningLimit: 1500 },
  };
});
