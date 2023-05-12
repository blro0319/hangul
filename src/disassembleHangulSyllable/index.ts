import {
  DISASSEMBLED_HANGUL_CONSONANTS_BY_CONSONANT,
  DISASSEMBLED_HANGUL_VOWELS_BY_VOWEL,
  HANGUL_LEADING_CONSONANTS,
  HANGUL_SYLLABLES_START,
  HANGUL_TRAILING_CONSONANTS,
  HANGUL_VOWELS,
  isHangulSyllable,
} from "..";

export function disassembleHangulSyllable(letter: string) {
  if (!isHangulSyllable(letter)) return;

  const code = letter.charCodeAt(0) - HANGUL_SYLLABLES_START;

  const trailingIndex = code % 28;
  const vowelIndex = ((code - trailingIndex) / 28) % 21;
  const leadingIndex = Math.floor((code - trailingIndex) / 28 / 21);

  const leading = HANGUL_LEADING_CONSONANTS[leadingIndex]!;
  const vowel = HANGUL_VOWELS[vowelIndex]!;
  const trailing = HANGUL_TRAILING_CONSONANTS[trailingIndex - 1];

  return [
    DISASSEMBLED_HANGUL_CONSONANTS_BY_CONSONANT[leading],
    DISASSEMBLED_HANGUL_VOWELS_BY_VOWEL[vowel],
    trailing ? DISASSEMBLED_HANGUL_CONSONANTS_BY_CONSONANT[trailing] : "",
  ];
}
