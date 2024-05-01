class User {

    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {

        if (email === this.email && password === this.password) {
            console.log('Login sucessfuly')
        } else {
            console.log('Acess denied')
        }
    }
}


const user = new User("Guilherme Belmiro", "furei@ar.com", 123)

console.log(user.login("furei@ar.com", 123))