import { Character } from "./game";

export class Warrior extends Character{
    constructor(health, attackPoints, defensePoints, shildPoints, ){
        super('Warrior', health, attackPoints, defensePoints )
        this.stance = "attacking"
        this.shildPoints = shildPoints
    }

    attack(targetCharacter){
        if(this.instance === "attacking"){
            const damage = targetCharacter.defensePoints - this.attackPoints
            targetCharacter -= damage
            console.log(`${targetCharacter.name} have ${targetCharacter.health} points of life left.`)
        }        
    }

    switchStance(){
        if(this.stance === "attacking"){
            this.stance = "defending"
            this.defensePoints += this.shildPoints
        }else{
            this.stance = "attacking"
            this.defensePoints -= this.shildPoints
        }
    }
}