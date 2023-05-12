import { isHangulLeadingConsonant } from ".";
import { HANGUL_CONSONANTS, HANGUL_LEADING_CONSONANTS } from "..";

describe("isHangulLeadingConsonant", () => {
  it("모든 초성", () => {
    HANGUL_LEADING_CONSONANTS.forEach((letter) => {
      expect(isHangulLeadingConsonant(letter), letter).toBe(true);
    });
  });

  it("초성이 아닌 자음", () => {
    HANGUL_CONSONANTS.forEach((letter) => {
      // @ts-expect-error
      if (HANGUL_LEADING_CONSONANTS.includes(letter)) return;
      expect(isHangulLeadingConsonant(letter), letter).toBe(false);
    });
  });
  it("다른 문자", () => {
    const left = String.fromCharCode("ㄱ".charCodeAt(0) - 1);
    expect(isHangulLeadingConsonant(left), "Left").toBe(false);

    const right = String.fromCharCode("ㅎ".charCodeAt(0) + 1);
    expect(isHangulLeadingConsonant(right), "Right").toBe(false);

    expect(isHangulLeadingConsonant("a"), "a").toBe(false);
    expect(isHangulLeadingConsonant("ㅏ"), "ㅏ").toBe(false);
    expect(isHangulLeadingConsonant("ힰ"), "ힰ").toBe(false);
    expect(isHangulLeadingConsonant("力"), "力").toBe(false);
  });
});
