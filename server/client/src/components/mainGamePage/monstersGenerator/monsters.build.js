class Monster {
  constructor(level, difficulty, luck) {
    this.status = "idle";
    this.level = level <= 10 ? 1 : level / 5;
    this.difficulty = () => {
      if (difficulty === "easy") return 1;
      if (difficulty === "medium") return 1.2;
      return 1.5;
    };
    this.criticalHit = 1.25;
    this.luck = luck;
  }
  setStatus(status) {
    this.status = status;
  }
  damage(dmg) {
    const chanceToHit = Math.floor(Math.random() * 21 + 7 + this.luck);
    const chanceTocritical = Math.floor(Math.random() * 100) < 5 + this.luck / 2 ? 1 : 0;
    if (chanceToHit > this.shield) {
      if (chanceTocritical) return (this.HP = Math.floor(this.HP - dmg * this.criticalHit));
      return (this.HP = Math.floor(this.HP - dmg));
    } else return;
  }
}
class Boss extends Monster {
  constructor(level, difficulty, luck) {
    super(level, difficulty, luck);
    this.type = "boss";
    this.maxHealth = Math.floor(100 * this.level * this.difficulty());
    this.HP = this.maxHealth;
    this.ATK = Math.floor(7 * this.level * this.difficulty());
    this.shield = 12;
    this.gold = 15;
  }
}
class Regular extends Monster {
  constructor(level, difficulty, luck) {
    super(level, difficulty, luck);
    this.type = "regular";
    this.maxHealth = Math.floor(40 * this.level * this.difficulty());
    this.HP = this.maxHealth;
    this.ATK = Math.floor(4 * this.level * this.difficulty());
    this.shield = 10;
    this.gold = 4;
  }
}
export function monsterBuild(level, type, difficulty, luck) {
  if (type === "boss") return new Boss(level, difficulty, luck);
  if (type === "regular") return new Regular(level, difficulty, luck);
  else return null;
}
