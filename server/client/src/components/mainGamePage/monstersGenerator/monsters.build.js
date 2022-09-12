class Monster {
  constructor(level, difficulty) {
    this.status = "idle";
    this.level = level <= 10 ? 1 : level / 10;
    this.difficulty = () => {
      if (difficulty === "easy") return 1;
      if (difficulty === "medium") return 1.2;
      return 1.5;
    };
  }

  toObj() {
    return {
      maxHealth: this.maxHealth,
    };
  }

  setStatus(status) {
    this.status = status;
  }

  attack(enemy) {
    if (enemy.damage(this.ATK) === "hit") {
      return enemy.HP <= 0 ? "dead" : "alive";
    } else return null;
  }

  damage(dmg) {
    const chanceToHit = Math.floor(Math.random() * 21 + 10);
    if (chanceToHit > this.shield) {
      this.HP = this.HP - dmg;
      return "hit";
    } else return 0;
  }
}

class Boss extends Monster {
  constructor(level) {
    super(level);
    this.type = "boss";
    this.maxHealth = 300 * this.level * this.difficulty();
    this.HP = this.maxHealth;
    this.ATK = 15 * this.level * this.difficulty();
    this.shield = 17;
  }
}
class Regular extends Monster {
  constructor(level) {
    super(level);
    this.type = "regular";
    this.maxHealth = 70 * this.level * this.difficulty();
    this.HP = this.maxHealth;
    this.ATK = 12 * this.level * this.difficulty();
    this.shield = 13;
  }
}
export function monsterBuild(level, race, difficulty) {
  if (race === "boss") return new Boss(level, difficulty);
  if (race === "regular") return new Regular(level, difficulty);
  else return null;
}
