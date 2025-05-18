// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let anterior = 0
let posterior = 1
let aux;
let resultado = ""

for(let i = 0; i < 10; i++) {
    resultado += anterior + " "
    aux = posterior
    posterior = anterior + posterior
    anterior = aux
}

console.log(resultado)
