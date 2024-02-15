const nome = prompt('Insira seu primeiro nome: ')
const sobrenome = prompt('Insira seu sobrenome: ')
let idade = prompt('Insira sua idade: ')

const ano_atual = 2024
const ano_nascimento = ano_atual - parseInt(idade)

alert(`Olá ${nome} ${sobrenome}, seja bem-vindo! Você nasceu no ano de ${ano_nascimento}`);
console.log(`Olá ${nome} ${sobrenome}, seja bem-vindo! Você nasceu no ano de ${ano_nascimento}`);