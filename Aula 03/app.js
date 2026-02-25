/*************************************************************************
 * Objetivo: criar uma aplicação que realiza calculos de juros utilizando
 * funções para modularizar o código
 * Autor: Edison Hugo
 * Data: 11/02/2026
 * Versão: 1.0
 *************************************************************************/

//import da biblioteca do readline
const readline = require('readline')

//criando o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//entrada de dados do nome do cliente
entradaDeDados.question('Digite o nome do cliente: ', function(nome){
    let nomeCliente = nome

    //entrada de dados do nome do produto
    entradaDeDados.question('Digite o nome do produto: ', function(produto){
        let nomeProduto = produto

        //entrada de dados do valor do produto
        entradaDeDados.question('Digite o valor da compra: ', function(valor){
            let valorCompra = valor

            //entrada de dados da taxa de juros
            entradaDeDados.question('Digite a taxa de juros: ', function(taxa){
                let taxaJuros = taxa

                //entrada de dados da quantidade de parcelas
                entradaDeDados.question('Digite a quantidade de parcelas: ', function(parcelas){
                    let quantidadeParcelas = parcelas
                    //import da biblioteca de calculos financeiros
                    let calculos = require('./modulo/calculos.js')

                    //chama a função para caluclar o valor do montante
                    let montante = calculos.calcularJurosCompostos(valorCompra, taxaJuros, quantidadeParcelas)
                    
                    //valição para verificar se o calculo foi realizado
                    if(montante){
                    console.log('O valor final é: ' + montante)
                    }else{
                        console.log('ERRO: não foi possível processar o calculo.')
                        entradaDeDados.close()
                    }
                    
                })
            })
        })
    })
})

