import {Character} from "./game.js"


class Thief extends Character{
    constructor(health, attackPoints, defensePoints){
        super('Thief', health, attackPoints, defensePoints)
    }

    attack(target){
        const damage =  (this.attackPoints - target.defensePoints) * 2 // subtraindo o atack (2x maior) pela defesa do alvo


        target.health -= damage

        console.log(`${targetCharacter.name} have ${targetCharacter.health} points of life left.`)
    }
    }

const character1 = new Thief(100, 150, 200)
const character2 = new Character('Rat', 200, 20, 100)

console.log(character1.attack(character2)) 


