import { HANGUL_LEADING_CONSONANTS } from "..";

export function isHangulLeadingConsonant(letter: string) {
  // @ts-expect-error
  return HANGUL_LEADING_CONSONANTS.includes(letter);
}
