
const Comment = require ("../comment/index.js")

class Post{
    constructor(title, body, author ){
        this.title = title
        this.author = author 
        this.comments = []
        this.createAt = new Date()
    }
    
    commentIntoPost(username, content){
        this.comments.push(new Comment(username, content))
    }
}



module.exports = Post