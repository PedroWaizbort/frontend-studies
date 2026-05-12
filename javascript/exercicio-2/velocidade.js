const n1 = prompt ("Insira o nome do veículo 1 ")
const v1 = prompt ("Insira a velocidade do veículo em Km/h")

const n2 = prompt ("Insira o nome do veículo 2: ")
const v2 = prompt ("Insira a velocidade do veículo em Km/h")

const x = parseFloat(v1)
const y = parseFloat(v2)

if (x > y) {
    alert ("O " + n1 + " é mais rápido")
} else if (x = y) {
        alert ("As velocidades são iguais")
    } else if (x > y)
        alert ("O " + n2 + " é mais rápido")

