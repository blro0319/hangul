import { HANGUL_VOWELS_END, HANGUL_VOWELS_START } from "..";

export function isHangulVowel(letter: string) {
  const code = letter.charCodeAt(0);
  return HANGUL_VOWELS_START <= code && code <= HANGUL_VOWELS_END;
}
