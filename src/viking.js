// Soldier
class Soldier {
    constructor(health, strength) {
        (this.health = health),
        (this.strength = strength);
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${
                this.name
            } has received ${damage} points of damage`;
        } else {
            return `${
                this.name
            } has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.name = "Saxon";
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A ${
                this.name
            } has received ${damage} points of damage`;
        } else {
            return `A ${
                this.name
            } has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        const damage = randomViking.strength;
        const result = randomSaxon.receiveDamage(damage);

        if (randomSaxon.health<= 0) {
          this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }
      
        return result;
      }
      saxonAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        const damageSaxon = randomSaxon.strength;
        const resultSaxon = randomViking.receiveDamage(damageSaxon);
      
        if (randomViking.health <= 0) {
          this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
      
        return resultSaxon;
      }

      
      showStatus() {
        if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
          return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0 && this.saxonArmy.length> 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

}
