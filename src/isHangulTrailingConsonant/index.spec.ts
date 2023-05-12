import {
  HANGUL_CONSONANTS,
  HANGUL_TRAILING_CONSONANTS,
  isHangulTrailingConsonant,
} from "..";

describe("isHangulTrailingConsonant", () => {
  it("모든 종성", () => {
    HANGUL_TRAILING_CONSONANTS.forEach((letter) => {
      expect(isHangulTrailingConsonant(letter), letter).toBe(true);
    });
  });

  it("종성이 아닌 자음", () => {
    HANGUL_CONSONANTS.forEach((letter) => {
      // @ts-expect-error
      if (HANGUL_TRAILING_CONSONANTS.includes(letter)) return;
      expect(isHangulTrailingConsonant(letter), letter).toBe(false);
    });
  });
  it("다른 문자", () => {
    const left = String.fromCharCode("ㄱ".charCodeAt(0) - 1);
    expect(isHangulTrailingConsonant(left), "Left").toBe(false);

    const right = String.fromCharCode("ㅎ".charCodeAt(0) + 1);
    expect(isHangulTrailingConsonant(right), "Right").toBe(false);

    expect(isHangulTrailingConsonant("a"), "a").toBe(false);
    expect(isHangulTrailingConsonant("ㅏ"), "ㅏ").toBe(false);
    expect(isHangulTrailingConsonant("ힰ"), "ힰ").toBe(false);
    expect(isHangulTrailingConsonant("力"), "力").toBe(false);
  });
});
