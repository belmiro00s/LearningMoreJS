const Address = require('./adress/index')
const Person = require('./person/index')



const addr = new Address('7 de Setembro', 92, 'Centro', 'São Fidélis', 'RJ') //allocating logically values inside of property of constructor 
const john = new Person('John Doe', addr) 

console.log(john)
console.log(john.address.fullAddress()) //acessing the property and call fullAdress function to organize.