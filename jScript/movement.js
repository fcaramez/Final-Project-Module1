class Movement {
    constructor(game) {
        this.game = game;
        this.player = this.game.player;
    }

    keyEvents() {
        window.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'KeyW':
                    if (this.player.y > 0) {
                        this.player.y -= 25;
                    }
                    break;
                case 'KeyA':
                    if(this.player.x > 0) {
                        this.player.x -= 25;
                    }
                    break;
                case 'KeyD':
                    if (this.player.x + this.player.width < 980) {
                        this.player.x += 25;
                    }
                    break;
                case 'KeyS':
                    if (this.player.y + this.player.height < 510) {
                        this.player.y += 25;
                    }
                    break;
            }
        })
    }
}