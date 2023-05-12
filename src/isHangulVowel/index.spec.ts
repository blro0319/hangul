import { isHangulVowel } from "./index";

describe("isHangulVowel", () => {
  it('"ㅏ" ~ "ㅣ"', () => {
    for (let i = "ㅏ".charCodeAt(0); i <= "ㅣ".charCodeAt(0); i++) {
      const letter = String.fromCharCode(i);
      expect(isHangulVowel(letter), letter).toBe(true);
    }
  });

  it('"ㅏ" 앞의 문자', () => {
    const left = String.fromCharCode("ㅏ".charCodeAt(0) - 1);
    expect(isHangulVowel(left), "Left").toBe(false);

    expect(isHangulVowel("a"), "a").toBe(false);
    expect(isHangulVowel("ㄱ"), "ㄱ").toBe(false);
  });
  it('"ㅣ" 뒤의 문자', () => {
    const right = String.fromCharCode("ㅣ".charCodeAt(0) + 1);
    expect(isHangulVowel(right), "Right").toBe(false);

    expect(isHangulVowel("ힰ"), "ힰ").toBe(false);
    expect(isHangulVowel("力"), "力").toBe(false);
  });
});
