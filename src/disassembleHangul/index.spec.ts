import { disassembleHangul } from ".";

describe("disassembleHangul", () => {
  it("한글 음절만", () => {
    expect(disassembleHangul("훈민정음"), "훈민정음").toEqual(
      "ㅎㅜㄴㅁㅣㄴㅈㅓㅇㅇㅡㅁ"
    );
    expect(disassembleHangul("값어치"), "값어치").toEqual("ㄱㅏㅂㅅㅇㅓㅊㅣ");
  });
  it("한글 문장", () => {
    expect(
      disassembleHangul("꽃초롱 불 밝히듯 눈을 밝힐까"),
      "꽃초롱 불 밝히듯 눈을 밝힐까"
    ).toEqual(
      "ㄲㅗㅊㅊㅗㄹㅗㅇ ㅂㅜㄹ ㅂㅏㄹㄱㅎㅣㄷㅡㅅ ㄴㅜㄴㅇㅡㄹ ㅂㅏㄹㄱㅎㅣㄹㄲㅏ"
    );
  });
  it("한글 외 문자 혼합", () => {
    expect(disassembleHangul("한글(Hangul)"), "한글(Hangul)").toEqual(
      "ㅎㅏㄴㄱㅡㄹ(Hangul)"
    );
  });
  it("자음과 모음", () => {
    expect(disassembleHangul("ㄲㄺ"), "ㄲㄺ").toEqual("ㄲㄹㄱ");
    expect(disassembleHangul("ㅖㅞ"), "ㅖㅞ").toEqual("ㅖㅜㅔ");
  });
});
