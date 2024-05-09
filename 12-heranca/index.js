class Property {   
    constructor(area, price){
        this.area = area
        this.price = price
        
    }

    getPricePerSquareMeter(){
        return this.price / this.area
    }
}

class House extends Property {} // using the extends to inherit the properties and behavior of Property Class. 

class Apartment extends Property {
    constructor(number, area, price) {
        super(area, price) // using the parent constructor to inherit the properties and behavior of Property Class. 

        this.number = number 
    }

    getFloor(){
        return this.number.slice(0, -2) // returning the whole string except the last two characters
    }
}

const apt = new Apartment("201", 100, 160000)
console.log (`Area: ${apt.area}, Price: ${apt.price}, Floor: ${apt.getFloor()}`)

const land = new Property(134, 100000)
const somehouse = new House(122, 2000)

console.log(`Land: ${land.area} square meters, ${land.price}`)
console.log(`Some house: ${somehouse.area} square meters, ${somehouse.price}`)

console.log(`Price Per SquareMeter "Land": ${land.getPricePerSquareMeter()}`)
console.log(`Price Per SquareMeter: "Some house": ${somehouse.getPricePerSquareMeter()}`)
console.log(`Price Per SquareMeter: "Apartment": ${apt.getPricePerSquareMeter()}`)