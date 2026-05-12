const valor = prompt ("Insira o valor em metros: ")
const escolha = prompt ("Deseja converter para qual unidade de medida? \na) milímetro (mm) \nb) centímetro (cm) \nc) decímetro (dm) \nd) decâmetro (dam) \ne) hectômetro (hm) \nf) quilômetro (km)")

switch (escolha) {
    case "a": 
    alert ("O resultado é " + valor*1000 + " mm")
    break
    case "b":
     alert ("O resultado é " + valor*100 + " cm")
    break
    case "c":
    alert ("O resultado é " + valor*10 + " dm")
    break
    case "d":
    alert ("O resultado é " + valor/10 + " dam")
    break
    case "e":
    alert ("O resultado é " + valor/100 + " hm")
    break
    case "f":
    alert ("O resultado é " + valor/1000 + " km")
    break
    default: 
     alert ("Opção Inválida")
}