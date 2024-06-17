import Database from './DataBase.js';
import Author from './Author.js';
import Book from './Book.js';
import Order from './Order.js';
import Poster from './Poster.js';
import User from './User.js';

class App {
    static #database = new Database()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users') // acessando o atributo users (privado) da classe DataBase
    }

    createAuthor(name, natinality, bio) {
        const author = new Author(name, natinality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }
    addBook(bookName, quantity) {
        App.#database.addBooksToStock(bookName, quantity)
    }
    getBooks() {
        return App.#database.find('books')
    }

    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }
    addPoster(posterName, quantity) {
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
            } else if (product instanceof Poster) {
                App.#database.removePostersFromStock(product.name, quantity)
            }
        })
    }

    getOrders() {
        return App.#database.find('orders') //return all orders of db 
    }
    showDataBase() {
        App.#database.showStorage()
    }
}

export default App
