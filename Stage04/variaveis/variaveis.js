var clima = "Quente"
let nome = "João"
const anoDeNascimento = 1994

console.log(`
Nome: ${nome}, 
Clima: ${clima}, 
Ano de nascimento: ${anoDeNascimento}
`)

// Escopo

// Block statement
{ 
    // aqui vai o código js
}

// var
// var é global e poderá funcionar fora de um escopo de bloco
// hoisting, o js joga as variáveis var para o início do código sem valor
console.log('> Exsite X antes do bloco?', x)

{ 
    var x = 0
}

console.log('> Existe X depois do bloco?', x)

// let e const
// são locais e só funcionam no escopo onde foram criadas
console.log('> Exsite Y antes do bloco?', y)

{ 
    let y = 0
}

console.log('> Existe Y depois do bloco?', y)
