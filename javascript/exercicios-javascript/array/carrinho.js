let carrinho = []

carrinho [0] = "Pizza"
carrinho [1] = "Hambúrguer"
carrinho [2] = "Refrigerante"

let compras = ""
for (let i = 0; i < carrinho.length; i++) {
    compras += "Item " + (i+1) + ": " + carrinho[i] + "\n"
}

console.log(compras)