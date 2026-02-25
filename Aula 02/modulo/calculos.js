/*************************************************************************
 * Objetivo: arquivo responsável pelas funções de calculos das medias escolares
 * Autor: Edison Hugo
 * Data: 11/01/2026
 * Versão: 1.0
 * ***********************************************************************/

function calcularMedia (nota1, nota2, nota3, nota4){

    let primeiraNota = Number(nota1)
    let segundaNota = Number(nota2)
    let terceiraNota = Number(nota3)
    let quartaNota = Number(nota4)

    const  notas = Number(nota1, nota2, nota3, nota4)

    if(notas == '' || notas <= 0 || isNaN(notas)){
        return false
    }else{
    let numeroMedia = (notas) 
       numeroMedia = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) /4

       return Number(numeroMedia.toFixed(2))
    
    }
}
module.exports = {
    calcularMedia
}