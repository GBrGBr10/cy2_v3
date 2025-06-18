import Projetil from "./Projetil.js";

class Jogador{

    //construção ou atributo
    constructor() {
        this.largura = 32 * 3;
        this.altura = 32 * 3;
        this.velocidade = 15;
        this.posicao = {
            x:500,
            y:500
        }
        this.NaveSprites = this.getImagem("src/assets/imagens/nave.png")
        this.sx = 0;
        this.framesContador = 8;
    }

    //métodos ou funcionalidades
    getImagem(src) {
        const imagem = new Image();
        imagem.src = src;
        return imagem;
    }

    moverEsquerda() {
        this.posicao.x-= this.velocidade
    }

    moverDireita() {
        this.posicao.x += this.velocidade
    }

    desenhar(ctx) {
        ctx.drawImage(
            this.NaveSprites,
            this.sx, 0,
            32, 32,
            this.posicao.x, this.posicao.y,
            this.largura, this.altura
        )

        this.update();
    }

    update() {
        if(this.framesContador == 0) {
            if(this.sx == 96) {
                this.sx = 0;
            }
            else{
                this.sx += 32;
            }
            this.framesContador = 8;
        }

        this.framesContador--;



    }

    atirar(projeteis) {
        const p = new Projetil(
            {
                x: this.posicao.x + this.largura/2,
                y: this.posicao.y,
            },
            -10,

        );
        projeteis.push(p)
    }
}

export default Jogador;