//creating a assynchronous function
function imcSum(weight, height) {
    return new Promise((resolve, reject) => {
        console.log('Executing the promise')
        setTimeout(() => {
            if (isNaN(weight) || isNaN(height)) {
                reject(`The number entered must to be two numbers`)
            }
            const calculedImc = weight / (height * height)
            resolve(parseFloat(calculedImc.toFixed(2)))
        }, 2000)
    })
}



function idealWeightCheck(weight, height) {
    imcSum(weight, height).then((result) => {
        console.log(result)
        if (result < 18.5) {
            console.log('skinny')
        } else if (result >= 18.5 && result < 24.9) {
            console.log('regular')
        } else if (result >= 25 && result < 29) {
            console.log('overweight')
        }
        else if (result >= 30 && result < 39.9) {
            console.log('obesiy')
        }
        else {
            console.log('several obesity')
        }
    }).catch((err) => {
        console.log(`the promise was rejected! Reason: ${err}`)
    }).finally(() => {
        console.log(`the promise has been completed`)
    })
}

const tears = idealWeightCheck(96, 1.75)

setTimeout(() => {
    console.log(tears)
}, 2000);
