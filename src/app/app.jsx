import React, { Component } from 'react';

import Header from './header.js';
import Directions from './directions.js';
import Footer from './footer.js';
import Leaderboard from '../leaderboard/leaderboard.js';

import './app.css';
import '../outerPage/outerPage.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Directions />
        <Footer />
      </div>
    );
  }
}
export default App;
