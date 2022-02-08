class ScoreUp {
  constructor(game) {
    this.game = game;
    this.x = Math.floor(Math.random() * 980);
    this.y = Math.floor(Math.random() * 630);
    this.width = 80;
    this.height = 80;
    this.powerUp = new Image();
  }

  drawPowerUp() {
    this.powerUp.src = "./docs/assets/powerUp-removebg-preview.png";
    this.game.ctx.drawImage(this.powerUp, this.x, this.y, 80, 80);
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
