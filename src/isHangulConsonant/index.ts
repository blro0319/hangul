import { HANGUL_CONSONANTS_END, HANGUL_CONSONANTS_START } from "..";

export function isHangulConsonant(letter: string) {
  const code = letter.charCodeAt(0);
  return HANGUL_CONSONANTS_START <= code && code <= HANGUL_CONSONANTS_END;
}
