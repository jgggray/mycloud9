import React, {Component} from 'react';
import RecipeCard from './RecipeCard.js';

import './RecipeTray.css';

class RecipeTray extends Component {
    constructor(props){
        super(props);
    }//con
    render(){
        
        return (<div className="recipe-tray">
            {this.props.recipes.map(r => (
                <RecipeCard
                    title={r.title}
                    ingredients={r.ingredients}
                    instructions={r.instructions}
                    img={r.img}
                />))
            }
        </div>);
    }//rend
}//cla

export default RecipeTray;