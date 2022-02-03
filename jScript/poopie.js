class Poopie {
  constructor(game) {
    this.game = game;
    this.x = Math.floor(Math.random() * 460);
    this.y = 0;
    this.poopie = new Image();
    this.width = 60;
    this.height = 60;
  }

  drawPoopie() {
    this.poopie.src = "./docs/assets/Enemy3.png";
    this.game.ctx.drawImage(this.poopie, this.x, this.y, 60, 60);
    this.x++;
    this.y++;
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
