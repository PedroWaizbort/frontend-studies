const javaScript = prompt (" </> JavaScript " + 
   "\n 1 - Jogar " +
   "\n 2 - Configurações " +
   "\n 3 - Sair" )


   switch (javaScript) {
     case "1" : 
     alert ("INICIANDO FASE 1...")
     break
     
     case "2" :
     alert ("Sistema" + "\nTela" + "\nAudio" + "\nControles")
     break

     case "3" :
     alert ("Saindo...")
     break

     default :
     alert ("Escolha um dos números")
   }