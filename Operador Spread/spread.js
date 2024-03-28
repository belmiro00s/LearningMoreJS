const array = ["Guilherme Belmiro", "da"]

const array2 = [" Silva Araujo"]


console.log(array) // aqui eu retorno o array como um todo



console.log(...array) // aqui com o operador sread, ira imprimir separadamente cada elemento do array.
console.log(...array,...array2) // aqui usando o operador spread pra concatenar o array no array2 


const copyArr = [...array2] // Copiando um array usando spread para retornar como um unico objeto.

console.log(...copyArr) 