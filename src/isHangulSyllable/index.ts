import { HANGUL_SYLLABLES_END, HANGUL_SYLLABLES_START } from "..";

export function isHangulSyllable(letter: string) {
  const code = letter.charCodeAt(0);
  return HANGUL_SYLLABLES_START <= code && code <= HANGUL_SYLLABLES_END;
}
