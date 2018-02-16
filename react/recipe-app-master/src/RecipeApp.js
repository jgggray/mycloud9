import React, {Component} from 'react';
import NavBar from './NavBar.js';
import RecipeTray from './RecipeTray.js';
import RecipeInput from './RecipeInput.js';

import './RecipeApp.css';

class RecipeApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            showForm: false,
            recipes: [
                {
                  title: 'Shabu Shabu',
                  ingredients: ['sirloin beef, thinly sliced', 'enoki mushrooms', 'kombu seaweed', 'sesame oil', 'ponzu-shoyu sauce'],
                  instructions: 'Cook ingredients in hot pot, then eat.',
                  img: 'https://img.grouponcdn.com/deal/26bZiLxt9ffkRiR1EJnSRneHjvML/26-845x507/v1/c700x420.jpg'
                },
                {
                  title: 'Nikuman',
                  ingredients: ['ground pork', 'soy sauce', 'oyster sauce', 'corn or potato starch', 'salt', 'water chestnuts', 'ginger', 'garlic', 'green onion', 'flour', 'yeast', 'oil','sugar'],
                  instructions:'Mix dough ingredients in mixing bowl. Mix meat ingredients and wrap with dough. Steam for 10 minutes then eat. Recipe found at http://www.japanesecooking101.com/nikuman-recipe/',
                  img:'https://japancentre-images.freetls.fastly.net/recipes/pics/453/main/photo_steamed_meat_buns_nikuman.jpg?1469573102'
                },
                {
                  title: 'Gyuudon',
                  ingredients: ['thinly sliced beef', 'green onion', 'onion','dashi', 'mirin', 'sake', 'soy sauce', 'rice'],
                  instructions:'Cook the beef with all the ingredients except rice. Cook rice separately. Top the rice with the meat and enjoy',
                  img:'https://lh3.ggpht.com/wEc_9tkOprK6RemYQ7jvhFE5wSEgqp2SS7EBLRpeCCtOjg9cMjZvIRIa7ZcZNweQ2HQQ-lOIMlQxkq5ecXWytu7Tydo=s535-c'
                },
                {
                  title: 'Chicken Katsudon',
                  ingredients: ['chicken breasts', 'green onion','dashi', 'ponzu', 'soy sauce', 'rice', 'panko'],
                  instructions:'Bread chicken cutlets in flour, egg and panko. Fry chicken cutlets in pan, and serve with rice.',
                  img:'https://iak6bcgzv2muon44-zippykid.netdna-ssl.com/wp-content/uploads/2017/02/Hawaiian-Style-Chicken-Katsu-67221.jpg'
                }
            ]//recipes
        }//state
        //functions
        this.spawnForm = this.spawnForm.bind(this);
        this.handleNewRecipe = this.handleNewRecipe.bind(this);
        this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
    }//con
    spawnForm(){
        this.setState({ showForm: true });
    }//def
    handleNewRecipe(newItem){
        var updatedRecipes = [...this.state.recipes, newItem];
        this.setState({recipes: updatedRecipes, showForm: false});
    }//def
    handleDeleteRecipe(recipeId){
        var recipesCopy = this.state.recipes.slice();
        var newRecipeSet = recipesCopy.filter( (r, index) => index !== recipeId);
        this.setState({recipes: newRecipeSet});
    }//def
    render(){
        return (<div>
            <NavBar formHandler={this.spawnForm} />
            { this.state.showForm ? <RecipeInput newRecipe={this.handleNewRecipe} /> : null}
            <RecipeTray recipes={this.state.recipes} deleteRecipe={this.handleDeleteRecipe} />
        </div>);
    }//rend
}//cla

export default RecipeApp;