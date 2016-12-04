import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import '../outerPage/outerPage.css';

//Phaser
import '../gameApp/v2/build/custom/pixi.js';
import '../gameApp/v2/build/custom/p2';
import '../gameApp/v2/build/custom/phaser';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="game"></div>
      </div>
    );
  }
}

export default App;
