// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let prompt = require("prompt-sync")()
let somador = 0
let contador = 0

let numero = prompt("Digite um número (Digite 0 para encerrar")

while(numero != 0) {
    somador += numero
    contador++
    numero = prompt("Digite um número (Digite 0 para encerrar")
}

if(contador > 0) {
    let media = somador / contador
    console.log(`A média do(s) número(s) é ${media}`)
}