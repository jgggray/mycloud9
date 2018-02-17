import React, {Component} from 'react';

class RecipeCard extends Component {
    static defaultProps = {
        onDelete(){
            
        }
    }
    render(){
        const {title, ingredients, instructions, img, index} = this.props;
        return (<div className="recipe-card">
            <div className="recipe-card-img">
                <img src={img} alt={title} />
            </div>
            <div className="recipe-card-content">
                <h2>{title}</h2>
                <h3>Ingredients</h3>
                <ul>
                    {ingredients.map( (ing) => (<li>{ing}</li>) )}
                </ul>
                <h3>Instructions</h3>
                <p>{instructions}</p>
                <button
                    onClick={ () => {this.props.onDelete(index);} } type="button"
                >Delete</button>
            </div>
        </div>);
    }//render
}//cla

export default RecipeCard;