class Enemy {
    constructor(game) {
        this.game = game;
        this.x = Math.floor(Math.random());
        this.y = Math.floor(Math.random() * 500);
        this.width = 100;
        this.height = 100;
        this.enemyImgs = ["../docs/assets/Enemy1.png", "../docs/assets/Enemy2.png", "../docs/assets/Enemy3.png"].map(name => {
            const image = new Image();
            image.src = name;
            return image;
        })
        this.image = this.enemyImgs[Math.floor(Math.random() * this.enemyImgs.length)]
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

    drawEnemy() {
        this.x += 2;
        this.game.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}