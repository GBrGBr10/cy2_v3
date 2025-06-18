class Sons {
    constructor() {
        this.somTiro = [
            new Audio("src/assets/audios/tiro.mp3"),
            new Audio("src/assets/audios/tiro.mp3"),
            new Audio("src/assets/audios/tiro.mp3"),
            new Audio("src/assets/audios/tiro.mp3"),
            new Audio("src/assets/audios/tiro.mp3")
        ];
        this.somTiroAtual = 0;
    }

    playSomTiro() {
        this.somTiro[this.somTiroAtual].currentTime = 0;
        this.somTiro[this.somTiroAtual].play();
        this.somTiroAtual = (this.somTiroAtual + 1) % this.somTiro.length;
    }
}

export default Sons;