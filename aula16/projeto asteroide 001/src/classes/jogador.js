class Jogador{

    //construção ou atributo
    constructor() {
        this.largura = 32;
        this.altura = 32;
        this.velocidade = 6;
        this.posicao = {
            x:500,
            y:500
        }
        this.NaveSprites = this.getImagem("src/assets/imagens/nave.png")
        this.sx = 0;
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
    }

    update() {

    }


}

export default Jogador;