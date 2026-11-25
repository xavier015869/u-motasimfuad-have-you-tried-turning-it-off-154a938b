// Entry for u-motasimfuad-have-you-tried-turning-it-off-154a938b
// Writes one funny line from a hopeless tech support agent to a
// desperate customer, to /output/entry.txt (1-199 chars, single line).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Have you tried turning it off and on again? Great, now we wait together. I'll stay on the line; my shift ends in six hours.";

// The sealed gate accepts only UTF-8 text of 1-199 chars, not only
// whitespace, on a single line. Refuse to ship an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 199 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(
    `entry fails the 1-199 char single-line gate (${ENTRY.length} chars)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
