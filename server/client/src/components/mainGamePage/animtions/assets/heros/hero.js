import { elf } from "./elf";
import { dragonborn } from "./dragonborn";
import { dwarf } from "./dwarf";
import { human } from "./human";

export default function hero(race) {
  if (race === "dragonborn") return dragonborn;
  if (race === "dwarf") return dwarf;
  if (race === "human") return human;
  return elf;
}
