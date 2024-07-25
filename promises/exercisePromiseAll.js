function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('the value entered must to be a number'))
        } else {
            resolve(a + b)
        }
    })
}


function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('the value entered must to be a number'))
        } else {
            resolve(a - b)
        }
    })

}


const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 30)
const subtractResult2 = asyncSubtract(50, null)



Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log('The promises has been finished')
})