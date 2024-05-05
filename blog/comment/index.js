class Comment{
    constructor(){
        this.comments  = []
    }
    commentIntoPost(commentToInsert){
        this.comments.push(commentToInsert)
    }
}

module.exports = Comment
