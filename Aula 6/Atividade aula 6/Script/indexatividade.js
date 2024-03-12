
const calculoICM = (preco) =>{
    const icms = 0.20
    let resultado = (preco * icms)
    return resultado
}

const precoInserido = () =>{
    const preco =parseFloat(prompt('Informe o preço do produto que você quer comprar: '))
    const calculo = calculoICM(preco)
    console.log(`O preço do seu produto é R$: ${preco} e o ICMS pago sobre ele é de R$: ${calculo}`)
    return preco
}

const parcelas = (preco, parcelas) =>{
    for (var i = 1; i <= parcelas; i++){
        let precoParcela = preco / parcelas
        let totalRestante = preco - (precoParcela * i) 
        console.log(`Parcela ${i}: R$:${precoParcela} Valor total: R$:${preco} Valor restante: R$:${totalRestante}`)
    }

}

const precoFinal = () =>{
    const preco = precoInserido()
    const vaiParcelar = prompt('Deseja parcelar? (Digite Sim ou Não): ')
    
    if(vaiParcelar == "Sim"){
        const vaiParcelar = parseInt(prompt('Em quantas vezes você quer parcelar o produto?: '))
        parcelas(preco, vaiParcelar)
        console.log("Obrigado!")
    } else{
        console.log("Obrigado!")
    }
}

precoFinal()

