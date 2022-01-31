class Game {
    constructor() {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.player = null;
        this.enemies = [];
        this.background = new Image();
        this.frames = 0;
        this.x = 0;
        this.y = 0;
        this.canvasWidth = 980;
        this.canvasHeight = 520;
        this.intervalId = null; 
    }

    start() {
        this.player = new Player(this, 460, 200, 120, 100);
        const movement = new Movement(this);
        movement.keyEvents();
        this.intervalId = setInterval(() => {
            this.update();
        }, 1000 / 60)
    }

    update() {
        this.drawBackground();
        this.player.draw();
    }

    drawBackground() {
        this.background.src = './docs/assets/background-game.png';
        this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight);
    }

    stopGame() {
        clearInterval(this.intervalId);
    }

    printEnemie() {
    }
}