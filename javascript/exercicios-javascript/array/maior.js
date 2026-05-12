let numeros = [10, 50, 20, 90, 30]
let maior = [0]

for (let i = 0; i < numeros.length; i++) {
 if (numeros[i] > maior)
    maior = numeros[i]
}
console.log("Maior número: " + maior)
