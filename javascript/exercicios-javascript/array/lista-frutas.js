let ListaDeFrutas = []

ListaDeFrutas [0] = "Maçã"
ListaDeFrutas [1] = "Banana"
ListaDeFrutas [2] = "Uva"
ListaDeFrutas [3] = "Pera"
ListaDeFrutas [4] = "Goiaba"

let frutas = ""
for (let i = 0; i < ListaDeFrutas.length ; i++) {
    frutas+= "Fruta " + (i+1) + ": " +  ListaDeFrutas[i] + "\n"
}

console.log(frutas)

