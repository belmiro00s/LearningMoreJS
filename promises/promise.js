//most used exemple


function execute() {
    return new Promise((resolve, reject) => {
        console.log('Executing the promise...')
        setTimeout(() => { // simulating an promise that it might take a while to return anything
            console.log('Finishing the promise...')
            resolve('Result')
        }, 1000)//will return after 1 second
    })
}


const p = execute()

console.log(p) //won't return the promise, because there is no timer configured 

setTimeout(() => {
    console.log(p) //will return because wait until 2 seconds that is more longer. 
}, 2000)



//using .then 
p.then((result) => {
    console.log(`the promise has been solved,  the result is:  ${result}`)
})




function falseExecute(a, b) {
    return new Promise((resolve, reject) => {
        console.log('Starting the promise')
        setTimeout(() => {
            if (a + b === 2) {
                reject('1+1 is does not equal 2')
            } else {
                console.log('Finishing the promise')
                resolve('right asshole')
            }
        }, 3 * 1000)
    })
}

const pi = falseExecute(1, 1)

pi.then((result) => {
    console.log(`the promise has been solved, the result is ${result}`)
}).catch((err) => {
    console.log(`the promise was rejected! Reason: ${err}`)
}).finally(()=>{
    console.log(`the promised has been completed`)
})
