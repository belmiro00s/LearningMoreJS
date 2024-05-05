class Author {
    constructor(authName){
        this.authName = authName
        this.posts  = []
    }

    createPosts(textToinsert){
        this.posts.push(textToinsert)
        return this.posts
    }
}

module.exports = Author
