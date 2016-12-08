import React, { Component } from 'react';
import GameInit from './main.js';

class GameElement extends Component {

    render() {

        var gameInstance = document.querySelector('canvas');
        if (gameInstance) {
            gameInstance.style.display = "block";
        }
        return (
            <div id="game-container">
                
            </div>
        )
        
    }
}

export default GameElement;