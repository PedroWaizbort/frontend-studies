let fila = ["Carlos", "João", "Maria"]

let espera = ""

for (let i = 0; i < fila.length; i++) {
    espera += (i+1) + "º " + fila[i] + "\n"
}

console.log(espera)