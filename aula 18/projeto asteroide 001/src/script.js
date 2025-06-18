import Jogador from "./classes/jogador.js";
import Asteroide from "./classes/Asteroide.js";
import sounds from "./classes/sound.js"

const scoreElement = document.querySelector(".score-element");
const canvas =document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight; 

ctx.imageSmoothingEnabled = false;

const jogador = new Jogador();
const teclas = {
    esquerda: false,
    direita: false,
    tiro: {
        pressionada: false,
        liberada: true,
    }
}
const asteroides = [];

const som = new sounds();

const jogadorProjeteis = [];

const desenharAsteroides = () => {
    for (let i = 0; i < asteroides.length; i++) {
        const asteroide = asteroides[i];
        asteroide.desenhar(ctx);
        console.log(asteroides)
    }
}

const apagarAsteroides = () => {
    asteroides.forEach( (asteroide, index) => {
        if (asteroide.atingiuBordaInferior()) {
            asteroides.splice(index, 1);
        }
    } )
}

const desenharProjeteis = () => {
    jogadorProjeteis.forEach( (projetil) => {
        //desenhar
        projetil.desenhar(ctx);
        //atualizar
        projetil.update();
    } )
}

const apagarProjeteis = () => {
    jogadorProjeteis.forEach( (projetil, index) => {
        if (projetil.posicao.y <= 0) {
            jogadorProjeteis.splice(index,1);
        }
    } )
}

const verificarColisaoAsteroide = () => {
    asteroides.forEach( (asteroide, asteroideIndex) => {
        jogadorProjeteis.forEach( (projetil, projetilIndex) => {
            if (asteroide.colisao(projetil)){
                scoreIncrementar(1);
                asteroides.splice(asteroideIndex, 1);
                jogadorProjeteis.splice(projetilIndex, 1);
            }
        })
    })
}

const scoreIncrementar = (value) => {
    let scoreAtual = Number(scoreElement.innerHTML);
    scoreAtual += value;
    scoreElement.innerHTML = scoreAtual;
};

//loop de jogo
function jogoLoop() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    jogador.desenhar(ctx);

    desenharAsteroides(ctx);
    apagarAsteroides();

    desenharProjeteis();
    apagarProjeteis();

    verificarColisaoAsteroide();

    if (teclas.esquerda) {
        jogador.moverEsquerda();
    }
    if (teclas.direita) {
        jogador.moverDireita();
    }

    if (teclas.tiro.pressionada & teclas.tiro.liberada) {
        som.playSomTiro();
        jogador.atirar(jogadorProjeteis);
        teclas.tiro.liberada = false;
    }
    
    requestAnimationFrame(jogoLoop);
}

addEventListener ( "keydown", (event) => {
    const tecla = event.key;

    if(tecla == "a") teclas.esquerda = true;
    if(tecla == "d") teclas.direita = true;
    if(tecla == " ") teclas.tiro.pressionada = true;
} )

addEventListener("keyup", (event) => {
    const tecla = event.key;

    if(tecla == "a") teclas.esquerda = false;
    if(tecla == "d") teclas.direita = false;
    if(tecla == " ") {
        teclas.tiro.pressionada = false;
        teclas.tiro.liberada = true;
    }
})

setInterval( () => {
    const objetoAsteroide = new Asteroide(canvas.width, canvas.height);
    asteroides.push(objetoAsteroide);
}, 70)

jogoLoop();
