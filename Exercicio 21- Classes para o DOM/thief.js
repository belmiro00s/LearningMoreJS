import {Character} from "./game.js"


class Thief extends Character{
    constructor(health, attackPoints, defensePoints){
        super('Thief', health, attackPoints, defensePoints)
    }

    attack(target){
        const damage = 2 * (this.attackPoints - target.defensePoints) // subtraindo o atack (2x maior) pela defesa do alvo

        const actualDamage = Math.max(damage, 0); // Garante que o dano não seja negativo

        target.health -= actualDamage; //subtraindo o alvo pelo dano restante

        if (target.health < 0) {
            target.health = 0; // Garante que a saúde não seja negativa
        }

        console.log(`${target.name} tem ${target.health} pontos de vida restantes.`);
    }
    }

const character1 = new Thief(100, 150, 200)
const character2 = new Character('Rat', 200, 20, 100)

console.log(character1.attack(character2))


