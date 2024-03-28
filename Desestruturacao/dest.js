const person = {
    name:"Lucas",
    job: "QA",
    parents: ["Anakin", "Padme"]

}

// como eu pegaria apenas o nome e o trabalho

const {name, job} = person 

const [father, mother ] = person.parents

// Aqui o js entende que eu quero pegar o objeto person e desustruturar a pop parents

console.log(job, name, father, mother)

    