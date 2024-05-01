class Product {

    constructor( name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }


    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        return this.price = (this.price * discount) / 100
    }
}


const cellPhone = new Product("MotorolaG67", "moto 1256gb", 1000)

cellPhone.addToStock(100)
console.log(`You had a discount of: ${cellPhone.calculateDiscount(50)} dollars`)

