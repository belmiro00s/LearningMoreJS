import User from './User.js'
import Account from './Account.js'


class App {
    static users = []


    static createUser(name, email) {
        if (this.users.find(user => user.email === email)) {
            throw new Error('This Email is already in use')
        }
        const newUser = new User(name, email)
        this.users.push(newUser)
        return newUser
    }

    static findUser(email) {
        const user = this.users.find(user => user.email === email)
        if (!user) {
            throw new Error('User not found')
        }
        console.log(JSON.stringify(user, null, 2))
    }

    static findAllUsers() {
        return this.users
    }

    static listAllUsers() {
        const allUsers = this.findAllUsers()

        if (allUsers === 0) {
            throw new Error('No users registrations')
        } else {
            console.log('List of all Users:')
            allUsers.forEach((user, index) => {
                const balance = user.account.getBalance()
                console.log(`${index + 1}. ${user.name} (${user.email}) - Balance: ${balance}`)
            })
        }
    }

    static deposits(receiverEmail, amount) {
        const user = (this.users.find(user => user.email === receiverEmail))
        if (!user) {
            throw new Error('account not found')
        }
        if (user && user.account instanceof Account) {
            user.account.deposit(amount)
        }
    }

    static loans(receiverEmail, amount) {
        const user = (this.users.find(user => user.email === receiverEmail))
        if (!user) {
            throw new Error('The loan could not be completed')
        }
        if (user && user.account instanceof Account) {
            user.account.takeLoan(amount)
            console.log(user.account.getBalance())
        }
    }
    //check this method 
    static transfer(sendindEmail, receiverEmail, amount) {
        const receiverUser = (this.users.find(user => user.email === receiverEmail))
        const sendingUser = (this.users.find(user => user.email === sendindEmail))

        if (!sendingUser || !receiverUser) {
            throw new Error('The transfer could not be completed')
        }
        if (!(sendingUser.account instanceof Account) || !(receiverUser.account instanceof Account)) {
            throw new Error('The transfer could not be completed: Invalid account')
        }
        sendingUser.account.makeTransfer(sendingUser.account, receiverUser.account, amount)
    }
}




const user1 = App.createUser('Belmiro', 'lops@aros.com')
//const user2 = App.createUser('Belmiro', 'lops@aros.com')
const user2 = App.createUser('Poatam', 'ps@aros.com')


App.deposits('lops@aros.com', 500)
App.deposits('ps@aros.com', 500)
App.loans('lops@aros.com', 530)
App.transfer('lops@aros.com', 'ps@aros.com', 400)


App.listAllUsers()

