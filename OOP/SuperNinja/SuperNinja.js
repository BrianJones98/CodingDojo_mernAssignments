class Ninja{
    constructor(name, speed=3, strength=3){
        this.name = name;
        this.health = 100;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("Name: " + this.name);
    }
    showStats(){
        console.log(`
            Stats:
            ********************
            Name: ${this.name}
            Strength: ${this.strength}
            Speed: ${this.speed}
            Health: ${this.health}
        `);
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name, wisdom=10){
        super(name, 10, 10);
        this.health = 200;
        this.wisdom = wisdom;
    }

    showStats = () => super.showStats();
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    drinkSake = () => super.drinkSake();
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.drinkSake();
superSensei.showStats();