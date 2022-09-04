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
  if (race === "deceased") return deceased;
  if (race === "hyena") return hyena;
  if (race === "mummy") return mummy;
  if (race === "scorpio") return scorpio;
  if (race === "snake") return snake;
  return vulture;
}
export function boss(race) {
  if (race === "bloated") return bloated;
  if (race === "centipede") return centipede;
  return turtle;
}
