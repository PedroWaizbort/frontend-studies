const numero = prompt ("Insira um número para ver sua tabuada: ")
let resultado = ""
for (let indice = 1 ; indice <= 20 ; indice++) {
   resultado += " -> " + numero + " * " + indice + " = " + (numero * indice) + "\n"
}

alert ("Resultado da tabuada de " + numero + ":\n\n" + resultado)