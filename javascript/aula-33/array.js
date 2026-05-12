const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// Adicionar Elementos

// push (adiciona no final)
arr.push ("Teste 1")
arr.push ("Teste 2")
arr.push ("Teste 3")
console.log (arr)

// unshift (adiciona no início)
arr.unshift ("Teste 1")
console.log(arr)

// Remove Elementos

// pop (remove no final)
const ultimoElemento = arr.pop()
console.log (arr)
console.log(ultimoElemento)

// shift (remove do início)
const primeiroElemento = arr.shift()
console.log (arr)
console.log (primeiroElemento)

// Pesquisar por um Elemento

// includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar

// slice
const hobbits = arr.slice (0, 4)
const outros = arr.slice (-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os Elementos
for (let indice = 0 ; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log (elemento + " se encontra na posição " + indice)
}
