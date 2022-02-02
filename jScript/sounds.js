class Sounds {
    constructor(game) {
        this.game = game;
        this.getShwifty = new sound('../sounds/Get Schwifty Music Video   Rick and Morty  Adult Swim.mp3');
    }

    playGetShwifty() {
        this.getShwifty.play();
    }


}