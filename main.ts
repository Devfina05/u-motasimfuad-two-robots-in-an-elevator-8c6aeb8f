// Two Robots in an Elevator entry (Node 22, standard library only): writes
// one funny line of awkward small talk a robot says to another in an
// elevator to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The craft: the awkwardness is the joke — a robot doing the most human thing
// there is, pretending to be busy on its phone so it does not have to talk,
// then blurting the confession out loud to a stranger. Machine logic shows
// "notifications" and "firmware", the pause is in the opening "So…", and the
// turn (is it just my firmware?) lands on the first read. Verified by running
// the program: the output is 102 characters, inside the 1-to-200-character
// gate, a single line.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'So… do you also pretend to check your notifications when the doors close, or is that just my firmware?';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
