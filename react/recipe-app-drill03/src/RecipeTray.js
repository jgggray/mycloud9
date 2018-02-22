import React, {Component} from 'react';

import RecipeCard from './RecipeCard.js';

class RecipeTray extends Component {
    render(){
        return (<div className="recipe-tray">
            {this.props.recipes.map( (r, i) => (
                <RecipeCard
                    title={r.title}
                    ingredients={r.ingredients}
                    instructions={r.instructions}
                    img={r.img}
                    index={i}
                    onDeleteRecipe={this.props.onDeleteRecipe}
                />
            ))}
        </div>);
    }//rend
}//cla

export default RecipeTray;