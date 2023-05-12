import { HANGUL_CONSONANTS, HANGUL_VOWELS, isHangul } from "..";

describe("isHangul", () => {
  it("모든 자음", () => {
    HANGUL_CONSONANTS.forEach((letter) => {
      expect(isHangul(letter), letter).toBe(true);
    });
  });
  it("모든 모음", () => {
    HANGUL_VOWELS.forEach((letter) => {
      expect(isHangul(letter), letter).toBe(true);
    });
  });
  it("모든 음절", () => {
    for (let i = "가".charCodeAt(0); i <= "힣".charCodeAt(0); i++) {
      const letter = String.fromCharCode(i);
      expect(isHangul(letter), letter).toBe(true);
    }
  });

  it("다른 문자", () => {
    expect(isHangul("ힰ"), "ힰ").toBe(false);
    expect(isHangul("力"), "力").toBe(false);
  });
});
