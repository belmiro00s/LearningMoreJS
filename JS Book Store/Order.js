const Product = require("./Product");

module.exports = class Order {
    #total
    #items
    #user

    constructor(items, user) {
        items.forEach(product, quantity => {
            if (quantity > product.inStock) {
                throw new Error('insufficient quantity on stock')
            }
            this.#items = items
            this.#user = user      // funcao reduce iterando sobre os parametros e reduzindo para o parametro sum
            this.#total = items.reduce((sum, {product, quantity}) => sum + (product.price * quantity), 0) 
        });
    }

    get data(){
       return{
        items: this.#items,
        user: this.#user,
        total: this.#total
       }         
    }
}