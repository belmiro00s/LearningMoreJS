import Account from "./Account.js"

class User  {
    constructor(name, email){
        this.name = name 
        this.email = email
        this.account = new Account(email)
    }
}


export default User