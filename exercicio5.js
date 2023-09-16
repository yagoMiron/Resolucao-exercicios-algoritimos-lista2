/*
5) Construa um algoritmo que receba como entrada três valores
e os imprima em ordem crescente (do menor para o maior).
*/

const prompt = require('prompt-sync')();

// existe inumeros jeitos de organizar uma lista e algoritmos de ordenação de listas é 
// algo muito estudado na programação, irei passar duas formas de resolver, uma que serve
// apenas para ordenar 3 items e outra para ordenar qualquer numero de items

let numero1 = Number(prompt("Escreva o primeiro valor "))
let numero2 = Number(prompt("Escreva o segundo valor "))
let numero3 = Number(prompt("Escreva o terceiro valor "))

// primeira forma:

if (numero1 >= numero2 && numero1 >= numero3) {
    var maiorNumero = numero1;
    if (numero2 >= numero3) {
        var segundoMaior = numero2
        var menorNumero = numero3
    } else {
        var segundoMaior = numero3
        var menorNumero = numero2
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    var maiorNumero = numero2;
    if (numero1 >= numero3) {
        var segundoMaior = numero1
        var menorNumero = numero3
    } else {
        var segundoMaior = numero3
        var menorNumero = numero1
    }
} else if (numero3 >= numero1 && numero3 >= numero2) {
    var maiorNumero = numero3;
    if (numero1 >= numero2) {
        var segundoMaior = numero1
        var menorNumero = numero2
    } else {
        var segundoMaior = numero2
        var menorNumero = numero1
    }
}

// segunda forma:
// essa forma ultiliza arrays(listas de variaveis) e usa o metodo .sort() para ordenar a lista
/*
let listaValores = [];
let resultado = [];

listaValores[0] = numero1
listaValores[1] = numero2
listaValores[2] = numero3 

resultado = listaValores.sort(function(anterior, atual){return anterior-atual})

var menorNumero = resultado[0];
var segundoMaior = resultado[1];
var maiorNumero = resultado[2];
*/

console.log("Numeros em ordem crescente: "+menorNumero+" "+segundoMaior+" "+maiorNumero)
