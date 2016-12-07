import Phaser from 'phaser';


//Assets
import background from '../assets/space.png';
import alex from '../assets/alex.png';


export default class extends Phaser.State {
  create () {
    var background = this.game.add.sprite(0, 0, 'space');
    background.height = this.game.height;
    var button = this.game.add.button(this.game.world.centerX - 100, 500, 'start', start,this);
    button.angle = 180;

    function start() {
        this.state.start('Game');
    }
  }
  
  render () {}
}
