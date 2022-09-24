import { bloated } from "./bloated";
import { centipede } from "./centipede";
import { deceased } from "./Deceased";
import { hyena } from "./Hyena";
import { mummy } from "./Mummy";
import { scorpio } from "./Scorpio";
import { snake } from "./Snake";
import { turtle } from "./turtle";
import { vulture } from "./Vulture";

export function monster(race) {
  if (race === 1) return deceased;
  if (race === 2) return hyena;
  if (race === 3) return mummy;
  if (race === 4) return scorpio;
  if (race === 5) return snake;
  return vulture;
}
export function boss(race) {
  if (race === 1) return bloated;
  if (race === 2) return centipede;
  return turtle;
}
export function randomMonster(monster) {
  if (monster === "boss") return Math.floor(Math.random() * 3 + 1);
  return Math.floor(Math.random() * 6 + 1);
}
