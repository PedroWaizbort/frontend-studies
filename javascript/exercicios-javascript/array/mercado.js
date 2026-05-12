let produtos = ["Arroz", "Feijão", "Macarrão"]
let precos = [20, 10, 8]

let lista = ""
let total = 0

for (i = 0; i < produtos.length; i++) {
    lista += (i+1) + " - " + produtos[i] + " = R$" + precos[i] + "\n"
    total += precos[i]
}


console.log(lista)
console.log ("Total de compra: R$" + total)