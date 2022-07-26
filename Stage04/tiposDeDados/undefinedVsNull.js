// undefined: o valor de uma variável não está definido, porém, a variável existe!
let a;
console.log(typeof(a))

// null: é um valor vazio, induzido pelo programador, exemplo no código abaixo, onde uma pessoa não queira informar o seu sexo:
let pessoa = {
    nome: "João",
    idade: 27,
    sexo: null
}
console.log(pessoa.sexo);
console.log(typeof(pessoa.sexo))