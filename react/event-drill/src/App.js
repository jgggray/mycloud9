import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonTray from './ButtonTray.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Button drill</h1>
        </header>
        <ButtonTray />
      </div>
    );
  }
}

export default App;
