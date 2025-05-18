// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')()

let ladoA = Number(prompt("Informe o lado A do triângulo: "))
let ladoB = Number(prompt("Informe o lado B do triângulo: "))
let ladoC = Number(prompt("Informe o lado C do triângulo: "))

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if(ladoA === ladoB && ladoB === ladoC) {
        console.log("Esse tipo de triângulo é: Triângulo equilátero")
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Esse tipo de triângulo é: Triângulo isósceles")
    } else {
        console.log("Esse tipo de triângulo é: Triângulo escaleno")
    }

} else {
    console.log("Os lados informados não formam um triângulo. Tente valores diferentes.")
}ladoA == ladoB || ladoA == ladoC || ladoB == ladoC