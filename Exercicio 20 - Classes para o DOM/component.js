class Component {
    #element
    constructor(element) {
        this.#element = element
    }

    accesToElement() {
        return this.#element
    }

    buildElement() {
        this.#element = document.createElement('div')
    }

    render(target) {
        target.appendChild(this.#element)
    }

}

class Inputs extends Component {}


class Labels extends Component {
    constructor(textContent){
        this.textContent = textContent
    }
}


class Forms extends Component {

    appendElement(target){
        target.append(this.accesToElement())
    }
}


