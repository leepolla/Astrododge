import Phaser from 'phaser';

import Game from './Game.js';

//Assets

export default class extends Phaser.State {
    init (score) {
        this.scoreValue = score;
    }


    create () {
        var background = this.game.add.sprite(0, 0, 'space');
        background.height = this.game.height;
        var button = this.game.add.button(this.game.world.centerX - 100, 500, 'start', start,this);
        button.angle = 180;

        this.userName = ''; //Initializes name
        
        
        var scoreText = this.game.add.text(200, 500, 'You Lost!', {fontsize: '32px', fill: '#ffffff'});
        scoreText.text = "You Lost! \n Score:" + this.scoreValue + "\n (Click Alex's face to play again)";

        function start() {
            this.userName = '';
            this.state.start('Game');
        }

        this.nameText = this.game.add.text(200, 800, 'Submit Name to Leaderboard: \n(Enter to Submit)', {fontsize: '32px', fill: '#ffffff'});
        //Retrieve keyboard presses from the player
        this.game.input.keyboard.addCallbacks(this, null, null, keyPress);
        this.textInput = this.game.add.text(this.game.world.centerX + 5, 575, "", {
            font: "28px Arial",
            fill: "#000",
            align: "center"
        });
        this.textInput.setText(this.textInput.text);
        this.textInput.anchor.setTo(0.5, 0.5);

        function keyPress(char) {
            this.userName += char;
            console.log(this.userName);
        }

        //Keys for backspace and enter
        this.deleteKey = this.game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
        this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.game.input.keyboard.addKeyCapture([ Phaser.Keyboard.BACKSPACE, Phaser.Keyboard.ENTER ]);

        //Detect backspaces when typing the name
        this.deleteKey.onDown.add(deleteText, this);

        function deleteText() {
            if (this.userName !== '') {
                this.userName = this.userName.slice(0, this.userName.length - 1);
            }
        }

        //Detect Enter when typing the name
        this.enterKey.onDown.add(submit, this);
        var notSubmitted = true; //if the user hasn't submitted this score before

        function submit() {
            if (notSubmitted) {
                notSubmitted = false;
                //Send To Firebase Here

            }
            this.userName = '';
        }
    }

    update() {
        this.nameText.text = 'Submit Name to Leaderboard: ' + this.userName + '\n(Enter to Submit) ';

    }

    render () {}
    }
