class Game {
    constructor() {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.player = null;
        this.enemies = [];
        this.background = new Image();
        this.frames = 0;
        this.score = 0;
        this.x = 0;
        this.y = 0;
        this.canvasWidth = 980;
        this.canvasHeight = 520;
        this.intervalId = null; 
        this.enemies = new Enemies(this)
    }

    start() {
        console.log(this.frames);
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
        this.enemies.drawEnemies();
        console.log("draw")
        this.frames += 3;
        this.score++;
        this.getScore();
        /* this.checkStopGame(); */
    }

    drawBackground() {
        this.background.src = './docs/assets/background-game.png';
        this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight);
    }

    /* checkStopGame() {
        const player = this.player;
        const crashed = this.enemies.some(function (enemy) {
            return player.colision(enemy);
        }); 
         if (crashed) {
        console.log(this.enemies)
            this.stopGame();
        }
    } */

    stopGame() {
        /* this.ctx.font = '90px didot';
        this.ctx.fillStyle = "red";
        this.ctx.fillText('GAME OVER', 200, 250)  */
        clearInterval(this.intervalId);
    }

    getScore() {
        let score = Math.floor(this.score);
        this.ctx.font = '40px didot';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`Score: ${score}`, 0, 40);
    }
}