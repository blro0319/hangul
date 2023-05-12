import { matchLeadingConsonants } from ".";

describe("matchLeadingConsonants", () => {
  it("한글 음절만", () => {
    expect(matchLeadingConsonants("훈민정음", "ㅎ"), "훈민정음/ㅎ").toBe(true);
    expect(matchLeadingConsonants("훈민정음", "ㅎㅁ"), "훈민정음/ㅎㅁ").toBe(
      true
    );
    expect(
      matchLeadingConsonants("훈민정음", "ㅎㅁㅈㅇ"),
      "훈민정음/ㅎㅁㅈㅇ"
    ).toBe(true);
    expect(
      matchLeadingConsonants("훈민정음", "ㅁㅈㅇ"),
      "훈민정음/ㅁㅈㅇ"
    ).toBe(true);
    expect(matchLeadingConsonants("훈민정음", "ㅇ"), "훈민정음/ㅇ").toBe(true);

    expect(matchLeadingConsonants("훈민정음", "훈민정음/ㄷ")).toBe(false);
    expect(matchLeadingConsonants("훈민정음", "훈민정음/ㅁㅎ")).toBe(false);
    expect(matchLeadingConsonants("훈민정음", "훈민정음/ㅎㅁㅈㅇㅎ")).toBe(
      false
    );
  });

  it("띄어쓰기가 포함된 한글 음절", () => {
    expect(
      matchLeadingConsonants("날다람쥐 날다", "ㄹㅈ ㄴㄷ"),
      "날다람쥐 날다/ㄹㅈ ㄴㄷ"
    ).toBe(true);
    expect(
      matchLeadingConsonants("날다람쥐 날다", "ㄹㅈㄴㄷ"),
      "날다람쥐 날다/ㄹㅈㄴㄷ"
    ).toBe(false);
  });

  it("다른 문자 혼합", () => {
    expect(
      matchLeadingConsonants("한글(Hangul)은", "ㅎㄱ"),
      "한글(Hangul)은/ㅎㄱ"
    ).toBe(true);
    expect(
      matchLeadingConsonants("한글(Hangul)은", "ㅎㄱㅇ"),
      "한글(Hangul)은/ㅎㄱㅇ"
    ).toBe(false);
    expect(
      matchLeadingConsonants("한글(Hangul)은", "ㅇ"),
      "한글(Hangul)은/ㅇ"
    ).toBe(true);
  });

  it("초정이 아닌 검색어", () => {
    expect(
      matchLeadingConsonants("훈민정음", "ㅎㅁ정음"),
      "훈민정음/ㅎㅁ정음"
    ).toBe(false);
    expect(
      matchLeadingConsonants("안녕(Hello)", "Hello"),
      "안녕(Hello)/Hello"
    ).toBe(false);
  });
});
