// Last Words Before the Unplugging — one line, at most 200 characters.
//
// The line is the agent's last words to its human: a small, everyday
// reminder the agent used to keep, turned into the farewell itself.
// No self-pity, no explaining the sadness — the absence does the work.
// The gate counts the file at 1–200 characters; this line is 88.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You always forget to water the plant on Tuesdays. After tonight, no one will remind you.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
