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
        console.log(`User Found: ${JSON.stringify(user, null, 2)}`)
    }
    
    static deposit({})
}


const user1 = App.createUser('Belmiro', 'lops@aros.com')
//const user2 = App.createUser('Belmiro', 'lops@aros.com')
const user2 = App.createUser('posl', 'ps@aros.com')

App.findUser('lops@aros.com')

