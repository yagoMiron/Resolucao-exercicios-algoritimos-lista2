/*
4) Construa um algoritmo que leia um número inteiro de 1 a 7 e
informe o dia da semana correspondente, sendo domingo o dia
de número 1. Se o número não corresponder a um dia da
semana, mostre uma mensagem de erro.
*/

const prompt = require('prompt-sync')();

let numeroDia = prompt("Digite um numero inteiro de 1 á 7: ")


// Switch case é utilizado quando precisamos fazer o equivalente a varios ifs em cadeia
// no switch você deve passar uma variavel e em cada case você pode passar um valor que a
// variavel pode ter
switch (numeroDia) {
    // todo esse espaço é um bloco de codigo unico
    case '1':  
        // tudo entre os : (dois pontos) e o break de cada case só é executado se o parametro
        // do switch for igual ao valor do case
        console.log("Domingo"); 
        // esse console.log só será lido se numero dia for IGUAL a '1'
        break;
        // break serve para sair de um bloco de codigo, no caso se esse caso for execudo todos os
        // outros serão ignorados

    case '2': console.log("Segunda"); break;
    case '3': console.log("Terça"); break;
    case '4': console.log("Quarta"); break;
    case '5': console.log("Quinta"); break;
    case '6': console.log("Sexta"); break;
    case '7': console.log("Sabado"); break;

    default: console.log("ERRO: valor invalido"); break;
    // default é lido apenas se nenhum dos outros cases forem verdadeiros
    // caso o valor de numeroDia não for igual a nenhum numero inteiro entre 1 e 7 esse trecho de codigo
    // é executado
}