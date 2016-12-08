import React, { Component } from 'react';
import GameInit from './main.js';

class GameElement extends Component {

    render() {
        //var game = new GameInit.Game();

        var gameInstance = document.querySelector('canvas');
        if (gameInstance) {
            gameInstance.style.display = "initial";
        }
        return (
            <div id="game-container">
                
            </div>
        )
        
    }
}

export default GameElement;