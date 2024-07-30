async function asyncSum(a, b) {
    if(typeof a !== 'number'|| typeof b !=="number"){
        Promise.reject(new Error('arguments mus be of type number'))
    }
    return a + b
}

asyncSum(null, 1)