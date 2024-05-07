const Post = require("../post")

class Author {
    constructor(authName){
        this.authName = authName
        this.posts  = []
    }

    createPosts(title, body){
        const post = new Post(title, body, this)
        this.posts.push(post)
        return post 
    }
}

module.exports = Author
