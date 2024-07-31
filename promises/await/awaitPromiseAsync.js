async function split(a, b) {
    if (typeof a !== 'number' || typeof b !== "number") {
        Promise.reject(new Error('arguments mus be of type number'))
    }
    return a / b
}

async function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        Promise.reject(new Error('arguments mus be of type number'))
    }
    return a * b
}


const value1 = (split(4, 2))
const value2 = (multiply(5, null))

try {
    const results = await Promise.all([value1, value2])
    console.log(results)
} catch (err) {
    console.log(`ERROR: ${err}`)
}





