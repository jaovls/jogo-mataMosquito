let clicou = true
let score = 0
let vidas = 3
let body = document.querySelector("body")

let img = document.createElement("img")
img.src = "../imgs/mosquito.png"
img.style.position = "absolute"
img.style.width = "200px"
img.style.height = "200px"

function geraPosicao(){
    let y = Math.random() * (window.innerHeight * 0.70)
    let x = Math.random() * (window.innerWidth * 0.70)

    img.style.top = `${y}px`
    img.style.left = `${x}px`
}


img.addEventListener("click",function(){
    clicou = true
    score++
    img.remove()
})

function alteraTamanhoMosquito(){
    //numero * (max - min) + min
    let numeroAleatorio = Math.random() * (0.6 - 0.2) + 0.2
    img.style.transform = `scale(${numeroAleatorio})`
}

setInterval(function(){
    geraPosicao()
    alteraTamanhoMosquito()
    body.appendChild(img)
    

        if (!clicou){
            vidas = vidas -1
        }

        clicou = false

        if(vidas == 2){
            let coracao3 = document.getElementById("coracao3")
            coracao3.src = "../imgs/coracao_vazio.png"
        }

        else if(vidas == 1){
            let coracao2 = document.getElementById("coracao2")
            coracao2.src = "../imgs/coracao_vazio.png"
        }

        else if(vidas == 0){
            let coracao1 = document.getElementById("coracao1")
            coracao1.src = "../imgs/coracao_vazio.png"

    
            window.location.href = "../gameover.html";
            localStorage.setItem("score", score);
        }
}, 800  )

//Isso adiciona um elemento no body (h1, p, div, etc)
body.appendChild(img)