/*
    2) Crie um algoritmo que calcula o desconto previdenciário de
    um funcionário. Dado um salário, o programa deve retornar o
    valor do desconto proporcional ao mesmo. O cálculo segue a
    regra: o desconto é de 11% do valor do salário, entretanto, o
    valor máximo de desconto é 318,20. Sendo assim, ou o algoritmo
    retorna o valor equivalente a 11% sobre o salário ou 318,20.
*/

const prompt = require('prompt-sync')();

let salario = Number(prompt("Escreva seu salario "));
// Para garantir que o valor de salario será um valor numerico podemos
// usar Number() que irá converter a variavel para o tipo numerico

const desconto = 11 / 100
const descontoMaximo = 318.20
// A porcentagem de desconto e o desconto maximo são valores fixos 
// então podemos declarar eles como constantes 


if (salario * desconto > descontoMaximo) {
    // dentro desse if será feito um calculo que é a multiplicação do 
    // salario pelo desconto, se o resultado for MAIOR que o descontoMaximo
    // então esse bloco de codigo será executado

    var resultado = descontoMaximo
    // nessa situação precisamos usar var ao inves de let ou const, pois let e const
    // declara uma variavel que existe apenas dentro de um bloco de codigo (escopo),
    // já var declara uma variavel em um contexto GLOBAL dentro do codigo

} else {
    // se o if não for executado, ou seja, se salario*desconto for MENOR OU
    // IGUAL a ao descontoMaximo então esse bloco de codigo será executado

    var resultado = salario * desconto

}

console.log("O seu desconto previdênciario é: "+resultado)
// console.log vai imprimir o texto entr "" (aspas) no terminal junto com o valor do resultado