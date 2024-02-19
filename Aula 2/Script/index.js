var teste = "teste" // É uma variável global que pode ser alterada e não é tão segura

console.log(teste)

// Tipos de dados JS
let texto = 'texto' 
let inteiro = 24
let real = 1.00
let logico = true
// Let é uma variável mais segura e escopada

const sobrenome = "Sobrenome"

console.log(texto)
console.log(sobrenome)

texto = "Nome"
// Constante não pode ser alterado sobrenome = "Texto"

// Concatenação

let textoA = "Lucas"
let textoB = "Ferretti"
let idadeX = 24

let nomeCompleto = textoA + textoB

console.log(nomeCompleto)

let nomeCompleto2 = `${textoA} ${textoB}` // Concatenar usando crase

console.log(nomeCompleto2)
