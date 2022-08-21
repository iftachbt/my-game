import { Character } from "../../mongoDB/DB";

export function saveCharacter(stats) {
  const newCharacter = new Character({
    name: stats.name,
    race: stats.race,
    shield: stats.shield,
    ATK: stats.ATK,
    Health: stats.HP,
    gold: stats.gold,
    level: stats.level,
  });
  newCharacter.save();
}
