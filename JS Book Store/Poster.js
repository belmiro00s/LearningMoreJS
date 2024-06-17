import Product from './Product.js';

class Poster extends Product {
    constructor(name, description, height, width, price, inStock){
        super(name, description, price, inStock)
        this.height = height,
        this.width = width
    }
}

export default Poster