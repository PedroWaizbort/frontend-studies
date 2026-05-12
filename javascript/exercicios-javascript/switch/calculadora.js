const firstNumber = prompt ("Escreva um número: ")
const secondNumber = prompt ("Escreva outro número: ")
const escolha = prompt ("Escolha a operação a fazer: " + 
 "\n1. Soma" + 
 "\n2. Subtração" + 
 "\n3. Multiplicação" +
 "\n4. Divisão"
)

x = parseFloat (firstNumber)
y = parseFloat (secondNumber)

let soma = x + y
let subtracao = x - y
let divisao = x/y
let multiplicacao = x * y 

switch (escolha) {

    case "1" : //soma
    alert("A soma entre " + firstNumber + " + " + secondNumber + " = " + soma)
    break

    case "2" : //subtração
    alert ("A subtração entre " + firstNumber + " - " + secondNumber + " = " + subtracao)
    break

    case "3" : //multiplicacao
    alert ("A multiplicação entre " + firstNumber + " * " + secondNumber + " = " + multiplicacao)
    break

    case "4" : //divisão
    alert ("A divisão entre " + firstNumber + " / " + secondNumber + " = " + divisao)
    break

    


}