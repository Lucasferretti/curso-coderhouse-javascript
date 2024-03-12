
const calculoICM = (preco) =>{
    const icms = 0.20
    let resultado = (preco * icms)
    return resultado
}

const precoInserido = () =>{
    const preco =parseFloat(prompt('Informe o preço do produto que você quer comprar: '))
    const calculo = calculoICM(preco)
    let informativo = `O preço do seu produto é R$: ${preco} e o ICMS pago sobre ele é de R$: ${calculo}`
    return informativo
}

const precoFinal = () =>{
    const total = precoInserido()
    alert(total)
}

precoFinal()