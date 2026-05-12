let nomes = ["Ana", "Pedro", "João", "Mariana"]

let name = ""

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].length > 4) {
    name += nomes[i] + "\n" 
}
}
    console.log(name)  