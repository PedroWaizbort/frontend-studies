let numeros = [1, 2, 3, 4, 5, 6]

let pares = ""

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) 
    pares +=  numeros[i] + "\n"
}
console.log(pares)