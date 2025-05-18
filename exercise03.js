// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = Number(prompt("Digite uma nota entre 0 a 10: "))

if(nota >= 0 && nota <= 4) {
    console.log("Reprovado")    
} else if(nota <= 6) {
    console.log("Recuperação")
} else if(nota <= 10) {
    console.log("Aprovado")
} else {
    console.log("Entrada inserida inválida! Tente novamente.")
}
