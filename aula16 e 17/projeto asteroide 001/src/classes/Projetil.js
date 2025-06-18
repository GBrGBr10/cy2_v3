class Projetil {

    //construção ou atributo
    constructor(posicao, velocidade) {
        this.largura = 2;
        this.altura = 20;
        this.velocidade = velocidade;
        this.posicao = posicao;
}

    desenhar(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.posicao.x, this.posicao.y, this.largura, this.altura);
    }

    update() {
        this.posicao.y += this.velocidade;
    }
}

export default Projetil;