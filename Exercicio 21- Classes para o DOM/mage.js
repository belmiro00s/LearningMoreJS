import { Character } from "./game";

class Mage extends Character{
    constructor(health, attackPoints, defensePoints, magicPoints){
        this.magicPoints = magicPoints
        super('Mage', health, attackPoints, defensePoints, magicPoints)    
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