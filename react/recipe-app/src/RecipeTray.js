import React, {Component} from 'react';
import RecipeCard from './RecipeCard.js';
import PropTypes from 'prop-types';

class ReactTray extends Component {
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
        onDelete: PropTypes.func.isRequired
    }//proptypes


    render(){
        const {onDelete} = this.props;
        return (<div>
            <div className="recipe-zone"><h1>Recipes</h1></div>

            <div className="recipe-tray">
                {this.props.recipes.map( (r) => (<RecipeCard name={r.title} img={r.img} ingredients={r.ingredients} instructions={r.instructions} id={r.id} onDelete={onDelete} />) )}
            </div>
        </div>);
        
    }//rend
}//class

export default ReactTray;

//module.exports = ReactTray;