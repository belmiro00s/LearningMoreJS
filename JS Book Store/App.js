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
    addBook(bookName, quantity) {
        App.#database.addBooksToStock(bookName, quantity)
    }
    getBook() {
        return App.#database.find('books')
    }
    createPoster(poster) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }
    addPoster() {
        App.#database.addPostersToStock(posterName, quantity)
    }
    getPoster() {
        return App.#database.find('posters')
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, quantity)
            }else if (product instanceof Poster){
                App.#database.removePostersFromStock(product.name, quantity)
            }
        })
    }

    getOrders(){
        return App.#database.find('orders')
    }
    showDataBase(){
        App.#database.showStorage()
    }
}
