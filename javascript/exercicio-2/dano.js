const atacante = prompt ("Insira o nome do personagem: ")
const poderDeAtaque =  parseFloat (prompt ("Insira o poder de ataque do personagem:  "))

const defensor = prompt ("Insira o nome do personagem: ")
let pontosDeVida = parseFloat (prompt ("Insira a quantidade de pontos de vida:  "))
const poderDeDefesa = parseFloat (prompt ("Insira o poder de defesa do personagem:  "))
const escudo = prompt ("Possui escudo? (Sim/Não)")

let danoCausado = 0 


if (poderDeAtaque > poderDeDefesa && escudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && escudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + escudo
)