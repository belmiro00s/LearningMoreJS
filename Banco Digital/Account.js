class Account {
    #balance // saldo privado
    constructor(owner) {
        this.owner = owner
        this.#balance = 0
        this.loans = []
        this.deposits = []
        this.transfers = []
    }

    getBalance() {
        return this.#balance
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("the amount entered must to be positive ")
        }
        this.#balance += amount
        this.deposits.push({ amount, date: new Date() })
    }

    takeLoan(amount) {
        if (amount <= 0) {
            throw new Error("The amount entered must to be positive ")
        }
        this.#balance += amount
        this.loans.push({ amount, date: new Date() })
    }
}