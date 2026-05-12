let fila = ["Carlos", "João", "Maria"]

let posicao = ""

for (let i = 0; i < fila.length; i++) {
    posicao += (i+1) + "º - " + fila[i] + "\n"
}

console.log(posicao)

fila.shift()

posicao = ""


for (let i = 0; i < fila.length; i++) {
    posicao += (i+1) + "º - " + fila[i] + "\n"
}

console.log("Nova fila: \n")
console.log(posicao)