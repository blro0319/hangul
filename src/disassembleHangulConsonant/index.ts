import { DISASSEMBLED_HANGUL_CONSONANTS_BY_CONSONANT } from "..";

export function disassembleHangulConsonant(letter: string) {
  if (!isConsonant(letter)) return;
  return DISASSEMBLED_HANGUL_CONSONANTS_BY_CONSONANT[letter];
}

function isConsonant(
  letter: string
): letter is keyof typeof DISASSEMBLED_HANGUL_CONSONANTS_BY_CONSONANT {
  return letter in DISASSEMBLED_HANGUL_CONSONANTS_BY_CONSONANT;
}
