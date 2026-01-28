//Comentario em linha
/*
    Comentaio
        EM
    Bloco
*/

//Permite exibir um conteúdo no terminal
console.log("Testando JS")

//Permite a criacção de uma variasvel
var nome = 'Eddie'

console.log(nome)
//Concatenação de dados (texto e varialvel)
console.log('O nome do usuario é: ' + nome)
console.log(`O nome do usuário é: ${nome}`)

/*Import da biblioteca do readline
  Readline - serve para permitir a entrada de dados via terminal */
var readline = require('readline')

//Cria um objeto espicialista em entrada de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*Permite a entrada de dados do nome do usuário.
  question - utiliza uma função de CALLBACK para devolver o valor digitado.
  CALLBACK - É uma função particular de um método, que é chamda para
  encaminhar um conteúdo para o desenvolvedor, esse conteúdo vem através
  da variável no argumento "nomeUsuario" */

entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    console.log('O nome digitado foi: ' + nomeUsuario)

    entradaDeDados.question('digite seu email: ', function(emailUsuario){
        console.log(`O email do usuario ${nomeUsuario} é ${emailUsuario}`)
    })
})
