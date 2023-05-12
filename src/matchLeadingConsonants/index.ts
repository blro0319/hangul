import { getHangulLeadingConsonants } from "..";

export function matchLeadingConsonants(string: string, search: string) {
  if (/[^ㄱ-ㅎ ]/.test(search)) return false;

  const stringLeading = getHangulLeadingConsonants(string);
  const searchLeading = getHangulLeadingConsonants(search);

  return stringLeading.includes(searchLeading);
}
