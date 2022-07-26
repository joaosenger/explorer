/*
Objeto
Propriedades / Atributos
Funcionalidades / Métodos

{ propriedade: valor}

*/

let pessoa = ({
    name: "Joao",
    peso: 70,
    idade: 27,
    // agora uma funconalidade, envelhecer
    envelhecer: function() { pessoa.idade = pessoa.idade + 1}
})

console.log(pessoa) // Aqui a pessoa tem 27 anos

pessoa.envelhecer(); // Como a funcionalidade é envelhecer, aqui ela envelheceu mais um ano
console.log(pessoa.idade);