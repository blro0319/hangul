import { getHangulLeadingConsonants } from ".";

describe("getHangulLeadingConsonants", () => {
  it("한글 음절만", () => {
    expect(getHangulLeadingConsonants("훈민정음")).toEqual("ㅎㅁㅈㅇ");
  });
  it("띄어쓰기가 포함된 한글 문장", () => {
    expect(getHangulLeadingConsonants("꽃초롱 불 밝히듯 눈을 밝힐까")).toEqual(
      "ㄲㅊㄹ ㅂ ㅂㅎㄷ ㄴㅇ ㅂㅎㄲ"
    );
  });
  it("다른 문자 혼합", () => {
    expect(getHangulLeadingConsonants("한글(Hangul)")).toEqual("ㅎㄱ(Hangul)");
  });
});
