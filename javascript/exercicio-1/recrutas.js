const primNome = prompt("Qual seu primeiro nome?")
const sobrenome = prompt("Qual seu sobrenome?")
const campEst = prompt("Qual seu campo de estudo?")
const anoNasc = prompt("Qual seu ano de nascimento?")

alert (
    "Recruta cadastrado com sucesso!\n" + 
    "\n Nome completo: " + primNome + " " + sobrenome +
    "\n Campo de estudo: " + campEst + 
    "\n Idade: " + (2026 - anoNasc)
)

