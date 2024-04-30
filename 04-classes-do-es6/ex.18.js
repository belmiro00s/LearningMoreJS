class User {

    constructor(fullname, email, password, name, description, price) {
        this.fullname = fullname
        this.email = email
        this.password = password
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    login(email, password) {

        if (email === this.email && password === this.password) {
            console.log('Login sucessfuly')
        } else {
            console.log('Acess denied')
        }
    }


    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        this.price = (this.price * discount) / 100
        console.log(this.price)
    }
}


const user = new User("Guilherme Belmiro", "furei@ar.com", 123, "MotorolaG67", "moto 1256gb", 1000)

user.login("furei@ar.com", 123)
user.addToStock(2)
user.calculateDiscount(50)

console.log(user)