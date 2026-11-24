// Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X".
// Node 22, standard library only.
//
// The entry itself is the X post: one quote of make.fun's make-your-own-bounty
// post (https://x.com/makefunai/status/2124915864336236646) from @_myronera,
// with a photo of its own attached and the play code in its text. This program
// only hands the post's address to the grader: it reads POST.json from the
// repository, checks that it names a real x.com status URL, and writes it to
// the output directory. It takes no input, uses no network and no clock, so
// every run writes the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(repoDir, 'POST.json');
const post = JSON.parse(readFileSync(postPath, 'utf8')) as { url?: unknown };

if (typeof post.url !== 'string' || !/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(post.url)) {
  console.error('POST.json must name a post: {"url": "https://x.com/<handle>/status/<id>"}');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, 'POST.json'));
console.log(`entry post: ${post.url}`);
