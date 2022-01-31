class Enemies {
    constructor(game, width, height) {
        this.game = game;
        this.x = Math.floor(Math.random() * 980);
        this.y = Math.floor(Math.random() * 530);
        this.width = width;
        this.height = height;
        this.img = new Image();
        /* this.enemieArray = [this.drawEnemie1(), this.drawEnemie2(), this.drawEnemie3()]; */
    }

    drawEnemie1() {
        this.img.src = '../docs/assets/Enemy1.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
/* 
    drawEnemie2() {
        this.img.src = '../docs/assets/Enemy2.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawEnemie3() {
        this.img.src = '../docs/assets/Enemy3.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } */
}