function calculoIMC(){
    const peso = parseInt(prompt('Informe o seu peso: '))
    const altura = parseFloat(prompt('Informe a sua altura (Exemplo 1,70): '))
    const calculo = (peso / (altura * altura))

    if(calculo <= 16){
        alert("A classificação do seu IMC é: Magreza grave")
    } else if(calculo >= 16 && calculo <= 16,9){
        alert("A classificação do seu IMC é: Magreza moderada")
    }else if(calculo >= 17 && calculo <= 18,4){
        alert("A classificação do seu IMC é: Magreza leve")
    }else if(calculo >= 25 && calculo <= 29,9){
        alert("A classificação do seu IMC é: Sobrepeso")
    }else if(calculo >= 30 && calculo <= 34,9){
        alert("A classificação do seu IMC é: Obesidade grau 1")
    }else if(calculo >= 35 && calculo <= 39,9){
        alert("A classificação do seu IMC é: Obesidade severa")
    }else if(calculo >= 40){
        alert("A classificação do seu IMC é: Obesidade mórbida")
    }else {
    alert("Você digitou um número invalido.")
    }
}