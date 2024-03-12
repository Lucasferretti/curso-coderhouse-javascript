console.log("Bem vindo a nossa Livraria!\n\n")

let livro = [
{
    "numero": 1,
    "nome": "Harry Potter",
    "categoria": "Fantasia",
    "preco": 200,
},
{
    "numero": 2,
    "nome": "Geração de valor",
    "categoria": "Finanças",
    "preco": 100,
},
{
    "numero": 3,
    "nome": "Receitas de comidas",
    "categoria": "Culinária",
    "preco": 150,
}
]

const catalogo = () =>{
    for (var i = 0; i < livro.length; i++){
        console.log(`Livro: ${livro[i].numero} \n\nNome: ${livro[i].nome}\n\nCategoria: ${livro[i].categoria}\n\nPreço R$: ${livro[i].preco}\n\n\n`)
    }
}

catalogo()

const calculoICM = (preco) =>{
    const icms = 0.20
    let resultado = (preco * icms)
    return resultado
}

const precoInserido = () =>{
    const numero = parseFloat(prompt('Informe o número do produto que você quer comprar: '))
    const precoLivro = livro[numero-1].preco
    const calculo = calculoICM(precoLivro)
    console.log(`O preço do seu produto é R$: ${precoLivro} e o ICMS pago sobre ele é de R$: ${calculo}`)
    return precoLivro
}

const parcelas = (preco, parcelas) =>{
    
    for (var i = 1; i <= parcelas; i++){
        let precoParcela = preco / parcelas
        let totalRestante = preco - (precoParcela * i) 
        console.log(`\nParcela ${i}: R$:${precoParcela.toFixed(2)} Valor total: R$:${preco} Valor restante: R$:${totalRestante.toFixed(2)}\n\n`)
    }

}

const produtoFinal = () =>{
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

produtoFinal()