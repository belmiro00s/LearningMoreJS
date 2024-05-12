import {Component} from "./component.js"


export class Labels extends Component{
    constructor(parent, options, text){
        // using the parent constructor to inherit the properties and behavior of Property Class. 
        //Object.assign to merge multiple objects into a single object.
        super('label', parent, Object.assign({},options, {textContent: text}))
    }
}