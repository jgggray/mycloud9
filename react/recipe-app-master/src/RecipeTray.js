import React, {Component} from 'react';
import RecipeCard from './RecipeCard.js';

import './RecipeTray.css';

class RecipeTray extends Component {
    static defaultProps = {
        deleteRecipe(){
            
        }//def
    }//defaultProps
    render(){
        return (<div className="recipe-tray">
            {this.props.recipes.map( (r, index) => (
                <RecipeCard
                    title={r.title}
                    ingredients={r.ingredients}
                    instructions={r.instructions}
                    img={r.img}
                    id={index}
                    deleteRecipe={this.props.deleteRecipe}
                />))
            }
        </div>);
    }//rend
}//cla

export default RecipeTray;