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
    tiro: {
        pressionada: false,
        liberada: true,
    }
}
const asteroides = [];

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

//loop de jogo
function jogoLoop() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    jogador.desenhar(ctx);

    desenharAsteroides(ctx);
    apagarAsteroides();

    desenharProjeteis();
    apagarProjeteis();

    if (teclas.esquerda) {
        jogador.moverEsquerda();
    }
    if (teclas.direita) {
        jogador.moverDireita();
    }

    if (teclas.tiro.pressionada & teclas.tiro.liberada) {
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
}, 100)

jogoLoop()