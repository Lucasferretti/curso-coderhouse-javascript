const number = parseInt(prompt("Digite um número de 1 a 10: "))

function numero(){
    if(number <= 10){
        for (let i = 0; i < number; i++){
            console.log(i)
        }
    }else{
        alert("Digite um número valido.")
    }

}

numero()