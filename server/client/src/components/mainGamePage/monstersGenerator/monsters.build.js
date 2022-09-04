class Monster {
  constructor(level) {
    this.level = level;
  }

  toObj() {
    return {
      name: this.name,
      shield: this.shield,
      ATK: this.ATK,
      maxHealth: this.maxHealth,
      HP: this.HP,
      gold: this.gold,
      level: this.level,
    };
  }

  attack(enemy) {
    if (enemy.damage(this.ATK) === "hit") {
      return enemy.HP <= 0 ? "dead" : "alive";
    } else return null;
  }
  damage(dmg) {
    const chanceToHit = Math.floor(Math.random() * 21);
    if (chanceToHit > this.shield) {
      this.HP = this.HP - dmg;
      return "hit";
    } else return 0;
  }
  fillHP(num, conunter = 0) {
    if (this.HP === this.maxHealth) return;
    if (conunter === num) return;
    this.HP++;
    this.fillHP((num, (conunter += 1)));
    return;
  }
  gainHP(num) {
    this.maxHealth = this.maxHealth + num;
  }
  gainGold(num) {
    this.gold = this.gold + num;
  }
  gainATK(num) {
    this.ATK = this.ATK + num;
  }
  levelUp() {
    this.level += 1;
  }
}

class Boss extends Monster {
  constructor(level) {
    super(level);
    this.race = "boss";
    this.maxHealth = 300 * level;
    this.HP = this.maxHealth;
    this.ATK = 15 * level;
    this.shield = 17;
  }
}
class Regular extends Monster {
  constructor(level) {
    super(level);
    this.kind = "regular";
    this.maxHealth = 70 * level;
    this.HP = this.maxHealth;
    this.ATK = 12 * level;
    this.shield = 13;
  }
}
export function characterBuild(name, race) {
  if (race === "elf") return new Elf(name);
  if (race === "human") return new Human(name);
  if (race === "dwarf") return new Dwarf(name);
  if (race === "dragonborn") return new Drgonborn(name);
  else return null;
}
