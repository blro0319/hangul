import { DISASSEMBLED_HANGUL_VOWELS_BY_VOWEL } from "..";

export function disassembleHangulVowel(letter: string) {
  if (!isVowel(letter)) return;
  return DISASSEMBLED_HANGUL_VOWELS_BY_VOWEL[letter];
}

function isVowel(
  letter: string
): letter is keyof typeof DISASSEMBLED_HANGUL_VOWELS_BY_VOWEL {
  return letter in DISASSEMBLED_HANGUL_VOWELS_BY_VOWEL;
}
