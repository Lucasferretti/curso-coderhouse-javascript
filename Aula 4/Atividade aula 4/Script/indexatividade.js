function calculoIMC(){
    const peso = parseInt(prompt('Informe o seu peso: '))
    const altura = prompt('Informe a sua altura (Exemplo 1.70): ')
    const calculo = (peso / (altura * altura))

    if(calculo <= 18.5){
        alert("A classificação do seu IMC é: Magreza")
        console.log(calculo)
    } else if(calculo >= 18.5 && calculo <= 24.9){
        alert("A classificação do seu IMC é: Normal")
        console.log(calculo)
    }else if(calculo >= 25.0 && calculo <= 29.9){
        alert("A classificação do seu IMC é: Sobrepeso")
        console.log(calculo)
    }else if(calculo >= 30.0 && calculo <= 39.9){
        alert("A classificação do seu IMC é: Obesidade")
        console.log(calculo)
    }else if(calculo >= 40){
        alert("A classificação do seu IMC é: Obesidade grave")
        console.log(calculo)
    }else {
    alert("Você digitou um número invalido.")
    console.log(calculo)
    }
}

calculoIMC()