let tarefas = ["Estudar JS", "Treinar", "Ler"]

let lista = ""
for (let i = 0; i < tarefas.length ; i++) {
   lista += " [ ] " + (i+1) + " - " + tarefas[i] + "\n"
}

console.log(lista)