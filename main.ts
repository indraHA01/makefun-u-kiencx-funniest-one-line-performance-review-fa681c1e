// make.fun entry: Funniest One-Line Performance Review
// Writes a single-line performance review (1-140 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Communication: needs improvement \u2014 'make it better' is not a brief, and 'you know what I mean' is not a spec.";

const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

function main(): void {
  // The gate: UTF-8 text, 1-140 characters, not only whitespace, one line.
  const chars = [...ENTRY];
  if (chars.length < 1 || chars.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${chars.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  console.log(`wrote ${chars.length}-character entry to ${OUTPUT_PATH}`);
}

main();
