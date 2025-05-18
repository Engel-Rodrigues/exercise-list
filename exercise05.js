// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let altura = Number(prompt("Informe sua altura: "))
let peso = Number(prompt("Informe o seu peso:"))

let imc = peso / (altura ** 2)

if(imc < 18.5) {
    console.log("Baixo peso")
} else if(imc < 25.0){
    console.log("Peso normal")
} else if(imc < 30.0) {
    console.log("Sobrepeso")
} else if(imc > 30.0) {
    console.log("Obesidade")
} else {
    console.log("Entrada inserida inválida! Tente novamente.")
}