class Transfer {
    constructor(sendingUser, recevingUser, value) {
        this.sendingUser = sendingUser
        this.recevingUser = recevingUser
        this.value = value
        this.createDate = new Date()
    }
}


export default Transfer