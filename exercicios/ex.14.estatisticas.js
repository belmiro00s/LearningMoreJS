//funcao anonima para media aritimetica
const arithmetic = (...numbers) => numbers.reduce((acumm, num) => acumm + num / numbers.length, 0)
console.log(`The sum is: ${arithmetic(2, 6, 3, 7, 4)}`) //output: 4.4







// Funcao anonima para media aritimetica ponderada 
const arithmeticWeighted = (...number) => {
    const sumProducts = number.reduce((acumm, { n, p }) => acumm + (n * p), 0) // Reduzindo o numero de param para 2, abrindo funcao para realizar a soma aritimetica ponderada
    const sumWeight = number.reduce((acumm, { p }) => acumm + p, 0)
    return sumProducts / sumWeight
}

console.log(`The sum is: ${arithmeticWeighted({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 })}`) // output: 7.75


const average = (...numbers) => {
    const sumProducts = numbers.reduce((acumm, num) => acumm + num, 0)
    return sumProducts / numbers.length
}
console.log(`The media is: ${average(2, 4, 5, 7, 42, 99)}`)



//funcao mediana

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b) //the comparison function (a, b) => a - b ensures that the numbers are sorted in ascending order.
    const middle = Math.floor(orderedNumbers.length / 2)// This line calculates the index of the middle element of the sorted array. It divides the length of the array by 2 and rounds down using Math.floor() to ensure that it's an integer.
    if (orderedNumbers.length % 2 !== 0) { //  check if the length of the sorted array is odd or even
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1] // middle - 1 points to the element just before the middle in the sorted array.
    const secondMedian = orderedNumbers[middle] // middle points to the element just the middle in the sorted array 
    return average(firstMedian, secondMedian) // return the average of two middle elements 
}
console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)




const mode = (...numbers) => {
    const quantities = numbers.map(num => [ //usando o método map(), que itera sobre cada elemento do array numbers e retorna um novo array contendo pares de números e suas respectivas contagens.
        num,
        numbers.filter(n => num === n).length //Para cada número num em numbers, um par é criado no formato [num, numbers.filter(n => num === n).length]. Isso significa que para cada número, estamos contando quantas vezes ele aparece no array numbers usando o método filter().
    ])
    quantities.sort((a,b) => b[1] - a[1]) // Utilizando o sort para reordenar em ordem decrescente e calculando 
    //a diferença entre a segunda entrada ([1]) do elemento b e a segunda entrada do elemento a. Se o resultado for negativo, 
    //significa que b tem uma contagem maior e deve ser colocado antes de a, resultando em uma ordem decrescente. 
    //Se for positivo, a deve vir antes de b, resultando em uma ordem crescente.
    return quantities[0][0]
}   

console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)