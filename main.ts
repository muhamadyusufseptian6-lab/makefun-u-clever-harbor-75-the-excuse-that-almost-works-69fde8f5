// The Excuse That Almost Works — make.fun entry
// u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
//
// Writes the one line a gamer texts the boss to skip work on GTA 6 launch
// week to $MAKEFUN_OUTPUT_DIR/entry.txt. Stdlib-only, deterministic.
//
// The line: a boring domestic obligation with a small, vivid, mundane
// threat — the kind of text a tired manager can't disprove and wouldn't
// bother to, sent in a hurry, with the game itself never mentioned once.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "building's doing its yearly gas check Thursday, someone has to be in or they cut the flat off";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
