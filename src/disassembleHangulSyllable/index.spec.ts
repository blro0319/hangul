import { disassembleHangulSyllable } from ".";

describe("disassembleHangulSyllable", () => {
  it("겹낱자가 없는 글자", () => {
    expect(disassembleHangulSyllable("가"), "가").toEqual(["ㄱ", "ㅏ", ""]);
    expect(disassembleHangulSyllable("강"), "강").toEqual(["ㄱ", "ㅏ", "ㅇ"]);

    expect(disassembleHangulSyllable("뎌"), "뎌").toEqual(["ㄷ", "ㅕ", ""]);
    expect(disassembleHangulSyllable("뎧"), "뎧").toEqual(["ㄷ", "ㅕ", "ㅎ"]);
  });
  it("분해되지 않는 겹낱자를 포함하는 문자", () => {
    expect(disassembleHangulSyllable("따"), "따").toEqual(["ㄸ", "ㅏ", ""]);
    expect(disassembleHangulSyllable("땄"), "땄").toEqual(["ㄸ", "ㅏ", "ㅆ"]);
    expect(disassembleHangulSyllable("떘"), "떘").toEqual(["ㄸ", "ㅒ", "ㅆ"]);
  });
  it("분해되는 겹낱자를 포함하는 문자", () => {
    expect(disassembleHangulSyllable("과"), "과").toEqual(["ㄱ", "ㅗㅏ", ""]);
    expect(disassembleHangulSyllable("괂"), "괂").toEqual([
      "ㄱ",
      "ㅗㅏ",
      "ㄴㅎ",
    ]);
  });
  it("한글 음절이 아닌 경우", () => {
    expect(disassembleHangulSyllable("a"), "a").toBeUndefined();
    expect(disassembleHangulSyllable("1"), "1").toBeUndefined();
  });
});
