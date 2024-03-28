//funcao anonima para media aritimetica
const arithmetic = (...numbers) => numbers.reduce((acumm, num) => acumm + num / numbers.length, 0)


console.log(arithmeticWeighted({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }))

console.log(`The sum is: ${arithmetic(2, 6, 3, 7, 4)}`)

