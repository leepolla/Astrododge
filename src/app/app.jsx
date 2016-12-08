import React, { Component } from 'react';

import Header from './header.js';
import Directions from './directions.js';
import Leaderboard from '../leaderboard/leaderboard.js';

import './app.css';
import '../outerPage/outerPage.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Directions />
      </div>
    );
  }
}
export default App;
