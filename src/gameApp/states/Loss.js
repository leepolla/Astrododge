import Phaser from 'phaser';

import Game from './Game.js';

//Assets

export default class extends Phaser.State {
    init (score) {
        this.score = score;
    }
    create () {
        var background = this.game.add.sprite(0, 0, 'space');
        background.height = this.game.height;
        var button = this.game.add.button(this.game.world.centerX - 100, 500, 'start', start,this);
        button.angle = 180;

        
        
        var scoreText = this.game.add.text(300, 500, 'You Lost!', {fontsize: '32px', fill: '#ffffff'});
        scoreText.text = "You Lost! \n Score:" + this.score + "\n (Click Alex's face to play again)";

        function start() {
            this.state.start('Game');
        }
    }

    render () {}
    }
