const Database = require("./DataBase")
const Author = require("./Author")
const Book = require("./Book")
const Order = require("./Order")
const Poster = require("./Poster")
const User = require("./User")

module.exports = class App {
    static #database = new Database()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users') // acessando o atributo users (privado) da classe DataBase
    }

    createAuthor(name, email, password) {
        const author = new User(name, email, password)
        App.#database.saveAuthor(author)
    }

    createBook(book) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }
}
