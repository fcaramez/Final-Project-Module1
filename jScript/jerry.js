class Jerry {
  constructor(game) {
    this.game = game;
    this.x = 980;
    this.y = Math.floor(Math.random() * 490);
    this.width = 60;
    this.height = 60;
    this.jerry = new Image();
  }

  drawJerry() {
    this.jerry.src = "./docs/assets/enemy4.png";
    this.game.ctx.drawImage(
      this.jerry,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.x -= 2;
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
