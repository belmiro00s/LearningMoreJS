const Author = require('./author/index')
const Jhon = new Author("Jhon doe")

const post = Jhon.createPosts("TURN OF THE LIGHTS", "The most important thing to sleep better.")


post.commentIntoPost("Belmiro00s", "That is true, keep on")

console.log(Jhon)
console.log(post)

