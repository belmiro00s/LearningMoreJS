async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== "number") {
        Promise.reject(new Error('arguments mus be of type number'))
    }
    return a + b
}

//using .then
// async function execute(){
//     asyncSum(50, 20).then((result)=>{
//         console.log(result)
//     })
// }

//more readable and simple
//use await in scenarios where you really need it
async function execute1() {
    const result = await asyncSum(50, 20)  //using await to return of the result of the async function
    console.log(result)
}

execute1()

//erro cases using try and catch within await

async function execute2() {
    try {
        const result = await asyncSum(50, null)  //using await to return of the result of the async function
        console.log(result)
    } catch (err) { //using catch to return any error from function
        console.log(err)
    }
}

execute2()