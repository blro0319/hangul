import { disassembleHangulToGroups } from ".";

describe("disassembleHangulToGroups", () => {
  it("한글 음절만", () => {
    expect(disassembleHangulToGroups("훈민정음"), "훈민정음").toEqual([
      ["ㅎ", "ㅜ", "ㄴ"],
      ["ㅁ", "ㅣ", "ㄴ"],
      ["ㅈ", "ㅓ", "ㅇ"],
      ["ㅇ", "ㅡ", "ㅁ"],
    ]);
    expect(disassembleHangulToGroups("값어치"), "값어치").toEqual([
      ["ㄱ", "ㅏ", "ㅂ", "ㅅ"],
      ["ㅇ", "ㅓ"],
      ["ㅊ", "ㅣ"],
    ]);
  });
  it("한글 문장", () => {
    expect(
      disassembleHangulToGroups("꽃초롱 불 밝히듯 눈을 밝힐까"),
      "꽃초롱 불 밝히듯 눈을 밝힐까"
    ).toEqual([
      ["ㄲ", "ㅗ", "ㅊ"],
      ["ㅊ", "ㅗ"],
      ["ㄹ", "ㅗ", "ㅇ"],
      [" "],
      ["ㅂ", "ㅜ", "ㄹ"],
      [" "],
      ["ㅂ", "ㅏ", "ㄹ", "ㄱ"],
      ["ㅎ", "ㅣ"],
      ["ㄷ", "ㅡ", "ㅅ"],
      [" "],
      ["ㄴ", "ㅜ", "ㄴ"],
      ["ㅇ", "ㅡ", "ㄹ"],
      [" "],
      ["ㅂ", "ㅏ", "ㄹ", "ㄱ"],
      ["ㅎ", "ㅣ", "ㄹ"],
      ["ㄲ", "ㅏ"],
    ]);
  });
  it("한글 외 문자 혼합", () => {
    expect(disassembleHangulToGroups("한글(Hangul)"), "한글(Hangul)").toEqual([
      ["ㅎ", "ㅏ", "ㄴ"],
      ["ㄱ", "ㅡ", "ㄹ"],
      ["("],
      ["H"],
      ["a"],
      ["n"],
      ["g"],
      ["u"],
      ["l"],
      [")"],
    ]);
  });
  it("자음과 모음", () => {
    expect(disassembleHangulToGroups("ㄲㄺ"), "ㄲㄺ").toEqual([
      ["ㄲ"],
      ["ㄹ", "ㄱ"],
    ]);
    expect(disassembleHangulToGroups("ㅖㅞ"), "ㅖㅞ").toEqual([
      ["ㅖ"],
      ["ㅜ", "ㅔ"],
    ]);
  });
});
