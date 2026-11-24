// The Dog Ate My Homework: Funniest Excuse — entry for @syukuran.
// Writes one line (<200 chars) in the dog's own voice to /output/entry.txt.
// Deterministic: the same line every run, no input, no network, no env.
//
// The joke: the homework's own instruction — "show your working" — taken
// literally by a dog. The dog obeyed to the letter and worked every answer
// straight into its stomach. No setup, no stock line (no cat, no taste of
// paper, no good boy), just dog logic: homework completed, the dog way.
//
// drand mainnet/default anchor quoted before the first write:
//   round 6670944
//   randomness a1c8d87910cb4eeca492c349b9e204c910cdd8f3e5b5ebf5c721afe14be67333
//   signature a3d10384a90f4751373fa33f1e22a96f7e60b2d0d51a6c0a31dc0aa49cbdc017b677f471a3f22ef4356d4c16b36441fa07803d9dd649b53164ae5ce22f9adc80deb2c903df39bc9b4cd164fdece845d745f4cce3600539e1d283b8f024ea5c24
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "It said 'show your working', so I did. Every answer, worked straight into my stomach. Homework: done.";

if (EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${EXCUSE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");

// Read-back: the file on disk must be exactly the line above.
if (readFileSync("/output/entry.txt", "utf8") !== EXCUSE) {
  throw new Error("read-back mismatch: /output/entry.txt differs from EXCUSE");
}
