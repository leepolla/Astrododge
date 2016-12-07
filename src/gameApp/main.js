//Boilerplate framework from https://github.com/lean/phaser-es6-webpack

import 'pixi';
import 'p2';
import Phaser from 'phaser';

import GameState from './Game';

class Game extends Phaser.Game {

  constructor () {

    var gameDiv = document.getElementById('gameDiv');

    super(800, 1200, Phaser.AUTO, gameDiv, null);

    this.state.add('Game', GameState, false);

    this.state.start('Game');
  }
}

var game = new Game();
game.width = 800;
