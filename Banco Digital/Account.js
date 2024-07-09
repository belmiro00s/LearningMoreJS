
import Transfer from './Transfer.js';

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
        console.log(`The Deposit of ${amount} was succesfully completed`)
    }

    takeLoan(amount) {
        if (amount <= 0) {
            throw new Error("The amount entered must to be positive ")
        }
        this.#balance += amount
        this.loans.push({ amount, date: new Date() })
        console.log(`The Loan of ${amount} was succesfully completed`)
    }

    //method for those receiveing the transfers
    makeTransfer(sendingUser, receivingUser, amount) {
        if (amount <= 0) {
            throw new Error("the amount entered must to be positive")
        }
        if (sendingUser === this.owner) { //send to self 
            const transfer = new Transfer(sendingUser, receivingUser, amount)
            this.transfers.push(transfer)
            this.#balance += amount
        } else { //send to another account
            if (amount > this.#balance) {
                throw new Error("Insufficient balance for transfer")
            }
        }
        if (!(receivingUser instanceof Account)) {
            throw new Error("receivingUser must be an instance of Account");
        }
        receivingUser.receiveTransfer(amount, this.owner)
        const transfer = new Transfer(this.owner, receivingUser.owner, amount)
        this.transfers.push(transfer)
        this.#balance -= amount
    }

    //method for those receiveing the transfers
    receiveTransfer(amount, fromAccount) {
        this.#balance += amount
        const transfer = new Transfer(this.owner, fromAccount, amount)
        this.transfers.push(transfer)
    }
}

const account = new Account("Alice")
const account2 = new Account("Roberto")


account.deposit(500)

console.log(`Balance ${account.owner} account: ${account.getBalance()}`)



account.makeTransfer(account.owner, account, 30) //Cenario onde o proprio dono da conta faz uma transferencia pra ele mesmo
account.makeTransfer(account.owner, account2, 30) //Cenario onde o  dono da conta faz uma transferencia pra outra conta

console.log(`Balance ${account.owner} account: ${account.getBalance()}`)
console.log(`Balance ${account2.owner} account: ${account2.getBalance()}`)
console.log(`Balance ${account.owner} account: ${account.getBalance()}`)


export default App

