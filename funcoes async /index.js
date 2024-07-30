//more readable and convinient that promise to work 
async function asyncSum(a, b) {
    return a + b
}

asyncSum(1, 1).then((result) => {
    console.log(`The result is ${result}`)
})




const numbers = [4, 9, 5, 13, 17]

async function asynSquare(x){
    return x * x
}
//is possible to use asyn with promise.all:
Promise.all(numbers.map(number => asynSquare(number))).then(squares =>{
    console.log(squares)
})

