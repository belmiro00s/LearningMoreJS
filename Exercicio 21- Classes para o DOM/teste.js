import {Mage} from "./mage.js"
import {Thief} from "./thief.js"
import {Warrior} from "./warrior.js"


const belma = new Warrior('Belma', 200, 100, 100)
const alberto = new Mage('Alberto', 300, 200, 200)
const carlao = new Warrior('Carlao', 200, 130, 100)
const gustavo = new Thief('Gustavo', 100, 250, 300)


console.table({belma, alberto, carlao, gustavo})

belma.switchStance()
carlao.attack(belma)
alberto.attack(carlao)


console.table({belma, alberto, carlao, gustavo})

alberto.heal(belma)

gustavo.attack(alberto)
belma.switchStance()
belma.attack(gustavo)
alberto.attack(gustavo)

console.table({belma, alberto, carlao, gustavo})
