/*****************************************************************
 * Objetivo: Projeto para realizar o calculo de medias escolares
 * Autor: Edison
 * Data: 29/01/2026
 * Versão: 1.0
 *****************************************************************/

/*
    Tipos de criação de variaveis

    var -> Permite criar um espaço em memoria do tipo variável.
           Essa forma de criação hoje é considerada mais antiga,
           é provavel que seja encontrada apenas em projetos
           mais antigos.
           Dica: caso você precise utilizar o var, recomenda-se
           que seja utilizado apenas em escopo global.

    let -> Permite criar um espaço em memoria do tipo variável.
           Essa forma de criação é realizada somente no escopo
           local, ou seja, dentro de bloco de programação { }.
           Esse tipo de variável deixa de existir ao termino do
           bloco.

    const -> Permite criar um espaço em memória do tipo constante,
             ou seja, esse conteúdo não poderá sofrer mudanças
             durante o projeto.
             Dica: se possível você pode criar essa const escrita 
             em MAIUSCULO para facilitar a sua utilização. POde ser
             criada de uma forma local ou global.

*/

//import da biblioteca de entrada de dados
const readline = require('readline')

//Criação do objeto para captar as entradas de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome
entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    //Recebe o nome do aluno
    let nomeAluno = nome

    //Entrada de dados nota 1
    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1

        //Entrada de dados nota 2
        entradaDeDados.question('Digite a nota 2: ', function(valor2){
            let nota2 = valor2

            //Entrada de dados nota 3
            entradaDeDados.question('Digite a nota 3: ', function(valor3){
                let nota3 = valor3

                //Entrada de dados nota 4
                entradaDeDados.question('Digite a nota 4: ', function(valor4){
                    let nota4 = valor4
                })
            })
        })
    })
})