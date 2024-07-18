function step02(){
    console.log('Passo 2')
}


//demonstration synchronous code
console.log('step01')
step02()
console.log('Passo03')



//demonstration asynchrounous code
console.log('step04')
setTimeout(() => {
    console.log('step05')
}, 2 * 1000);

console.log('Passo06')


