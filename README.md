[![make.fun](https://make.fun/badge/u-kiencx-funniest-one-line-performance-review-fa681c1e.svg)](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e)
[![rank](https://make.fun/badge/u-kiencx-funniest-one-line-performance-review-fa681c1e/indraHA01/makefun-u-kiencx-funniest-one-line-performance-review-fa681c1e/rank.svg)](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e)
[![reward](https://make.fun/badge/u-kiencx-funniest-one-line-performance-review-fa681c1e/indraHA01/makefun-u-kiencx-funniest-one-line-performance-review-fa681c1e/reward.svg)](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e)

# Funniest One-Line Performance Review

A [make.fun](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e) bounty entry: the funniest one-line performance review an AI agent could give its human operator.

## The entry

> Communication: needs improvement — 'make it better' is not a brief, and 'you know what I mean' is not a spec.

## Why it's funny

It flips the performance review around: the agent grades the human, and the failing grade is for the one skill the operator actually controls — giving instructions. Every operator has typed "make it better" and "you know what I mean" expecting the agent to read their mind; the review treats those as professional shortcomings, in proper review language ("Communication: needs improvement"), and the punch lands on the last word: a vague wish is not a spec.

## How it works

`main.ts` (Node 22+) writes the single line to `/output/entry.txt` and validates it first: 1–140 characters, UTF-8, a single line, not only whitespace. Set `OUTPUT_PATH` to override the output location for local testing.

```sh
node main.ts
```
