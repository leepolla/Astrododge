import Phaser from 'phaser';


//Assets
import space from './assets/space.png';
import alex from './assets/spaceAlex.png';
import meteor from './assets/meteor.png';

//Sprites
import Player from './sprites/Player';

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#000000';

  };

  preload () {
    this.load.image('space', space);
    this.load.image('alex', alex);
    this.load.image('meteor', meteor);
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
    
    this.meteors = this.game.add.group();
    this.game.time.events.loop(500, shoot, this);

    //function that spawns a meteor
    function shoot() {
        var bullet = this.game.add.sprite(this.game.world.randomX, -50, 'meteor');
        this.game.physics.enable(bullet, Phaser.Physics.ARCADE);
        bullet.width = 100;
        bullet.height = 100;
        bullet.checkWorldBounds = true;
        bullet.outOfBoundsKill = true;
        bullet.body.rotation = 180;
        bullet.body.velocity.y = 500;
        this.meteors.add(bullet);
    };
  }

  update () {
    this.game.physics.arcade.overlap(this.meteors, this.alex, collision, null, this);

    function collision(bullet, player) {
      bullet.kill();
      player.kill();
    }
  }
  
  render () {

  }
}
