function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>valor inválido</div>'
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `
        <div>valor Inválido: O número precisa estar
        entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você Acertou!! </h2>
        <h3> O número secreto era ${numeroSecreto}</h3>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += ` 
        <div>O número secreto é menor <i class="fa-solid fa-arrow-trend-down" style="color: #050b15;"></i> </div>
        `
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-trend-up" style="color: #050b15;"></i> </div>
        `
    }


}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor 
}