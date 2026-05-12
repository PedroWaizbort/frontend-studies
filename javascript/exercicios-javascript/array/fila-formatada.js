let fila = ["Pedro", "Lucas", "Ana"]

let podio = ""

for (let i = 0; i < fila.length ; i++) {
    podio += (i+1) + "º - " + fila[i] + "\n"
}

console.log(podio)
alert(podio)