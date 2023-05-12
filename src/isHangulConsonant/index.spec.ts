import { isHangulConsonant } from ".";

describe("isHangulConsonant", () => {
  it('"ㄱ" ~ "ㅎ"', () => {
    for (let i = "ㄱ".charCodeAt(0); i <= "ㅎ".charCodeAt(0); i++) {
      const letter = String.fromCharCode(i);
      expect(isHangulConsonant(String.fromCharCode(i)), letter).toBe(true);
    }
  });

  it('"ㄱ" 앞의 문자', () => {
    const left = String.fromCharCode("ㄱ".charCodeAt(0) - 1);
    expect(isHangulConsonant(left), "Left").toBe(false);

    expect(isHangulConsonant("a"), "a").toBe(false);
  });
  it('"ㅎ" 뒤의 문자', () => {
    const right = String.fromCharCode("ㅎ".charCodeAt(0) + 1);
    expect(isHangulConsonant(right), "Right").toBe(false);

    expect(isHangulConsonant("ㅏ"), "ㅏ").toBe(false);
    expect(isHangulConsonant("ힰ"), "ힰ").toBe(false);
    expect(isHangulConsonant("力"), "力").toBe(false);
  });
});
