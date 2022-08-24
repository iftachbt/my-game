class Character {
  constructor(name) {
    this.name = name;
    this.gold = 3;
    this.level = 1;
  }

  toObj() {
    return {
      name: this.name,
      race: this.race,
      shield: this.shield,
      ATK: this.ATK,
      Health: this.HP,
      gold: this.gold,
      level: this.level,
    };
  }
  static_() {
    return {
      name: this.name,
      race: this.race,
    };
  }
  dynamic() {
    return {
      shield: this.shield,
      ATK: this.ATK,
      Health: this.HP,
      gold: this.gold,
      level: this.level,
    };
  }
  attack(enemy) {
    if (enemy.damage(this.ATK) === "hit") {
      return enemy.Health <= 0 ? "dead" : "alive";
    } else return null;
  }
  damage(dmg) {
    const chanceToHit = Math.floor(Math.random() * 21);
    if (chanceToHit > this.shield) {
      this.Health = this.Health - dmg;
      return "hit";
    } else return 0;
  }
  fillHP(num, conunter = 0) {
    if (this.Health === this.maxHealth) return;
    if (conunter === num) return;
    this.Health++;
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

class Human extends Character {
  constructor(name) {
    super(name);
    this.race = "human";
    this.HP = 110;
    this.ATK = 13;
    this.shield = 14;
  }
}
class Elf extends Character {
  constructor(name) {
    super(name);
    this.race = "Elf";
    this.HP = 110;
    this.ATK = 14;
    this.shield = 12;
  }
}
class Dwarf extends Character {
  constructor(name) {
    super(name);
    this.race = "Dwarf";
    this.HP = 100;
    this.ATK = 15;
    this.shield = 15;
  }
}
class Drgonborn extends Character {
  constructor(name) {
    super(name);
    this.race = "Dwarf";
    this.HP = 130;
    this.ATK = 15;
    this.shield = 15;
  }
}
export function characterBuild(name, race) {
  if (race === "elf") return new Elf(name);
  if (race === "human") return new Human(name);
  if (race === "dwarf") return new Dwarf(name);
  if (race === "drgonborn") return new Drgonborn(name);
  else return null;
}
