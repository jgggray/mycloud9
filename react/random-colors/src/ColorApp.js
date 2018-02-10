import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorTray from "./ColorTray.js";


function generateRandomNumber(){
  return Math.floor(Math.random() * 256);
}
function generateRandomRGBString(){
  var rgbVal = [];
  for(var k = 0; k < 3; k++){
    rgbVal.push( generateRandomNumber() );
  }//for
  return `rgb(${rgbVal.join(", ")})`;
}//def

class ColorApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      tiles: [],
      stopIndex: ""
    };
    //tiles seed
    for(var k = 0; k < 32; k++){
      var bgVal = generateRandomRGBString();
      this.state.tiles.push({ident: k, bgColor: bgVal});
    }//end for
    
    this.state.stopIndex = setInterval( ()=>{
      //change 1 random tile to a random color
      const randomTileIndex = Math.floor(Math.random() * this.state.tiles.length);
      var tilesCopy = this.state.tiles.slice();
      tilesCopy[randomTileIndex] = Object.assign({}, tilesCopy[randomTileIndex]);
      tilesCopy[randomTileIndex].bgColor = generateRandomRGBString();

      
      //change all tiles to random color
      /*
      var tilesCopy = this.state.tiles.slice();
      for(var k = 0; k < tilesCopy.length; k++){
        tilesCopy[k] = Object.assign({}, tilesCopy[k]);
        tilesCopy[k].bgColor = generateRandomRGBString();
      }//for
      */
      
      this.setState({tiles: tilesCopy});
      //--CALLBACK
    }, 500 );    

  }//constructor
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Color App!</h1>
        </header>
          <ColorTray tiles={this.state.tiles}/>
      </div>
    );
  }
}
export default ColorApp;
