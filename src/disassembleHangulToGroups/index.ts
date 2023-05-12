import {
  disassembleHangulConsonant,
  disassembleHangulSyllable,
  disassembleHangulVowel,
} from "..";

export function disassembleHangulToGroups(string: string) {
  const result: string[][] = [];

  for (const letter of string) {
    const syllable = disassembleHangulSyllable(letter);
    if (syllable) {
      result.push(Array.from(syllable.join("")));
      continue;
    }

    const consonant = disassembleHangulConsonant(letter);
    if (consonant) {
      result.push(Array.from(consonant));
      continue;
    }

    const vowel = disassembleHangulVowel(letter);
    if (vowel) {
      result.push(Array.from(vowel));
      continue;
    }

    result.push([letter]);
  }

  return result;
}
