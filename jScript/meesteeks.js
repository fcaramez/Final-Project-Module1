class Meesteeks {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = Math.floor(Math.random() * 490);
        this.meesteeks = new Image();
        this.width = 60;
        this.height = 60;
    }

    drawMeesteeks() {
        this.meesteeks.src = "./docs/assets/Enemy2.png";
        this.game.ctx.drawImage(this.meesteeks, this.x, this.y, 60, 60);
        this.x += 2;
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
}