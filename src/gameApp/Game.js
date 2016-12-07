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
    this.load.image('alex', alex);
    this.load.image('meteor', meteor);
  };

  create () {
    var background = this.game.add.sprite(0, 0, 'space');
    background.height = this.game.height;

    this.score = 0;
    this.scoreText = this.game.add.text(15, 15, 'score: 0', {fontsize: '32px', fill: '#ffffff'});

    this.cursors = this.game.input.keyboard.createCursorKeys();

    //Spawns the Player
    this.alex = this.game.add.sprite(350, 1000, 'alex');
    this.alex.height = 200;
    this.alex.width = 100;
    this.game.physics.arcade.enable(this.alex);
    this.alex.body.collideWorldBounds = true;
    this.game.add.existing(this.alex)
    
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
    this.alex.body.velocity.x = 0;
    this.score++;
    this.scoreText.text = 'Score: ' + Math.round(this.score / 10);

    if (this.cursors.left.isDown) {
        this.alex.body.velocity.x = -600;
    } else if (this.cursors.right.isDown) {
        this.alex.body.velocity.x = 600;
    }
    
    this.game.physics.arcade.overlap(this.meteors, this.alex, collision, null, this);

    function collision(bullet, player) {
      bullet.kill();
      player.kill();
    }
  }
  
  render () {

  }
}
