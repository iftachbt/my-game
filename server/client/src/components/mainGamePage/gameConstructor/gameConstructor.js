import { levelSchema } from "./level.schema";
import { monsterBuild } from "../monstersGenerator/monsters.build";

export function levelConstructor(level, difficulty) {
  let monstersArray = levelSchema(level);
  return monstersArray.map((monster) => monsterBuild(level, monster, difficulty));
}
