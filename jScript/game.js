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
        this.player = new Player(this, 460, 190, 120, 100);
        const movement = new Movement(this);
        movement.keyEvents();
        this.intervalId = setInterval(() => {
            this.update();
        }, 1000 / 60)
    }

    update() {
        this.drawBackground();
        this.player.draw();
        this.enemie = new Enemies(this, 100, 100)
        this.enemie.drawEnemie1();
        this.frames += 0.3;
        this.getScore();
    }

    drawBackground() {
        this.background.src = './docs/assets/background-game.png';
        this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight);
    }

    stopGame() {
        clearInterval(this.intervalId);
    }

    /* drawEnemie() {    

    } */

    getScore() {
        let score = Math.floor(this.frames);
        this.ctx.font = '40px didot';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`Score: ${score}`, 0, 40);
    }
}

/* const enemiesFunction = [Enemies.drawEnemie1(), Enemies.drawEnemie2(), Enemies.drawEnemie3()] */