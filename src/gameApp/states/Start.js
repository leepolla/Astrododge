import Phaser from 'phaser';


//Assets
import space from './assets/space.png';
import alex from './assets/spaceAlex.png';
import meteor from './assets/meteor.png';


export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#000000';

  };

  preload () {
    this.load.image('space', space);
  };

  create () {
    var background = this.game.add.sprite(0, 0, 'space');
    background.height = this.game.height;
  }

  update () {
  }
  
  render () {

  }
}
