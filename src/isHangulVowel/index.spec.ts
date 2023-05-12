import { isHangulVowel } from "./index";

describe("isHangulVowel", () => {
  it('"ㅏ" ~ "ㅣ"', () => {
    for (let i = "ㅏ".charCodeAt(0); i <= "ㅣ".charCodeAt(0); i++) {
      const letter = String.fromCharCode(i);
      expect(isHangulVowel(letter), letter).toBe(true);
    }
  });

  it('"ㅏ" 앞의 문자', () => {
    expect(isHangulVowel("a")).toBe(false);
    expect(isHangulVowel("ㄱ")).toBe(false);
  });
  it('"ㅣ" 뒤의 문자', () => {
    expect(isHangulVowel("ힰ")).toBe(false);
    expect(isHangulVowel("力")).toBe(false);
  });
});
