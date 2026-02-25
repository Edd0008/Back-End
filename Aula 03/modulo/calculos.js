/*************************************************************************
 * Objetivo: arquivo responsável pelas funções de calculos financeiros
 * Autor: Ediso Hugo
 * Data: 11/01/2026
 * Versão: 1.0
 * ***********************************************************************/

//função para retornar um percentual de um número
function calcularPercentual(numero){
    //recebe o numero encaminhado
    let numeroPercentual = Number(numero)

    //validação de entrada vazia, menor pou igual a 0 e de caracter

    if(numero == '' || numero <= 0 || isNaN(numero)){
        return false
    }else{

        //cacula percentual do numero
        let percentual = numeroPercentual / 100

        return Number(percentual.toFixed(2))
    }

}

//funçao para retornar o montante referente a juros compostos
function calcularJurosCompostos(valor,taxa,parcelas){
    //recebe os valores dos argumentos e converte em numero
    let valorPrincipal     = Number(valor)
    let taxaJuros          = Number(taxa) 
    let quantidadeParcelas = Number(parcelas)

    //validaçao de vazio ou caracteres
    if(valor == '' || isNaN(valor) || valor <=0 || parcelas == '' || isNaN(parcelas)){
        return false
    }else{
    //chama a funçao para retiornar o percentual da taxa
    let percentual = calcularPercentual(taxaJuros)

    if(percentual){
        //calculo
        let montante = valorPrincipal * ((1 + percentual)**quantidadeParcelas)
        return Number(montante.toFixed(2))
    }else{
        return false
    }
}

}

//tornando as funçoes publicas, para que outros arquivo possam utilizar
module.exports = {
    calcularPercentual,
    calcularJurosCompostos
}
