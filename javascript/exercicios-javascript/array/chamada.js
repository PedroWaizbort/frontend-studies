let alunos = ["Pedro", "Lucas", "Ana"]

let posicao = ""

for (let i = 0; i < alunos.length; i++) {
  posicao += "Chamando aluno " + (i+1) + ": " + alunos[i] + "\n"
}

console.log(posicao)