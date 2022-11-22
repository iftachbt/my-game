import { levelSchema } from "./level.schema";
import { monsterBuild } from "../monstersGenerator/monsters.build";

export function levelConstructor(hero) {
  const { level, difficulty, luck } = hero;
  let monstersArray = levelSchema(level);
  return monstersArray.map((monster) => monsterBuild(level, monster, difficulty, luck));
}
