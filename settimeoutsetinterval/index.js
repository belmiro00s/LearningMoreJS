console.log('programa iniciado!')

//storing the timeoutID to clear after 
const timeoutId = setTimeout(() => {
    console.log('2 seconds have passed since the program started ')// will appear after 2 seconds
}, 2 * 1000) // set 2 seconds of timeout 


clearTimeout(timeoutId)//this basically canncel the timeout 

//work as a loop 
let seconds = 0
const intervalId = setInterval(() => {
    seconds += 1
    console.log(`Se passaram ${seconds} seconds`)
    if (seconds > 10) {
        clearInterval(intervalId)
        console.log(`TIME OUT!`)
    }
}, 1000)

