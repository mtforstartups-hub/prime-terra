#!/usr/bin/env bun
/**
 * build-deploy.ts
 * Cross-platform deployment script for Prime Terra Global Ventures.
 * Builds the Next.js project and bundles the standalone output into deploy.zip.
 *
 * Usage:  bun run deploy
 */

import { $, file, write } from "bun";
import { existsSync, mkdirSync, rmSync, cpSync, readdirSync } from "fs";
import { join } from "path";
import { createWriteStream } from "fs";
// @ts-ignore — Bun ships a built-in zip utility via the JSZip-compatible API
import { ZipWriter, BlobWriter, BlobReader } from "@zip.js/zip.js";

// ── helpers ───────────────────────────────────────────────────────────────────

const log = (msg: string) => console.log(`\x1b[36m➜\x1b[0m  ${msg}`);
const success = (msg: string) => console.log(`\x1b[32m✓\x1b[0m  ${msg}`);
const error = (msg: string) => { console.error(`\x1b[31m✗\x1b[0m  ${msg}`); process.exit(1); };

/** Recursively collect all file paths under a directory */
function walkDir(dir: string): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

// ── main ──────────────────────────────────────────────────────────────────────

const ROOT = import.meta.dir;
const STANDALONE = join(ROOT, ".next", "standalone");
const STATIC_SRC = join(ROOT, ".next", "static");
const PUBLIC_SRC = join(ROOT, "public");

const DEPLOY_DIR = join(ROOT, "deploy_temp");
const ZIP_OUT = join(ROOT, "deploy.zip");

// 1. Build
log("Building Next.js project…");
const build = await $`bunx next build`.cwd(ROOT).nothrow();
if (build.exitCode !== 0) error("Build failed. Check the output above.");

// 2. Validate standalone output exists
if (!existsSync(STANDALONE)) {
  error(`.next/standalone not found. Make sure next.config.ts has output: "standalone"`);
}

// 3. Clean and recreate temp deploy folder
log("Preparing deployment folder…");
if (existsSync(DEPLOY_DIR)) rmSync(DEPLOY_DIR, { recursive: true, force: true });
mkdirSync(DEPLOY_DIR, { recursive: true });

// 4. Copy standalone build
log("Copying standalone build…");
cpSync(STANDALONE, DEPLOY_DIR, { recursive: true });

// 5. Copy public folder
if (existsSync(PUBLIC_SRC)) {
  log("Copying public assets…");
  cpSync(PUBLIC_SRC, join(DEPLOY_DIR, "public"), { recursive: true });
}

// 6. Copy .next/static into deploy_temp/.next/static
log("Copying static assets (.next/static)…");
if (existsSync(STATIC_SRC)) {
  const staticDest = join(DEPLOY_DIR, ".next", "static");
  mkdirSync(staticDest, { recursive: true });
  cpSync(STATIC_SRC, staticDest, { recursive: true });
}

// 7. Zip using Bun's native APIs (no PowerShell, no tar — works on all OSes)
log("Creating deploy.zip…");
if (existsSync(ZIP_OUT)) rmSync(ZIP_OUT);

const zipWriter = new ZipWriter(new BlobWriter("application/zip"));
const allFiles = walkDir(DEPLOY_DIR);

for (const filePath of allFiles) {
  // Store relative path inside the zip (strip deploy_temp prefix + leading sep)
  const relativePath = filePath
    .slice(DEPLOY_DIR.length + 1)
    .replace(/\\/g, "/"); // normalise to forward slashes for cross-platform zips
  const blob = new Blob([await file(filePath).arrayBuffer()]);
  await zipWriter.add(relativePath, new BlobReader(blob));
}

const zipBlob = await zipWriter.close();
await write(ZIP_OUT, zipBlob);

// 8. Cleanup
log("Cleaning up temp folder…");
rmSync(DEPLOY_DIR, { recursive: true, force: true });

success(`deploy.zip is ready! (${(file(ZIP_OUT).size / 1024 / 1024).toFixed(2)} MB)`);
console.log("\n\x1b[33mNext steps:\x1b[0m");
console.log("  1. Upload deploy.zip to your Plesk server and extract it.");
console.log("  2. Set Node.js Startup File → server.js");
console.log("  3. Add environment variables (see .env.example) in Plesk Node.js settings.");
console.log("  4. Restart the Node.js app.\n");
