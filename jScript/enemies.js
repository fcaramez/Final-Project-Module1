class Enemies {
    constructor(game) {
        this.game = game;
        this.x = Math.floor(Math.random() * 980);
        this.y = Math.floor(Math.random() * 530);
        this.img = new Image();
    }

    drawEnemie1() {
        this.img.src = '../docs/assets/Enemy1.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawEnemie2() {
        this.img.src = '../docs/assets/Enemy2.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawEnemie3() {
        this.img.src = '../docs/assets/Enemy3.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}