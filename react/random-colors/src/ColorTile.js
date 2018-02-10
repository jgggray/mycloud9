import React from 'react';
import "./ColorTile.css";

const ColorTile = props => {
    return <div className="color-tile" style={{backgroundColor: props.bgColor}}>Tile {props.ident + 1}</div>;
}//const ColorTile

export default ColorTile;