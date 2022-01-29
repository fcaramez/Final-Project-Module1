class Movement {
    constructor(game) {
        this.game = game;
        this.player = this.game.player;
    }

    keyEvents() {
        window.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'ArrowUp':
                    if (this.player.y > 1) {
                        this.player.y -= 10;
                    }
                    break;
                case 'ArrowLeft':
                    if(this.player.x > 1) {
                        this.player.x -= 10;
                    }
                    break;
                case 'ArrowRight':
                    if (this.player.x + this.player.width < 980) {
                        this.player.x += 10;
                    }
                    break;
                case 'ArrowDown':
                    if (this.player.y + this.player.height < 520) {
                        this.player.y += 10
                    }
                    break;
            }
        })
    }
}