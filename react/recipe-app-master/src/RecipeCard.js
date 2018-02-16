import React, {Component} from 'react';

import './RecipeCard.css';

class RecipeCard extends Component {
    static defaultProps = {
        deleteRecipe(){
            
        }
    }//default Props
    constructor(props){
        super(props);
        this.processDelete = this.processDelete.bind(this);
    }//con
    processDelete(e){
        alert("Recipe index targeted for delete: " + e.target.id);
        this.props.deleteRecipe(Number(e.target.id));
    }
    render(){
        const {title, ingredients, instructions, img, id} = this.props;
        return (<div className="recipe-card">
            <div className="recipe-card-img"><img src={img} alt={title} /></div>
            <div className="recipe-card-content">
                <h2>{title}</h2>
                <h3>Ingredients</h3>
                <ul>
                    {ingredients.map( ing => (<li>{ing}</li>))}
                </ul>
                <h3>Instructions</h3>
                <p>{instructions}</p>
                <button type="button" id={id} onClick={this.processDelete} >Delete</button>
            </div>
        </div>);
    }//rend
}//cla

export default RecipeCard;