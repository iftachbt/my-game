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
    const chanceToHit = Math.floor(Math.random() * 21 + 10 + this.luck);
    if (chanceToHit > this.shield) {
      this.HP = this.HP - dmg;
      return "hit";
    } else return 0;
  }
}

class Boss extends Monster {
  constructor(level, difficulty, luck) {
    super(level, difficulty, luck);
    this.type = "boss";
    this.maxHealth = Math.floor(70 * this.level * this.difficulty());
    this.HP = this.maxHealth;
    this.ATK = Math.floor(12 * this.level * this.difficulty());
    this.shield = 17;
    this.gold = 15;
    this.luck = luck;
  }
}
class Regular extends Monster {
  constructor(level, difficulty, luck) {
    super(level, difficulty, luck);
    this.type = "regular";
    this.maxHealth = Math.floor(70 * this.level * this.difficulty());
    this.HP = this.maxHealth;
    this.ATK = Math.floor(12 * this.level * this.difficulty());
    this.shield = 13;
    this.gold = 4;
    this.luck = luck;
  }
}
export function monsterBuild(level, race, difficulty, luck = 0) {
  if (race === "boss") return new Boss(level, difficulty, luck);
  if (race === "regular") return new Regular(level, difficulty, luck);
  else return null;
}
