import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import App from './app/app';
import SwitchContainer from './switchContainer.js';
import Leaderboard from './leaderboard/leaderboard.js';
import './index.css';
console.log('heypo');
ReactDOM.render(
  // <Router>
  //   <Route path = "/" component={SwitchContainer}>
  //     <Route path="Game" component={App} />
  //     <Route path="LeaderBoard" component={Leaderboard} />
  //   </Route>
  // </Router>
  <Leaderboard/>
  //<App/>
    ,
    document.getElementById('root')
);
