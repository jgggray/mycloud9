import React, {Component} from 'react';
import ColorTile from './ColorTile.js';
import './ColorTray.css';

function randRGBString(){
    var rgbVal = [];
    
    for(var k = 0; k < 3; k++){
        var rand256 = Math.floor(Math.random() * 256);
        rgbVal.push(rand256);
    }//for
    
    return `rgb(${rgbVal.join(", ")})`;
}//def


class ColorTray extends Component {
    constructor(props){
        super(props);
        
        var tileCount = 32;
        const protoStateList = [];
        
        for(var k = 0; k < tileCount; k++){
            protoStateList.push({ number: k, bgColor: randRGBString() });
        }//for
        
        this.state = {
            tiles: protoStateList
        }//state
        
         
        
        var stopIntervalId = setInterval( () => {
            var {tiles} = this.state;
            tiles = tiles.slice();
            var randTileIndex = Math.floor(Math.random() * tiles.length);
            tiles[randTileIndex] = Object.assign( {}, tiles[randTileIndex]);
            tiles[randTileIndex].bgColor = randRGBString();
            // === END callback
            this.setState({ tiles });
        }, 200);
        
        setTimeout( () => {
            clearInterval(stopIntervalId);
            alert("Clear interval was triggered");
        }, 40000 );
        
        
    }//constructor
    
    render(){
        //var tilesRend = this.state.tiles.map( tile => <ColorTile number={tile.number} bgColor={tile.bgColor} />);
        return (<div className="color-tray">
            { this.state.tiles.map( tile => <ColorTile number={tile.number} bgColor={tile.bgColor} />) }
        </div>);
    }
}//class

export default ColorTray;