import { disassembleHangulToGroups } from "..";

export function getHangulLeadingConsonants(string: string) {
  return disassembleHangulToGroups(string).reduce(
    (acc, [leading]) => acc + leading,
    ""
  );
}
