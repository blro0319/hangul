import { disassembleHangulToGroups } from "..";

export function disassembleHangul(string: string) {
  return disassembleHangulToGroups(string).flat().join("");
}
