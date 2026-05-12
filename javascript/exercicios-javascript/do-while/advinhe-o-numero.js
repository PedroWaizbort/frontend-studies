const number = 899;   
let advinhe;          

do {
    advinhe = prompt("Adivinhe o número: (máx 3 dígitos)");

    if (advinhe == number)
        alert("Você acertou o número!");
    else
        alert("Tente Novamente!");

} while (advinhe != number);  

