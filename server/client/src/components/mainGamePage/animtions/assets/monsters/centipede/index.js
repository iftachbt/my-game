import attack1 from "./Centipede_attack.png";
import death from "./Centipede_death.png";
import idle from "./Centipede_idle.png";
import hurt from "./Centipede_hurt.png";
import run from "./Centipede_run.png";

const centipede = {
  idle: { frames: 3, img: idle },
  attack1: { frames: 5, img: attack1 },
  death: { frames: 3, img: death },
  hurt: { frames: 1, img: hurt },
  run: { frames: 3, img: run },
};
export { centipede };
