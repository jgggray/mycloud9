import React from 'react';

import NavBar from './NavBar.js';
import RecipeInput from './RecipeInput.js';
import RecipeTray from './RecipeTray.js';


import './RecipeApp.css';

class RecipeApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showForm: false,
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
        };//state
        this.formOn = this.formOn.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }//con
    formOn(){
        this.setState({showForm: true});
    }//formOn
    onSave(newRecipe){
        this.setState({ recipes: [...this.state.recipes, newRecipe] ,showForm: false});
    }//onSave
    onDelete(deleteId){
        // alert("onDelete deleteId: " + deleteId);
        var newRecipeSet = this.state.recipes.filter( (r, i) => i !== deleteId );
        this.setState({recipes: newRecipeSet});
    }//onDelete
    render(){
        return (<div>
            <NavBar formOn={this.formOn} />
            { this.state.showForm ? <RecipeInput onSave={this.onSave} /> : null }
            <RecipeTray recipes={this.state.recipes} onDelete={this.onDelete} />
        </div>);
    }//rend
}//cla

export default RecipeApp;