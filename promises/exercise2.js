function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('Age is required'))
        }
    })
}


function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error("birthday is required"))
        }
    })
}

const date = ['2007-09-02', '2002-09-02']
date.forEach((dt) => {
    getAge(dt).then((age) => {
        checkAge(age).then((isOver18) => {
            if (isOver18) {
                console.log(`${age} is Adult`)
            } else {
                console.log(`${age} is Not adult`)
            }
        }).catch((err) => {
            console.log(err.message)
        })
    }).catch((err) => {
        console.log(err.message)
    })
})



