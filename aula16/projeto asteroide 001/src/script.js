import Jogador from "./classes/jogador.js";
import Asteroide from "./classes/Asteroide.js";

const canvas =document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight; 

ctx.imageSmoothingEnabled = false;

const jogador = new Jogador();
const teclas = {
    esquerda: false,
    direita: false,
}
const asteroides = [];

const desenharAsteroides = () => {
    for (let i = 0; i < asteroides.length; i++) {
        const asteroide = asteroides[i];
        asteroide.desenhar(ctx);
    }
}

//loop de jogo
function jogoLoop() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    jogador.desenhar(ctx);

    desenharAsteroides(ctx);

    if (teclas.esquerda) {
        jogador.moverEsquerda();
    }
    if (teclas.direita) {
        jogador.moverDireita();
    }
    
    requestAnimationFrame(jogoLoop);
}

addEventListener ( "keydown", (event) => {
    const tecla = event.key;

    if(tecla == "a") teclas.esquerda = true;
    if(tecla == "d") teclas.direita = true;
} )

addEventListener("keyup", (event) => {
    const tecla = event.key;

    if(tecla == "a") teclas.esquerda = false;
    if(tecla == "d") teclas.direita = false;
})

setInterval( () => {
    const objetoAsteroide = new Asteroide(canvas.width, canvas.height);
    asteroides.push(objetoAsteroide);
}, 1000)

jogoLoop()