import Phaser from 'phaser';
import Mushroom from './sprites/Mushroom';
import Player from './sprites/Player';
import {setResponsiveWidth} from './utils';

import space from './assets/space.png';
import alex from './assets/alex.png';

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#000000';

  };

  preload () {
    this.load.image('space', space);
    this.load.image('alex', alex);
  };

  create () {
    var background = this.game.add.sprite(0, 0, 'space');
    background.height = this.game.height;


    var cursors = this.game.input.keyboard.createCursorKeys();
    
    this.alex = new Player({
      game: this.game,
      x: 350,
      y: 150,
      asset: 'alex',
      cursors: cursors
    });

    // //set the sprite width to 30% of the game width
    // setResponsiveWidth(this.alex, 30, this.game.world);
    this.game.add.existing(this.alex);
  }
  
  render () {

  }
}
