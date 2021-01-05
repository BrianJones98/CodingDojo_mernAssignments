class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.resilience = res;
    }

    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power;
            console.log(`${this.name} attacked ${target.name} and reduced ${target.name}'s resilience by ${this.power}`);
            console.log(`${target.name}'s resilience is now ${target.resilience}\n`);
        } else{
            throw new Error("Target must be a unit!");
        }
    }
}
class Effect extends Card{
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    play(target){
        if(target instanceof Unit){
            target[this.stat] += this.mag;
            let direction = this.mag < 0 ? "reduced" : "increased";
            console.log(`${this.name} was played on ${target.name}, and ${target.name}'s ${this.stat} was ${direction} by ${Math.abs(this.mag)}`);
            console.log(`${target.name}'s ${this.stat} is now ${target[this.stat]}\n`);
        } else{
            throw new Error("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce Target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);

hardAlgo.play(redBeltNinja);
unhandledPromiseRejection.play(blackBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);