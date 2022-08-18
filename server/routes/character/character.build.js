class Character {
  constructor(name) {
    this.name = name;
    this.Health = this.maxHealth;
    this.gold = 3;
  }

  toObj() {
    return {
      name: this.name,
      race: this.race,
      shield: this.shield,
      ATK: this.ATK,
      Health: `${this.Health}/${this.maxHealth}`,
    };
  }
  attack(enemy) {
    enemy.damage(this.ATK) === "hit";
    return enemy.Health <= 0 ? "dead" : "alive";
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
export function selectClass(name, race) {
  if (race === "elf") return new Elf(name);
  if (race === "human") return new Human(name);
  if (race === "dwarf") return new Dwarf(name);
  if (race === "drgonborn") return new Drgonborn(name);
  else return null;
}
