import { Form } from "../Exercicio 20 - Classes para o DOM/form.js";
import { Labels } from "../Exercicio 20 - Classes para o DOM/labels.js";
import { Input } from "../Exercicio 20 - Classes para o DOM/inputs.js"
import { Component } from "../Exercicio 20 - Classes para o DOM/component.js";

const title = new Component('h1', 'body', {innerText: "Ola Mundo!"}) 

console.log(title)


title.tag = 'h1'
title.buildElement().render() //creating title and render 


const form = new Form('body')

const label = new Labels('Nome', form, {htmlFor:'nameInput'})
const input = new Input(form, {id: 'nameInput', name: 'birthday'})

form.render() 

label.render()
form.addchildren(input) // attaching input element to form, using method addchildren

form.addchildren(
    new Component('br'),
    new Component('br'),
    new Labels('Data de Nascimento', {htmlFor: 'birthdayInput'}),
    new Input(form, {id: 'birthdayInput', name: 'birthday', type: 'date'})
)

console.log(form)

