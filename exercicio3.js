/*
3) Crie um algoritmo que determine se um número fornecido é
par ou ímpar.
*/
const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um numero "))

// o operador % (modulo) calcula o resto de uma divisão, se a gente dividir um
// numero por 2 e tiver um resto diferente de 0 é porque esse numero é impar,
// caso o resto sejá igual a 0 então esse numero é par
if (numero % 2 == 0) {
    // para esse bloco de codigo ser executado o resto da divisão do numero
    // digitado por 2 deve ser IGUAL a 0
    console.log("Esse numero é par")
} else {
    // para esse bloco de codigo ser executado o resto da divisão do numero
    // digitado por 2 deve ser IGUAL a 
    console.log("Esse numero é impar")
}
