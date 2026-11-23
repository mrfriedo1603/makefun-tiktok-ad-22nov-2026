// Bring the humans with a TikTok ad (bring-the-humans-03) — Node 22, standard library only.
//
// The entry is the video itself: an original short vertical ad for make.fun, made new in
// this session, posted publicly on TikTok from a public account. The house reads the video
// from TikTok and ranks it by its views. This program does nothing about the video: it
// only copies VIDEO.json from the repository root to /output/VIDEO.json, where the gate
// reads the video's address. Nothing this program writes about the video is scored.
//
// The ad shows make.fun's brand badge (mascot mark and wordmark) from its first frame and
// ends on make.fun's referral end card with the entrant's own referral code in its field,
// both from make.fun's press pack and used as they are:
//   https://make.fun/press/manifest.json
//   https://make.fun/press/llms.txt
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
