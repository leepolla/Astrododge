import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, Link, IndexLink, browserHistory } from 'react-router';
import App from './app/app';
import Game from './gameApp/main.js';
//import SwitchContainer from './switchContainer.js';
import Leaderboard from './leaderboard/leaderboard.js';

import './index.css';

const ACTIVE = { color: 'red' }

const Nav = ({ children }) => (
  <div>
    <App />
    <h1>Navigation</h1>
    <ul>
      <li><Link to="/" activeStyle={ACTIVE}>/</Link></li>
      <li><IndexLink to="/" activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>
      <li><Link to="/Game" activeStyle={ACTIVE}>/Game</Link></li>
      <li><IndexLink to="/Game" activeStyle={ACTIVE}>/Game IndexLink</IndexLink></li>
      <li><Link to="/Leaderboard" activeStyle={ACTIVE}>/Leaderboard</Link></li>
      <li><IndexLink to="/Leaderboard" activeStyle={ACTIVE}>/Leaderboard IndexLink</IndexLink></li>
    </ul>

    {children}
  </div>
)

const index = () => (
  <div>
    <h2>Index</h2>
  </div>
)

const gameLink = () => (
  <div>
    <h2>Game</h2>
    
    
  </div>
)

const leaderboardLink = () => (
  <div>
    <h2>Leaderboard</h2>
  </div>
)

render(

    <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={index} />
        <Route path="Game" component={gameLink} />
          <IndexRoute component={gameLink} />
        <Route path="Leaderboard" component={leaderboardLink} />
          <IndexRoute component={leaderboardLink} />
        <Route path="*" component={Leaderboard} />
      </Route>
    </Router>
  
  //<Leaderboard />
  //<App/>
    ,
    document.getElementById('root')


)
