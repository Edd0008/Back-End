/*******************************************************************************************
 * Objetivo: Arquivo responsável pelas funções de calcular (Somar, Subtrair, Multiplicar e Dividir)
 * data: 20/02/2026
 * Autor: Edison
 * Versão: 1.0
 ********************************************************************************************/
// toLowerCase() -> Retorna a String em minúsculo
// toUpperCase() -> Retorna a String em MAIÚSCULO


// Modelo de função Anônima
// Calcular as 4 operações matemáticas
// Entrada das funções
const calcular = function(numero1, numero2, operador){

    // Converte os valores recebidos para número
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)

    // Converte o operador para string e deixa em MAIÚSCULO
    let operadorMatematico = String(operador).toUpperCase()
    let resultado = false

    // Condicionais para validar qual o tipo de operação matemática
    // A ausência das chaves na condicional é porque qualquer condicional que contenha apenas
    // uma linha de processamento as chaves tornam-se opcionais
    // Exemplo:
    // if(operadorMatematico == 'SOMAR')
    //     resultado = valor1 + valor2

    // else if(operadorMatematico == 'SUBTRAIR')
    //     resultado = valor1 - valor2

    // else if(operadorMatematico == 'MULTIPLICAR')
    //     resultado = valor1 * valor2

    // else if(operadorMatematico == 'DIVIDIR')
    //     resultado = valor1 / valor2

    // Estrutura de decisão usando switch
    switch (operadorMatematico) {
        case 'SOMAR': // if
            resultado = somar(valor1, valor2)
            break;

        case 'SUBTRAIR': // else if
            resultado = subtrair(valor1, valor2)
            break;
    
        case 'MULTIPLICAR': // else if
            resultado = multiplicar(valor1, valor2)
            break;

        case 'DIVIDIR': // else if
            resultado = dividir(valor1, valor2)
            break;
    
        default: // Else 
            console.log('Operador inválido!')
            break;
    }

    return resultado
}

// Função baseada em formato de seta (ARROW FUNCTION)
// Simplificada para somar dois números
const somar       = (numero1, numero2) => Number(numero1) + Number(numero2)
const subtrair    = (numero1, numero2) => Number(numero1) - Number(numero2)
const multiplicar = (numero1, numero2) => Number(numero1) * Number(numero2)
const dividir     = (numero1, numero2) => Number(numero1) / Number(numero2)

module.exports = {
    calcular,
    somar,
    subtrair,
    multiplicar,
    dividir
}