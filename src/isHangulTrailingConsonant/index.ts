import { HANGUL_TRAILING_CONSONANTS } from "..";

export function isHangulTrailingConsonant(letter: string) {
  // @ts-expect-error
  return HANGUL_TRAILING_CONSONANTS.includes(letter);
}
