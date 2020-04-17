'use strict';
//task 1
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
        if (this.durability === 0) return this.attack = 0;
        else if (this.durability >= this.startDurability*0.3) return this.attack;
        else return this.attack / 2;
    }

    isBroken() {            
        return this.durability > 0 ? false : true;
      }
   
}
const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});
  
const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});
  
const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});
  
const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});
  
const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});
const longBow = {
    name: 'Длинный лук',
    attack: 15,
    durability: bow.durability,
    range: 4,
};
  
const axe = {
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: sword.range,
};
  
const stormStaff = {
    name: 'Посох Бури',
    attack: 10,
    durability: staff.durability,
    range: 3,
};

  // task 2
class Bow extends Weapon {
    constructor() {        
        super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }
};
class Arm extends Weapon {
    constructor() {
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1});    
    }
};
class Sword extends Weapon {
    constructor() {
        super({name: 'Меч', attack: 25, durability: 500, range: 1});
    }  
};
class Knife extends Weapon {
    constructor() {
        super({name: 'Нож', attack: 5, durability: 300, range: 1});          
    }
};
class Staff extends Weapon {
    constructor() {
        super({name: 'Посох', attack: 8, durability: 300, range: 2});         
    }
};
class LongBow extends Bow {
    constructor() {
        super();             
        this.name = 'Длинный лук';
        this.attack = 15;
        this.durability = this.durability;
        this.range = 4;        
    }
};
  
class Axe extends Sword {
    constructor() {        
        super();
        this.name = 'Секира'
        this.attack = 27
        this.durability = 800
        this.range = this.range
    }
};
class StormStaff extends Staff {
    constructor() {
        super();                
        this.name = 'Посох Бури';
        this.attack = 10;
        this.durability = this.durability;
        this.range = 3;        
    }
};

// task 3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = [];    
        this.subjects = {};
    }

    getName(name) {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade < 1 || grade > 5 || typeof grade !== 'number') {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        } else {
            if (this.subjects.hasOwnProperty(subject)) {      
                this.subjects[subject].push(grade);                     
            } else {     
                this.subjects[subject] = [];
                this.subjects[subject].push(grade);               
            }
        }
        if (this.subjects[subject]) {
            return this.subjects[subject].length;
        } else return 0;        
    }

    getAverageBySubject(subject) {           
        if (this.subjects.hasOwnProperty(subject)) {
            let sum = 0;
            for (let i = 0; i < this.subjects[subject].length; i++) {
                sum += this.subjects[subject][i];
            }
            this.grades.push(sum / this.subjects[subject].length);             
            return sum / this.subjects[subject].length;
        } else return 0;       
    }
    
    getTotalAverage() {        
        for (let key in this.subjects) {
            this.getAverageBySubject(key);
        }
        let sum = 0;
        console.log(this.grades);
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        console.log(sum / this.grades.length)
        return sum / this.grades.length;
    }
}

