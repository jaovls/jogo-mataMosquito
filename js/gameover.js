 // Recupera a pontuação salva no local storage
 let score = localStorage.getItem("score");

 // Exibe a pontuação na tela
 document.getElementById("score-text").textContent = `Você conseguiu clicar em ${score} mosquitos!`;