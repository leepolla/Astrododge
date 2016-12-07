import Phaser from 'phaser';

export default class extends Phaser {


    constructor ({ game, x, y, asset, cursors }) {
        var player = super(game, 350, 1000, asset);
        this.player = player;
        this.game = game;
        this.player.height = 200;
        this.player.width = 100;
        this.game.physics.arcade.enable(player);
        this.player.body.collideWorldBounds = true;
        this.cursors = cursors;

        this.game.add.existing(this.player)

    }

    update () {
        this.player.body.velocity.x = 0;

        if (this.cursors.left.isDown)
        {
            this.player.body.velocity.x = -600;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.velocity.x = 600;
        }
    }

}