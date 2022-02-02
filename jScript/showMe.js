class ShowMe {
    constructor(game) {
        this.game = game;
        this.x = Math.floor(Math.random() * 950);
        this.y = 0;
        this.showMe = new Image();
        this.width = 60;
        this.height = 40;
    }

    drawShowMe() {
        this.showMe.src = '../docs/assets/Enemy1.png';
        this.game.ctx.drawImage(this.showMe, this.x, this.y, 60, 40);
        this.y += 2;
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