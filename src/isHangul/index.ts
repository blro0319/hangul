import { isHangulConsonant, isHangulSyllable, isHangulVowel } from "..";

export function isHangul(letter: string) {
  return (
    isHangulSyllable(letter) ||
    isHangulConsonant(letter) ||
    isHangulVowel(letter)
  );
}
