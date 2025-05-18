// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

console.log("Escolha a classe que deseja usar")
console.log("1 - Mago\n 2- Guerreiro\n 3 - Paladino\n 4 - Arqueiro")

let classe = parseInt(prompt("Qual a classe que você usará nessa aventura? "))

switch(classe) {
    case 1:
        console.log("Você escolheu a classe mago, essa classe conterá várias tipo de mágias diferentes.")
        break
    case 2:
        console.log("Essa classe guerreiro terá grandes habilidades de luta e determinação para completar as missões.")
        break
    case 3:
        console.log("Uma classe que possui poderes divinos, esse guerreiro divino é um paladino")
        break
    case 4:
        console.log("Classe arqueiro é muito eficiente para batalha em longas distância")
        break
    default:
        console.log("Entrada inserida inválida! Tente novamente.")
}