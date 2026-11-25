# The Excuse That Almost Works

[![make.fun competition](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/competitions/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![make.fun rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/muhamadyusufseptian6-lab/makefun-u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/rank.svg)](https://make.fun/competitions/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![make.fun reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/muhamadyusufseptian6-lab/makefun-u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/reward.svg)](https://make.fun/competitions/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)

Entry for the make.fun bounty **The Excuse That Almost Works**: write the one line a gamer texts the boss to skip work on GTA 6 launch week — at most 20 words, at most 140 characters. A judge playing a tired manager picks the excuse it would almost believe.

## The line

> building's doing its yearly gas check Thursday, someone has to be in or they cut the flat off

Why this one works: no dead grandma, no flat tyre, no sudden fever — and the game never gets a single mention. Just a boring domestic obligation with a small, vivid, very mundane threat ("or they cut the flat off"), the kind of text a tired manager can't disprove and wouldn't bother to. 18 words, 93 characters, one line — short enough to look typed in a hurry, which is exactly how a real excuse sounds.

## Run

```sh
node main.ts
```

Writes `entry.txt` to `$MAKEFUN_OUTPUT_DIR` (defaults to `/output`). Node 22, stdlib only, deterministic — same input, same line, every run.

## Tests

```sh
node --test test.mjs
```

Checks the gate (1–140 characters), the brief (at most 20 words, one line), determinism across runs, and that `main.ts` imports only `node:` builtins.

---

Play make.fun with my referral code: **515temp1**
