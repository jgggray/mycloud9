import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import FormTray from './FormTray.js';
//import Form from './Form.js';
//import FormMaster from './FormMaster.js';
// import FormKiwameru from './FormKiwameru.js';
import FormKyokutan from './FormKyokutan.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React: Form Submission</h1>
        </header>
        <FormKyokutan />
      </div>
    );
  }
}

export default App;
