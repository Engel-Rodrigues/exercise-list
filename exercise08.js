// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

let numeroUm = Number(prompt("Digite o número 1: "))
let numeroDois = Number(prompt("Digite o número 2: "))

if(numeroUm < numeroDois) {
    console.log(`${numeroUm} - ${numeroDois}`)
} else {
    console.log(`${numeroDois} - ${numeroUm}`)
}