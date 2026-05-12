let roupas = ["Camisa", "Calça", "Tênis"]
let precos = [50, 120, 300]

let total = 0

for (let i = 0; i < roupas.length; i++) {
    total += precos[i]
    console.log( (i+1) + " - " +  roupas[i] + " = R$ " + precos[i])
}


console.log("Total da compra: R$" + total)
