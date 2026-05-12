const numero = 5
let resultado = ""
for (let indice = 1 ; indice <= 10 ; indice++) {
   resultado += " -> " + numero + " * " + indice + " = " + (numero * indice) + "\n"
}

alert ("Resultado da tabuada de " + numero + ":\n\n" + resultado)