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
        this.enemiesX = 0;
        this.enemiesY = 0;
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
        /* this.createEnemie();
        this.enemies.forEach((enemie) => {
            enemie.x++;
            enemie.y++;
            enemie.drawShow();
            enemie.drawPoopie();
            enemie.drawMeesteeks();
        }) */
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

    createEnemie() {
        if (this.frames % 300 === 0) {
            this.enemies.push(new EnemieShow());
            this.enemies.push(new EnemiePoopie());
            this.enemies.push(new EnemieMeesteeks());

        }
    }
    getScore() {
        let score = Math.floor(this.frames);
        this.ctx.font = '40px didot';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`Score: ${score}`, 0, 40);
    }
}

/* const enemiesFunction = [Enemies.drawEnemie1(), Enemies.drawEnemie2(), Enemies.drawEnemie3()] */