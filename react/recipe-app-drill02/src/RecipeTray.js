import React, {Component} from 'react';
import RecipeCard from './RecipeCard.js';

class ReactTray extends Component{
    render(){
        return (<div className="recipe-tray">
            {this.props.recipes.map( r => (
                <RecipeCard title={r.title} instructions={r.instructions} ingredients={r.ingredients} img={r.img} />
            ))}
        </div>);
    }//rend
}//cla

export default ReactTray;