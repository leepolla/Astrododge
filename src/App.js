import Directions from "./outerPage/directions.js"
import Header from "./outerPage/header.js";
import Footer from "./outerPage/footer.js";
import React, { Component } from 'react';
import './App.css';
import './outerPage/outerPage.css';

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
