// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let prompt = require("prompt-sync")()

function calcularFatorial(numero) {
    if(numero == 0 || numero == 1) {
        return 1
    } else {
        return numero * calcularFatorial(numero - 1)
    }
}

let fatorial = parseInt(prompt("Digite um número para descobrir o fatorial"))

let resultado = calcularFatorial(fatorial)

console.log(`O fatorial do número ${fatorial} é ${resultado}`)