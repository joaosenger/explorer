// é uma cadeia de caracteres


/*
É escrito entre:
'' aspas simples
"" aspas duplas
`` template literals ou template strings
*/

let nome = "João Antonio";
let sobrenome = 'Pezzodipane Senger';
let dadosPessoais = 
`
João Senger
27 anos
Aluno da RocketSeat!
`
console.log(nome);
console.log(sobrenome);
console.log(dadosPessoais);

// interpolação: expressões dentro de template strings
console.log(`1 + 1 = ${1 + 1} `)