import React, { Component } from 'react';
import logo from './logo.svg';
<<<<<<< HEAD:src/app/app.jsx
import './app.css';
=======
import './App.css';
import './outerPage/outerPage.css';
>>>>>>> 048c8d9b67b69b75efe7aaa228d46078a22a1450:src/App.js

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
      </div>
    );
  }
}

export default App;
