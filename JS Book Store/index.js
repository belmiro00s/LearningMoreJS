import App from './App.js';

const app = new App()


//creating the authors
app.createAuthor('Belma', 'brazilian', 'nothing')
app.createAuthor('Frederico', 'brazilian', 'nothing')

//storing the authors
const authors = app.getAuthors()

//creating the books
app.createBook('Lord of rings', '...', 'fantasy', '400', authors[0], '...', 19.90, 100)
app.createBook('The Hobbit', '...', 'fantasy', '240', authors[1], '...', 19.90, 100)
app.createBook('Alices Adventures in Wonderland', '...', 'fantasy', '300', authors[0], '...', 10.90, 100)

//storing the books
const books = app.getBooks()

//creating a new user
app.createUser('Belmiro', 'belma@me.com', 123)

//returning the users
const users = app.getUsers()


//defining an array of objects to save a new order
const items = [
    {
        product: books[0],
        quantity: 99
    },
    {
        product: books[1],
        quantity: 1
    },
    {
        product: books[2],
        quantity: 1
    }
]

//creating the order
app.createOrder(items, users[0])

//returnig the storage
app.showDataBase()

