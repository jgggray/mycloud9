import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ColorTray from './ColorTray.js';

class ColorApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Color React!</h1>
        </header>
        <ColorTray />
      </div>
    );
  }
}

export default ColorApp;
