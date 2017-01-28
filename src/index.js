import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './app/app';
import Game from './gameApp/main.js';
import Leaderboard from './leaderboard/leaderboard.js';
import GameElement from './gameApp/gameElement.js';
import Footer from './app/footer.js';

import './index.css';

import firebase from 'firebase';

//Code for React routing between pages

const ACTIVE = { color: 'red' }

const Nav = ({ children }) => (
  <div>
    <App />
    <ul id="navigation">
      <li id="nav">Navigation Menu:   </li>
      <li><Link to="/Game" activeStyle={ACTIVE}>&#149;Game  </Link></li>
      <li><Link to="/Leaderboard" activeStyle={ACTIVE}>&#149;Leaderboard  </Link></li>
      <li><Link to="/Team" activeStyle={ACTIVE}>&#149;About Us  </Link></li>
    </ul>

    {children}
  </div>
)

const index = () => (
  <div>
    <h2>Index</h2>
  </div>
)

const GameBox = ({mode}) => {
    return (
      <GameElement />
    )
  
}

const leaderboardLink = () => (
  <div>
    <h2>Leaderboard</h2>
    <Leaderboard />
  </div>
)

const teamLink = () => (
  <Footer />
)

render(

    <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <Route path="Game" component={GameBox} />
        <Route path="Leaderboard" component={leaderboardLink} />
        <Route path="Team" component={teamLink} />
      </Route>
    </Router>

    ,
    document.getElementById('root')


)
