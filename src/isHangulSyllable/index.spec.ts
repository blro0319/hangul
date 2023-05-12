import { isHangulSyllable } from ".";

describe("isHangulSyllable", () => {
  it('"가" ~ "힣"', () => {
    for (let i = "가".charCodeAt(0); i <= "힣".charCodeAt(0); i++) {
      expect(isHangulSyllable(String.fromCharCode(i))).toBe(true);
    }
  });

  it('"가" 앞의 문자', () => {
    expect(isHangulSyllable("a")).toBe(false);
    expect(isHangulSyllable("ㄱ")).toBe(false);
    expect(isHangulSyllable("ㅏ")).toBe(false);
  });
  it('"힣" 뒤의 문자', () => {
    expect(isHangulSyllable("ힰ")).toBe(false);
    expect(isHangulSyllable("力")).toBe(false);
  });
});
