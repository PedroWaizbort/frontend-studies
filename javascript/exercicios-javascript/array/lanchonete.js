let lanches = ["Hambúrguer", "Batata", "Refrigerante"]
let valores = [25, 15, 8]

let maior = [0]

for (i = 0; i < lanches.length; i++) {
    if (valores[i] > maior) {
     maior = valores[i]
    }
   console.log ( (i+1) + " - " + lanches[i] + " = R$" + valores[i]) 
  
}

 console.log ("Mais caro: R$" + maior)

 // terminar de fazer (QUESTÃO 2 chatgpt)