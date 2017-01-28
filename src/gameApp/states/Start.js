import Phaser from 'phaser';


//Assets
import background from '../assets/space.png';
import alex from '../assets/alex.png';


export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#000000';
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
  }

  preload () {
    this.load.image('startBackground', background);
    this.load.image('start', alex);
  };

  //Generates a page to prompt the user to start playing
  create () {
    this.background = this.game.add.sprite(0, 0, 'startBackground');
    background.height = this.game.height;
    var spriteHeight = this.game.height / 5;
    var spriteWidth = this.game.width / 5;
    this.startButton = this.game.add.button(this.game.world.centerX - (spriteWidth / 2), this.game.world.centerY - (spriteWidth / 2), 'start', start,this);
    // this.startButton.height = spriteHeight;
    // this.startButton.width = spriteWidth;

    //Detect enter key and start game on press
    this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.game.input.keyboard.addKeyCapture([ Phaser.Keyboard.ENTER ]);
    this.enterKey.onDown.add(start, this);


    function start() {
        this.state.start('Game');
    }
  }

  resize () {
    this.background.height = this.game.height;
    this.background.width = this.game.width;
    // this.startButton.height = this.game.height / 5;
    // this.startButton.width = this.game.width / 5;
  }
  
  render () {}
}
