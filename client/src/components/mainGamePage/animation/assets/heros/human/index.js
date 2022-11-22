import attack1 from "./human_attack.png";
import death from "./human_death.png";
import idle from "./human_idle.png";
import hurt from "./human_hurt.png";
import run from "./human_run.png";

const human = {
  idle: { frames: 3, img: idle },
  attack1: { frames: 5, img: attack1 },
  death: { frames: 5, img: death },
  hurt: { frames: 2, img: hurt },
  run: { frames: 5, img: run },
};
export { human };
