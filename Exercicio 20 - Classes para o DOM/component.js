class Component {
    #element = null
    constructor(tag, parent, options) {
        this.tag = tag
        this.parent = parent
        this.options = options
        this.buildElement()
    }

    getElement() {
        return this.#element
    }

    buildElement() {
        this.#element = document.createElement(this.tag)
    }

    render() {
        if (this.parent instanceof Component){
            this.parent.getElement().append(this.#element)
        }else{
            document.querySelector(this.parent).append(this.#element)
        }
    }

}






class Forms extends Component {

    appendElement(target){
        target.append(this.accesToElement())
    }
}


