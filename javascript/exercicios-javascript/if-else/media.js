const primeiraNota = parseFloat(prompt("Qual a nota da primeira avaliação? "))
const segundaNota = parseFloat(prompt("Qual a nota da segunda prova? "))

let soma = primeiraNota + segundaNota
let media = soma / 2

if (media >= 7) {
    alert("APROVADO!")
} else if (media >= 5 && media <= 6.9) {
    alert("RECUPERAÇÃO")
} else if (media < 5) {
    alert("REPROVADO")
}