import {Character} from "./game.js"


export class Thief extends Character{
    constructor(health, attackPoints, defensePoints){
        super('Thief', health, attackPoints, defensePoints)
    }

    attack(target){
        const damage =  (this.attackPoints - target.defensePoints) * 2 // subtraindo o atack (2x maior) pela defesa do alvo


        target.health -= damage

        console.log(`${targetCharacter.name} have ${targetCharacter.health} points of life left.`)
    }
    }




