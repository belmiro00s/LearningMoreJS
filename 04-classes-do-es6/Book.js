class Book {
    //metodo especial em js, que é chamado 
    //quando criamos uma nova instancia dessa classe.
    //Usado para inicializar os objetos criados a partir da classe.
    constructor(name, cpf){ 

        this.name = name
        this.cpf = cpf
        this.published = false // definindo que o obj publicado sempre é falso
    }

    publish(){ // metodo que publica o obj
        this.published = true 
    }
}

const client1 = new Book("Gustavo", "120003232") // criando o obj apartir da classe criada 
const client2 = new Book("Carlos", "747483233")

client1.publish() // publicando os obj
client2.publish()

console.log(client1)
console.log(client2)

