var div = Document.getElementById("game");
var game = new Phaser.Game(800, 600, Phaser.AUTO, game, { preload: preload, create: create, update: update });

function preload() {
    game.load.image('space', '../assets/space.png')
}

var player;

function create() {
    game.add.sprite(0, 0, 'space');
}

function update() {


}