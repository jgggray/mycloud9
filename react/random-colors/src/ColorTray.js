import React, {Component} from 'react';
import ColorTile from "./ColorTile.js";

class ColorTray extends Component{
    // constructor(props){
    //     super(props);
    // }//constructor
    render(){
        const tilesRend = this.props.tiles.map( function(tile){
            return <ColorTile ident={tile.ident} bgColor={tile.bgColor}/>;
        });
        return (<div className="color-tray">{tilesRend}</div>);
    }//render
}//class

export default ColorTray;