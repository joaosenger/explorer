// variáveis e tipos de dados
var people;

// assignment or atribuição de valores
people = "João"

// que tipo de dado foi colocado na variável
console.log(typeof people)

// agrupamento de declarações
let age, isHuman

age = 27
isHuman = true

// apenas para aprecer sim ou não ao inves de true
if (isHuman == true) {
    isHuman = "Sim"
}
else {
    isHuman = "Não"
}

console.log(`
Nome: ${people}
Idade: ${age}
É humano? ${isHuman}
`)

// Object

const person = {
    name: 'Joao',
    age: 27,
    weight: 82.5,
    isAdmin: true,
    getOld: function getOld() { return person.age = person.age + 1}
}

console.log(`
Nome: ${person.name}
Idade: ${person.age}
Peso: ${person.weight}
É admin? ${person.isAdmin}
`)
/* Objetos tem propriedades:atributos e funcionalidades:metodos, aqui adicionamos um ano à pessoa */
person.getOld();
console.log(`Idade no próximo ano: ${person.age}`)


// Array
const animals = [
    'Lion',
    'Monkey',
    'Pig',
    'Wolf',
    'Cat'
]

// acessar valores dentro do array
console.log(animals)
console.log(animals.length) // tamanho do array
console.log(animals[0])
console.log(animals[2])

// objeto dentro do array, não e uma boa prática! o idela é guardar um único tipo de dado

const peoples = [
    'Joao',
    { // segundo item do array é um objeto
        name: 'Maria',
        age: 60,
        weight: 86.2
    }
]

console.log(`
${peoples[0]} 
${peoples[1].name}, tem ${peoples[1].age} anos}
`)