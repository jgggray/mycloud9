import React, {Component} from 'react';
import PropTypes from 'prop-types';



class RecipeCard extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired
    }
    
    render(){
        return (<div className="recipe-card">
            <div className="recipe-card-image">
                <img src={this.props.img} alt={this.props.title} />
            </div>
            <div className="recipe-card-content">
                <h3>{this.props.title}</h3>
                <h4>Ingredients:</h4>
                <ul>
                    {this.props.ingredients.map( item => (<li>{item}</li>) )}
                </ul>
                <h4>Instructions</h4>
                <p>{this.props.instructions}</p>
                <button type="button" onClick={ () => this.props.onDelete(this.props.id)}>Delete</button>
            </div>
            
        </div>);
    }//render
}//class

export default RecipeCard;