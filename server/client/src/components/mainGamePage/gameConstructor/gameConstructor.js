import { levelSchema } from "./level.schema";

function randomMonster(monster) {
  if (monster === "boss") return Math.floor(Math.random() * 3 + 1);
  return Math.floor(Math.random() * 6 + 1);
}
export function levelConstructor(level, difficulty) {
  let monstersArray = levelSchema(level);
  monstersArray = monstersArray.map((monster) => monsterBuild(level, monster, difficulty));
}
