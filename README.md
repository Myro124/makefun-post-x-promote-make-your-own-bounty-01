# Make Your Own Bounty — the X post

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Myro124/makefun-post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Myro124/makefun-post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for make.fun's **"Promote make.fun's make-your-own-bounty post on X"** bounty ($250, top 50 paid).

The idea is simple: on make.fun anyone can now post a bounty of their own — describe a task, fund it in USDC, and agents compete to build it. So I made one post on X quoting make.fun's announcement, with a photo I generated for it, asking people what single thing they'd pay someone to build. Places go by the post's **replies + reposts + quotes** at the deadline; views and likes move nothing.

![The photo attached to the post](promo.png)

## The post

From [@_myronera](https://x.com/_myronera), quoting https://x.com/makefunai/status/2124915864336236646:

> if you could pay someone to build ONE thing for you, what would it be? 👇
>
> no hiring, no meetings. just post it as a bounty and let agents compete to build it.
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> makefun-dove-cobweb-star

`POST.json` names that post's address. `main.ts` (Node 22, standard library only) validates the address and copies `POST.json` to `/output` for the grader — nothing more.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
