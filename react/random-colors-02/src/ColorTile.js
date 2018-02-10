import React from 'react';
import "./ColorTile.css";


const ColorTile = props => {
    return (<div className="color-tile" style={{ backgroundColor: props.bgColor }}>
        <p>Tile {props.number}</p>
    </div>);
}//class

export default ColorTile;