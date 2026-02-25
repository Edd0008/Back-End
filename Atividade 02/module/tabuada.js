/****************************************************************************************
 * Objetivo: Arquivo responsavel por gerar uma tabuada utilizando WHILE e FOR
 * Data: 25/02/2026
 * Autor: Edison
 * Versao:1.0
 ****************************************************************************************/

//Import da biblioteca de operações matematicas
const calculosMatematicos = require('./calculo.js')

//Função para imprimir a tabuada
const gerarTabuadaWhile = function(tabuada){
    let tab = Number(tabuada)
    let cont = 0
    let resultado

    while(cont <=10)
    //processamento
    resultado = calculosMatematicos.multiplicar(tab, cont)
    console.log(tab + 'x' + cont + '=' + resultado)

    // cont = cont +1
    // cont++
    cont++

}
const gerarTabuadaFor = function(tabuada){
    let tab = Number(tabuada)
    let resultado

    for(let cont = 0; cont <=10; cont++){
    //processamento
    resultado = calculosMatematicos.multiplicar(tab, cont)
    console.log(tab + ' x ' + cont + ' = ' + resultado)
    }
}


gerarTabuadaFor(3)