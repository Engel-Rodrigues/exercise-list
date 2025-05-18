// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

let idade = parseInt(prompt("Digite uma idade: "))
let categoria = ""

if(idade < 12) {
    categoria = "criança"
} else if(idade < 18) {
    categoria = "adolescente"
} else if(idade < 60) {
    categoria = "adulto"
} else if(idade >= 60) {
    categoria = "idoso"
} else {
    console.log("Entrada inserida inválida! Tente novamente.")
}

if(categoria !== "") {
    console.log(`Classificação da idade digitado é: ${categoria}`)
}