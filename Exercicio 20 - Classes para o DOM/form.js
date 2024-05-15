import {Component} from './component.js'


export class Form extends Component {
    constructor(parent, options){
        super('form', parent, options)
    }

    addchildren(...children){
        children.forEach(child => {
            this.getElement().appendChild(child.getElement()) // for each children element, it will be attached to the parent element
        })
    }
}