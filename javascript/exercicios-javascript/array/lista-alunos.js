let ListaDeAlunos = []

ListaDeAlunos [0] = "Pedro"
ListaDeAlunos [1] = "Lucas"
ListaDeAlunos [2] = "Ana"
ListaDeAlunos [3] = "Maria"

let alunos = ""
for (let i = 0; i < ListaDeAlunos.length; i++) {
    alunos += (i + 1) + "º - " + ListaDeAlunos[i] + "\n"
}

console.log(alunos)