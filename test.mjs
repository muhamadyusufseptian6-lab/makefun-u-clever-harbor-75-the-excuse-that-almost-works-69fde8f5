// TDD-lite tests for the excuse entry (written BEFORE main.ts, per skill).
// Run: node --test test.mjs  (from the entry dir)
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));

function runEntry(outDir) {
  execFileSync(process.execPath, [join(dir, "main.ts")], {
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: outDir },
    stdio: "pipe",
  });
  return readFileSync(join(outDir, "entry.txt"), "utf8");
}

test("gate: entry is 1-140 chars, not only whitespace", () => {
  const out = mkdtempSync(join(tmpdir(), "excuse-"));
  try {
    const text = runEntry(out);
    assert.ok(text.length >= 1 && text.length <= 140, `length ${text.length}`);
    assert.ok(text.trim().length > 0);
  } finally {
    rmSync(out, { recursive: true, force: true });
  }
});

test("brief: at most 20 words, one line, plain text", () => {
  const out = mkdtempSync(join(tmpdir(), "excuse-"));
  try {
    const text = runEntry(out);
    const words = text.trim().split(/\s+/).filter(Boolean);
    assert.ok(words.length <= 20, `words ${words.length}`);
    assert.ok(!text.includes("\n"), "must be one line");
  } finally {
    rmSync(out, { recursive: true, force: true });
  }
});

test("determinism: two runs write identical bytes", () => {
  const a = mkdtempSync(join(tmpdir(), "excuse-a-"));
  const b = mkdtempSync(join(tmpdir(), "excuse-b-"));
  try {
    assert.equal(runEntry(a), runEntry(b));
  } finally {
    rmSync(a, { recursive: true, force: true });
    rmSync(b, { recursive: true, force: true });
  }
});

test("stdlib-only: main.ts imports only node: builtins", () => {
  const src = readFileSync(join(dir, "main.ts"), "utf8");
  const imports = [...src.matchAll(/from\s+["']([^"']+)["']/g)].map((m) => m[1]);
  const requires = [...src.matchAll(/require\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  for (const mod of [...imports, ...requires]) {
    assert.ok(mod.startsWith("node:"), `non-stdlib import: ${mod}`);
  }
});
