import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, Link, IndexLink, browserHistory } from 'react-router';
import App from './app/app';
import Game from './gameApp/main.js';
//import SwitchContainer from './switchContainer.js';
import Leaderboard from './leaderboard/leaderboard.js';
import GameElement from './gameApp/gameElement.js';

import './index.css';


import firebase from 'firebase';


// var config = {
//     apiKey: "AIzaSyA39eaG9n2IuM9HPu9s4t5kDtXD-wRpkEo",
//     authDomain: "running-challenge.firebaseapp.com",
//     databaseURL: "https://running-challenge.firebaseio.com",
//     storageBucket: "running-challenge.appspot.com",
//     messagingSenderId: "809639999871"
// };
// firebase.initializeApp(config);


// var database = firebase.database();
// var scoresData = database.ref('Scores');

const ACTIVE = { color: 'red' }

const Nav = ({ children }) => (
  <div>
    <App />
    <h1>Navigation</h1>
    <ul>
      <li><Link to="/" activeStyle={ACTIVE}>/Home</Link></li>
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

render(

    <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={index} />
        <Route path="Game" component={GameBox} />
          <IndexRoute component={GameBox} />
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
