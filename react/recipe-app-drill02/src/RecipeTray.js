import React, {Component} from 'react';
import RecipeCard from './RecipeCard.js';

class ReactTray extends Component{
    render(){
        return (<div className="recipe-tray">
            {this.props.recipes.map( (r, index) => (
                <RecipeCard title={r.title} instructions={r.instructions} ingredients={r.ingredients} img={r.img} id={index} onDelete={this.props.onDelete} />
            ))}
        </div>);
    }//rend
}//cla

export default ReactTray;