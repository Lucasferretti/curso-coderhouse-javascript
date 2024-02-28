var saborBala = "Morango"

function abreBala() {
    console.log("Abrir bala")
}

if (saborBala === "Morango") {
    console.log("O Sabor da bala é morango, jogar fora.")

} else {
    abreBala()
}


let number = parseInt(prompt("Digite um número de 1 a 5: "))

if (number === 1) {
    console.log('O número digitado é "Um"')

} else if(number === 2){
    alert('O número digitado é "Dois"')
} else if(number === 3){
    alert('O número digitado é "Três"')
} else if(number === 4){
    alert('O número digitado é "Quatro"')
} else if(number === 5){
    alert('O número digitado é "Cinco"')
} else {
    alert("Você digitou um número invalido.")
}

const number2 = parseInt(prompt("Digite um número de 1 a 100: "))

if (number2 <= 10) {
    console.log('O número digitado está entre 1 a 10')
} else if(number2 >= 10 && number2 <= 20){
    alert('O número digitado está entre 10 a 20')
} else if(number2 >= 20 && number2 <= 30){
    alert('O número digitado está entre 20 a 30')
} else if(number2 >= 30 && number2 <= 40){
    alert('O número digitado está entre 30 a 40')
} else if(number2 >= 40 && number2 <= 50){
    alert('O número digitado está entre 40 a 50')
} else {
    alert("Você digitou um número invalido.")
}
