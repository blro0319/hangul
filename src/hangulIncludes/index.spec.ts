import { hangulIncludes } from ".";

describe("hangulIncludes", () => {
  it("한글", () => {
    expect(hangulIncludes("한글", "")).toBeTruthy();
    expect(hangulIncludes("한글", "ㅎ")).toBeTruthy();
    expect(hangulIncludes("한글", "하")).toBeTruthy();
    expect(hangulIncludes("한글", "한")).toBeTruthy();
    expect(hangulIncludes("한글", "한ㄱ")).toBeTruthy();
    expect(hangulIncludes("한글", "한그")).toBeTruthy();
    expect(hangulIncludes("한글", "한글")).toBeTruthy();

    expect(hangulIncludes("한글", "ㅎㄱ")).toBeFalsy();
    expect(hangulIncludes("한글", "학")).toBeFalsy();
  });
  it("놀부", () => {
    expect(hangulIncludes("놀부", "")).toBeTruthy();
    expect(hangulIncludes("놀부", "ㄴ")).toBeTruthy();
    expect(hangulIncludes("놀부", "노")).toBeTruthy();
    expect(hangulIncludes("놀부", "놀")).toBeTruthy();
    expect(hangulIncludes("놀부", "놃")).toBeTruthy();
    expect(hangulIncludes("놀부", "놀부")).toBeTruthy();

    expect(hangulIncludes("놀부", "ㄴㅂ")).toBeFalsy();
    expect(hangulIncludes("놀부", "노ㅂ")).toBeFalsy();
  });
});
