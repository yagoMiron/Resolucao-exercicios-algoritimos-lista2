/*
1) Faça um algoritmo que LEIA DOIS números e 
indique se são iguais ou se são diferentes. 
Mostre o maior e o menor (nesta sequência)
*/
//--------------------------------------------------------------

const prompt = require('prompt-sync')();
// se precisamos LER alguma informação passada pelo usuario atravez do terminal
// então precisamos importar a biblioteca prompt sync

let valor1 = prompt("Insira o primeiro valor ");
// captura o valor digitado pelo usuário e armazena na variavel valor1

let valor2 = prompt("Insira o segundo valor ");
// captura o valor digitado pelo usuário e armazena na variavel valor2

// O espaço entre {} (chaves) é um bloco de codigo 
if (valor1 == valor2) { 
    // esse bloco de codigo é executado apenas se a variavel valor1 for IGUAL a valor2
    console.log("Ambos os valores são iguais")
    // console.log() exibe o texto entre parenteses no terminal

} else {
    // esse bloco de codigo é executado apenas se a variavel valor1 for DIFERENTE a valor2
    console.log("Os valores são diferentes")

    if (valor1 > valor2) {
        // esse bloco de codigo é executado apenas se a variavel valor1 for MAIOR que valor2
        console.log(valor1 + " é maior que " + valor2)

    } else {
        // esse bloco de codigo é executado apenas se a variavel valor1 for MENOR que valor2
        console.log(valor1 + " é menor que " + valor2)
    }
}
