import React, {Component} from 'react';
import Header from './Header.js';
import RecipeTray from './RecipeTray.js';
import RecipeInput from './RecipeInput.js';

import './RecipeTray.css';
import './RecipeCard.css';
import "./RecipeInput.css";

class RecipeApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            showForm: false,
            recipes: [
                {   
                    id: 0,
                    name: "Nikuman",
                    img: "http://japan-marche.jp/_wp/wp-content/uploads/2015/10/014d2258e8fb121c146408d2c8dabafc.png",
                    ingredients: ["ground pork", "oyster sauce", "five spice powder", "potato starch", "green onion", "cabbage", "flour", "sugar", "water", "yeast"],
                    instructions: "To create dough, mix flour, yeast, sugar and water. Mix until dough consistency. Let rise for 45 minutes. To create meat filling, mix the spices with the meat. Add the potato starch, cabbage and green onion. Wrap meat with dough and steam for 15 minutes. Let it cool down for five minutes and enjoy!"
                },
                {   
                    id: 1,
                    name: "Beef Bowl (Gyuudon)",
                    img: "https://www.justonecookbook.com/wp-content/uploads/2016/08/Yoshinoya-Beef-Bowl.jpg",
                    ingredients: ["beef", "teriyaki", "green onion", "garlic", "egg", "rice"],
                    instructions: "Cook beef and top it over rice."
                },
                {   
                    id: 2,
                    name: "Katsu Chicken",
                    img: "http://www.slimmingeats.com/blog/wp-content/uploads/2011/11/chicken-katsu-curry-recipe-3.jpg",
                    ingredients: ["chicken", "panko", "tonkatsu", "egg", "flour"],
                    instructions: "Drege chicken in panko and fry. Serve with rice and tonkatsu"
                }
            ]//recipes
            ,
            nextRecipeId: 3
        }//this.state
        //functions
        this.handleSave = this.handleSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
        
    }//constructor
    handleSave(recipe){
        this.setState( (prevState, props) => {
            const newRecipe = {...recipe, id: this.state.nextRecipeId};
            return {
                nextRecipeId: (prevState.nextRecipeId + 1),
                recipes: [...this.state.recipes, newRecipe],
                showForm: false
            };//return
        });//this.setState
    }//def handleSave
    onDelete(id){
        const recipes = this.state.recipes.filter( r => r.id !== id );
        alert("Recipe id: " + id + " is deleted!");
        this.setState({ recipes: recipes });
    }
    render(){
        const {showForm} = this.state;
        return (<div class="wrapper">
            <Header onNewRecipe={ () => this.setState({showForm: true}) } />
            { showForm ?
                <RecipeInput
                    onSave={this.handleSave} 
                    onClose={() => this.setState({showForm: false})}
                /> :
                null }
            
            <RecipeTray onDelete={this.onDelete} recipes={this.state.recipes}/>
        </div>);
    }//rend
}//class

export default RecipeApp;