class Character {
    constructor(name, health, attackPoints, defensePoints) {
        this.name = name;
        this.health = health;
        this.attackPoints = attackPoints;
        this.defensePoints = defensePoints;
    }

    attack(target) {
        const damage = this.attackPoints - target.defensePoints;
        const actualDamage = Math.max(damage, 0); // Garante que o dano não seja negativo

        target.health -= actualDamage;

        if (target.health < 0) {
            target.health = 0; // Garante que a saúde não seja negativa
        }

        console.log(`${target.name} tem ${target.health} pontos de vida restantes.`);
    }
}

const character1 = new Character('Snake', 100, 50, 100);
const character2 = new Character('Rat', 200, 20, 200);

console.log(character1.attack(character2))


