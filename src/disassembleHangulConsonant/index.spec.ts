import { disassembleHangulConsonant } from ".";

describe("disassembleHangulConsonant", () => {
  it("겹낱자가 아닌 자음", () => {
    expect(disassembleHangulConsonant("ㄱ"), "ㄱ").toBe("ㄱ");
  });
  it("분해되지 않는 겹낱자 자음", () => {
    expect(disassembleHangulConsonant("ㄲ"), "ㄲ").toBe("ㄲ");
  });
  it("분해되는 겹낱자 자음", () => {
    expect(disassembleHangulConsonant("ㄺ"), "ㄺ").toBe("ㄹㄱ");
  });
  it("자음이 아닌 글자", () => {
    expect(disassembleHangulConsonant("가"), "가").toBeUndefined();
    expect(disassembleHangulConsonant("1"), "1").toBeUndefined();
  });
});
