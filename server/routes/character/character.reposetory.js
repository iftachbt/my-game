import { Character } from "../../mongoDB/DB.js";

export function save(stats) {
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
