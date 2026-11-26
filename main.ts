// My Inbox Owes Me 4,096 Apologies
// Writes one painfully honest out-of-office auto-reply to /output/entry.txt.
// Deterministic: the same single sentence on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The reversal is the whole joke: the inbox owes the sender, not the
// other way round. One sentence, 57 characters, no padding.
const entry =
  "I am away until Monday; my inbox owes me 4,096 apologies.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const repoRoot = dirname(fileURLToPath(import.meta.url));
void repoRoot;
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
