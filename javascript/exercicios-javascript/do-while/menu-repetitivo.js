let menu;

do {
  menu = prompt(
    " </> JavaScript\n" +
    " 1 - Continuar\n" +
    " 2 - Sair"
  );

  if (menu === "1") {
    alert("Você escolheu continuar!");
  } else if (menu === "2") {
    alert("Saindo...");
  } else {
    alert("Opção inválida! Digite 1 ou 2.");
  }

} while (menu !== "2");