let produtos = ["Água", "Refrigerante", "Suco", "Cerveja"]

let itens = ""

for (let i = 0 ; i < produtos.length ; i++) {
    itens += (i+1) + " - " + produtos[i] + "\n"
}

console.log(itens)
console.log("Total de produtos: " + produtos.length)
console.log("Primeiro produto: " + produtos[0])
console.log("Último produto: " + produtos[produtos.length - 1])
