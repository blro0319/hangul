import { disassembleHangul } from "..";

export function hangulIncludes(string: string, search: string) {
  return disassembleHangul(string).includes(disassembleHangul(search));
}
