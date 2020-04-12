'use strict';
class Weapon {
    constructor({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.startDurability = durability;
        this.range = range;
    }
    takeDamage(damage) {
        if (this.durability - damage > 0) {
            this.durability -= damage;
        } else this.durability = 0;
    }
    getDamage() {
        if (this.durability === 0) {
            this.attack = 0;
          } else if (this.durability >= this.startDurability*0.3) {
            this.attack /=  2;
          }
        return this.attack; 
    }
    isBroken() {            
        return this.durability > 0 ? false : true;
      }
   
}
let bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
  });
const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});
console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage());