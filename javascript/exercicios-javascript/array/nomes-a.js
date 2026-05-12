let nomes = ["Pedro", "Ana", "Mariana", "Lucas"]

let names = ""

for (let i = 0 ; i < nomes.length ; i++) {
   if (nomes[i].includes("a")) {
    names += nomes[i] + "\n"
   }
}

console.log(names)