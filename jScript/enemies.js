class Enemies {
    constructor(game) {
        this.game = game;
        this.x = Math.floor(Math.random() * 980);
        this.y = Math.floor(Math.random() * 530);
        /* this.width = width;
        this.height = height; */
        this.enemieShow = new Image();
        this.enemiePoopie = new Image();
        this.enemieMeesteeks = new Image();
        /* this.enemieArray = [this.drawEnemie1(), this.drawEnemie2(), this.drawEnemie3()]; */
    }
    
    left() {
        return this.x;
    }

    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.height;
    }
    drawShow() {
        this.enemieShow.src = '../docs/assets/Enemy1.png';
        this.game.ctx.drawImage(this.enemieShow, this.x, this.y, 100, 80);
    }
    
    drawPoopie() {
        this.enemiePoopie.src = '../docs/assets/Enemy2.png'
        this.game.ctx.drawImage(this.enemiePoopie, this.x, this.y, 100, 80)
    }
    
    drawMeesteeks() {
        this.enemieMeesteeks.src = '../docs/assets/Enemy3.png';
        this.game.ctx.drawImage(this.enemieMeesteeks, this.x, this.y, 100, 80);
    }
}

