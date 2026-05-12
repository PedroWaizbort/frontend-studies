let ranking = []

ranking [0] = "Carlos" 
ranking [1] = "João"
ranking [2] = "Felipe"

let jogadores = ""
for (let i = 0; i < ranking.length ; i++) {
    jogadores += (i+1) + "º Lugar - " + ranking[i] + "\n"
}

console.log(jogadores)