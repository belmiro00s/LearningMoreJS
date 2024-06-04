class Config{
    constructor(){
        this.maxUsers = 100
    }
}




//Todas as instancias a serem criadas irao compartilhar do mesmo valor, ao utilizar o static no atributo max users 
const newInstance = new Config()
const newInstance_1 = new Config()


console.log(newInstance.maxUsers) //100

class Configs{
    static maxUsers = 100
}

const newInstances = new Configs.maxUsers()
const newInstance_s1 = new Configs.maxUsers()

console.log(Configs.maxUsers)

Configs.maxUsers = 200

console.log(Configs.maxUsers)//200 todos os usuarios que recebem 
