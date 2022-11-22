import attack1 from "./Snake_attack.png";
import death from "./Snake_death.png";
import idle from "./Snake_idle.png";
import hurt from "./Snake_hurt.png";
import run from "./Snake_run.png";

const snake = {
  idle: { frames: 3, img: idle },
  attack1: { frames: 5, img: attack1 },
  death: { frames: 3, img: death },
  hurt: { frames: 1, img: hurt },
  run: { frames: 3, img: run },
};
export { snake };
