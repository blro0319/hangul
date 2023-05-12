import { disassembleHangulVowel } from ".";

describe("disassembleHangulVowel", () => {
  it("겹낱자가 아닌 모음", () => {
    expect(disassembleHangulVowel("ㅏ"), "ㅏ").toBe("ㅏ");
  });
  it("분해되지 않는 겹낱자 모음", () => {
    expect(disassembleHangulVowel("ㅒ"), "ㅒ").toBe("ㅒ");
  });
  it("분해되는 겹낱자 모음", () => {
    expect(disassembleHangulVowel("ㅞ"), "ㅞ").toBe("ㅜㅔ");
  });
  it("모음이 아닌 글자", () => {
    expect(disassembleHangulVowel("가"), "가").toBeUndefined();
    expect(disassembleHangulVowel("1"), "1").toBeUndefined();
  });
});
