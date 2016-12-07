import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './app/app';
import Game from './gameApp/main.js';
//import SwitchContainer from './switchContainer.js';
import Leaderboard from './leaderboard/leaderboard.js';

import './index.css';

render(

    <Router history={browserHistory}>
      <Route path = "/" component={App}>
        <Route path="Game" component={Game} />
        <Route path="LeaderBoard" component={Leaderboard} />
        <Route path="*" component={Game} />
      </Route>
    </Router>
  
  //<Leaderboard />
  //<App/>
    ,
    document.getElementById('root')


)
