import { isHangulSyllable } from ".";

describe("isHangulSyllable", () => {
  it('"가" ~ "힣"', () => {
    for (let i = "가".charCodeAt(0); i <= "힣".charCodeAt(0); i++) {
      const letter = String.fromCharCode(i);
      expect(isHangulSyllable(letter), letter).toBe(true);
    }
  });

  it('"가" 앞의 문자', () => {
    const left = String.fromCharCode("가".charCodeAt(0) - 1);
    expect(isHangulSyllable(left), "Left").toBe(false);

    expect(isHangulSyllable("a"), "a").toBe(false);
    expect(isHangulSyllable("ㄱ"), "ㄱ").toBe(false);
    expect(isHangulSyllable("ㅏ"), "ㅏ").toBe(false);
  });
  it('"힣" 뒤의 문자', () => {
    const right = String.fromCharCode("힣".charCodeAt(0) + 1);
    expect(isHangulSyllable(right), "Right").toBe(false);

    expect(isHangulSyllable("ힰ"), "ힰ").toBe(false);
    expect(isHangulSyllable("力"), "力").toBe(false);
  });
});
