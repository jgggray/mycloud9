import React from 'react';
import './RecipeApp.css';

import NavBar from './NavBar.js';
import RecipeInput from './RecipeInput.js';
import RecipeTray from './RecipeTray.js';


class RecipeApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            formOn: false,
            recipes: [
                {
                  title: 'Shabu Shabu',
                  ingredients: ['sirloin beef, thinly sliced', 'enoki mushrooms', 'kombu seaweed', 'sesame oil', 'ponzu sauce'],
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
                  title: 'Garuk',
                  ingredients: ['thinly sliced beef', 'green onion', 'onion','dashi', 'mirin', 'sake', 'soy sauce', 'rice'],
                  instructions:'Cook the beef with all the ingredients except rice. Cook rice separately. Top the rice with the meat and enjoy',
                  img:'https://lh3.ggpht.com/wEc_9tkOprK6RemYQ7jvhFE5wSEgqp2SS7EBLRpeCCtOjg9cMjZvIRIa7ZcZNweQ2HQQ-lOIMlQxkq5ecXWytu7Tydo=s535-c'
                }
            ]//recipes
        }//this.state
        this.handleNewRecipe = this.handleNewRecipe.bind(this);
        this.handleShowForm = this.handleShowForm.bind(this);
        this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
    }//cons
    handleShowForm(){
        this.setState({formOn: true});
    }
    handleNewRecipe(newItem){
        this.setState({recipes: [...this.state.recipes, newItem], formOn: false});
    }//newRe
    handleDeleteRecipe(recipeId){
        let newRecipeSet = this.state.recipes.filter( (r, i) => i !== recipeId );
        this.setState({recipes: newRecipeSet});
    }//handleDeleteRecipe
    render(){
        return (<div className="recipe-app">
            <NavBar onShowForm={this.handleShowForm} />
            { this.state.formOn ? <RecipeInput onNewRecipe={this.handleNewRecipe} /> : null}
            <RecipeTray recipes={this.state.recipes} onDeleteRecipe={this.handleDeleteRecipe} />
        </div>);
    }//rend 
}//cla

export default RecipeApp;