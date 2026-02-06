/*****************************************************************
 * Objetivo: Desenvolver um sistema para calcular
 * os juros compostos de uma venda parcelada.
 * Autor: Edison
 * Data: 04/01/2026
 * Versão: 1.0
 *****************************************************************/


//import da biblioteca de entrada de dados
const readline = require('readline')

//Criação do objeto para captar as entradas de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//entrada de dados do nome
entradaDeDados.question('Digite o nome do cliente: ', function(nome){
    //recebe o nome do cliente
    let nomeCliente = nome

    //entrada de dados do nome do produto
    entradaDeDados.question('Digite o nome do produto: ', function(produto){
        //recebe o nome do produto
        let nomeProduto = produto

    //entrada de dados do valor do produto
    entradaDeDados.question('Insira o valor da compra: ', function(valorCompra){
        //recebe o valor inicial do cliente
        let valorInicial = valorCompra

        //entrada de dados da taxa de juros
        entradaDeDados.question('Insira a taxa de juros: ', function(juros){
            //recebe a taxa de juros
            let taxaJuros = juros

            //entrada de dados do tempo de pagamento em meses
            entradaDeDados.question('insira o tempo de pagamento: ', function(tempo){
                //recebe o tempo de pagamento
                let tempoDePagamento = tempo

                //desafio
                //entrada de dados, usuario escolhe se e meses ou anos
                entradaDeDados.question('O tempo é em [M]eses ou [A]nos? ', function(unidade){
                    //recebe o tipo do tempo meses ou anos
                    let tipoTempo = unidade

                    //permite digitar A, M ou a, m
                    tipoTempo = tipoTempo.toUpperCase()

                    //permite tranformar as etradas de dads em numeros
                    let capital = Number(valorInicial.replace(',', '.'))
                    let taxa = Number(taxaJuros.replace(',', '.'))
                    let tempo = Number(tempoDePagamento.replace(',', '.'))
                    
                    //nao permite entrada de dados vazios
                    if( nomeCliente == '' || nomeProduto == '' ||valorInicial == '' || taxaJuros == '' ||tempoDePagamento == '' || tipoTempo == ''){
                        console.log('ERRO: existem campos obrigatórios que não foram preenchidos!!')
                    }

                    //cria o erro de nao e permitido numeros nas abas dos nomes
                    else if(!isNaN(Number(nomeCliente)) || !isNaN(Number(nomeProduto))){
                        console.log('ERRO: não é permitido números nos campos de nome!!')
                    }

                    //permite apenas a entrada de numeros na entrada de dados finaceiros
                    else if(isNaN(capital) || isNaN(taxa) || isNaN(tempo)){
                        console.log('ERRO: somente números são permitidos na entrada dos dados financeiros!!')
                    }
                    //desafio
                    //permite apenas a escolha de M ou A
                    else if(tipoTempo !== 'M' && tipoTempo !== 'A'){
                        console.log('ERRO: Unidade de tempo inválida. Use M ou A!!')
                    }

                    
                    else{
                        /// Conversão da taxa de juros para decimal e ajuste do tempo para meses
                        taxa = taxa / 100

                        if(tipoTempo == 'A') {
                            tempo = tempo * 12
                        }
                        
                        // Definição da unidade de tempo para exibição no resultado
                        let tempoExibicao = tempoDePagamento
                        let unidadeExibicao
                        
                        if(tipoTempo == 'A'){
                            unidadeExibicao = (`anos (${tempoDePagamento * 12} meses)`)
                        } else{
                            unidadeExibicao = ('meses')
                        }
                        
                        //cálculo do montante (juros compostos)
                        let montante = capital * ((1 + taxa) ** tempo)
                        // cálculo do acréscimo
                        let valorAcrescentado = montante - capital
                    
//console de exibicao dos resultados
console.log('******************* [VIVA MODA] *******************')
console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.\n
A compra do produto: ${nomeProduto}, tem um valor de: R$${capital.toFixed(2)}.\n
A sua compra será parcelada em ${tempoExibicao} ${unidadeExibicao} e o Sr(a) pagará: R$${montante.toFixed(2)}.\n
O acréscimo realizado ao valor de: R$${capital.toFixed(2)} será de R$${valorAcrescentado.toFixed(2)}.`)
console.log('***************************************************')}
                    
          })

        })

      })
      
    })

  })

})