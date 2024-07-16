function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('argument must be two numbers')
    }

    return firstNumber + secondNumber
}

try {// try to run code below
    console.log(sum(2, 9))
    console.log(sum('dsdsdsds', 19)) //must print error
} catch (e) { //catch the error
    console.log("An error ocurred")
    console.log(e.message)
} finally { //finishing the code 
    console.log('calculations finished')
}

