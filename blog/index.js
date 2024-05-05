const Post = require('./post/index')
const Comment = require('./comment/index')
const Author = require('./author/index')



const author = new Author('Guilherme Belmiro')
const comments = new Comment("Realmente o dia estava lindo")
const namePost = 'Dilma'

author.createPosts(namePost)
comments.commentIntoPost(comments)


const newPost = new Post(author, author.posts, comments.comments )

console.log(newPost)
