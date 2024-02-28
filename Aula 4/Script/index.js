
/* function parOuImpar(){

    const num = parseInt(prompt("Digite um número: "))
    
    if (num % 2 === 0){
        alert("Este número é par!")
    } else {
        alert("Esse número é impar!")
    }
}

parOuImpar()
parOuImpar()
parOuImpar()
parOuImpar() */

/* function subtracoes(){
    const num1 = parseInt(prompt("Digite um número: "))
    const num2 = parseInt(prompt("Digite outro número: "))
    let resultado = 0

    if(num1 >= num2){
        resultado = num1 - num2
    } else{
        resultado = num2 - num1
    }
    return console.log(resultado)
}

subtracoes()
subtracoes()
subtracoes() */

const multi = (num1, num2) => { return num1 * num2}
const divi = (num1, num2) => { return num1 / num2}
const soma = (num1, num2) => { return num1 + num2}
const sub = (num1, num2) => { return num1 - num2}

function calculadora() {
    const num1 = parseInt(prompt('Informe o primeiro valor: '))
    const num2 = parseInt(prompt('Informe o segundo numero: '))
    const operador = prompt('Informe o tipo: * , + , - , /')

    if (operador === '*') {
        multi(num1, num2)
    } else if (operador === '+') {
        soma(num1, num2)
    } else if (operador === '-') {
        sub(num1, num2)
    } else if (operador === '/') {
        divi(num1, num2)
    }
}

calculadora()
calculadora()
calculadora()