import { Character } from "./game";

export class Mage extends Character{
    constructor(health, attackPoints, defensePoints, magicPoints){
        super('Mage', health, attackPoints, defensePoints)    
        this.magicPoints = magicPoints
    }


    attack(targetCharacter) {
        const damage = targetCharacter.defensePoints - (this.attackPoints + this.magicPoints)
        targetCharacter.health -= damage
        
        console.log(`${targetCharacter.name} have ${targetCharacter.health} points of life left.`)
        
    }

    heal(targetCharacter) {
        targetCharacter.health = this.magicPoints * 2
    }
}