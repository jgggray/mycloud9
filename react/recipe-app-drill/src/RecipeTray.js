import React from 'react';
import RecipeCard from './RecipeCard.js';

class RecipeTray extends React.Component {
    render(){
        return (<div className="recipe-tray">
            {this.props.recipes.map( (recipe, index) =>(
                <RecipeCard title={recipe.title} ingredients={recipe.ingredients} instructions={recipe.instructions} img={recipe.img} index={index} onDelete={this.props.onDelete}/>
            ))}
        </div>);
    }//rend
}//cla

export default RecipeTray;