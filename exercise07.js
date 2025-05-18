// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

let maca = Number(prompt("Quantas maças serão compradas? "))
let precoTotal = 0

if(maca < 12) {
    precoTotal = maca * 0.30
} else if(maca >= 12) {
    precoTotal = maca * 0.25
} else {
    console.log("Entrada informada inválida. Tente novamente.")
}

if(precoTotal > 0) {
    console.log(`O preço total da(s) ${maca} maça(s) é ${precoTotal.toFixed(2)} reais`)
}