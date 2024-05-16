export class Component {
    #element = null // private element 
    constructor(tag, parent, options) {
        this.tag = tag // to indentify the element
        this.parent = parent // parent element
        this.options = options
        this.buildElement() 
    }

    getElement() {
        return this.#element // method that acess the private element 
    }

    buildElement() {
        this.#element = document.createElement(this.tag) //method to create the element
        Object.assign(this.#element, this.options) //copy the options properties to the private #element 
        return this
    }

    render() {
        if (this.parent instanceof Component){ // check if parent element belongs to class Component
            this.parent.getElement().append(this.#element) // attaching this.#element to parent element
        }else{
            document.querySelector(this.parent).append(this.#element)
        }
    }

}

