let numeros = [1, 2, 3, 4, 5, 6]

let pares = 0
let impares = 0

for (i = 0; i < numeros.length ; i++) {
    if (numeros[i] % 2 === 0 ) {
        pares += 1
   
    } else {
        impares += 1
    }
}

alert ("Pares: " + pares + "\nÍmpares: " + impares)
