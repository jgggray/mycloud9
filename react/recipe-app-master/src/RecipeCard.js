import React, {Component} from 'react';

import './RecipeCard.css';

class RecipeCard extends Component {
    render(){
        const {title, ingredients, instructions, img} = this.props;
        return (<div className="recipe-card">
            <div className="recipe-card-img"><img src={img} alt={title} /></div>
            <div className="recipe-card-content">
                <h2>{this.props.title}</h2>
                <h3>Ingredients</h3>
                <ul>
                    {this.props.ingredients.map( ing => (<li>{ing}</li>))}
                </ul>
                <h3>Instructions</h3>
                <p>{this.props.instructions}</p>
            </div>
        </div>);
    }//rend
}//cla

export default RecipeCard;