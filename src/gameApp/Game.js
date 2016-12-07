import Phaser from 'phaser';
import Mushroom from './sprites/Mushroom';
import {setResponsiveWidth} from './utils';

import spacePng from './assets/space.png';
import alex from './assets/alex.png';

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#000000';

  };

  preload () {
    this.load.image('space', './assets/space.png'); //incorrect path for some reason, broke
    this.load.image('alex', alex); 
  };

  create () {
    this.game.add.sprite(0, 0, 'alex'); //will be unbroke when images are loaded
    this.alex = new Mushroom({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: 'alex'
    });

    // set the sprite width to 30% of the game width
    setResponsiveWidth(this.alex, 30, this.game.world);
    this.game.add.existing(this.alex);
  }

  render () {
    
    console.log(spacePng);
    return null;
  }
}
