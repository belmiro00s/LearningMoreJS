class Account {
    #password // private objects / cannot be changed
    #balance = 0 // private objects / cannot be changed
    constructor(user) {
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password) {
        if (this.#authenticate(email, password)) { // calling private method #authenticate inside getbalance method which allows you to use them both outside 
            return this.#balance // return private value
        } else {
            return null
        }
    }

    #authenticate(email, password) { // defining private method
        return this.email === email && this.#password === password
    }
}


const user = {
    email: "isaac@ard.com",
    password: 123
}



const newAccount = new Account(user) // store this value inside of obj email and password

//console.log(newAccount.#password) // ERROR --> because #password is private attribute 
//console.log(newAccount.#balance) // ERROR --> because #balance is private attribute 
//console.log(newAccount.#authenticate()) // ERROR --> because the method #authenticate is private method 

console.log(newAccount.getBalance("isaac@ard.com", 123)) // SUCESS calling method that check if password and email are equal to the stored obj 