export class Character {
    constructor(name, health, attackPoints, defensePoints) {
        this.name = name;
        this.health = health;
        this.attackPoints = attackPoints;
        this.defensePoints = defensePoints;
    }

    attack(targetCharacter) {

        const damage = targetCharacter.defensePoints - this.attackPoints 
        targetCharacter.health -= damage

        console.log(`${targetCharacter.name} have ${targetCharacter.health} points of life left.`)
    }
}






