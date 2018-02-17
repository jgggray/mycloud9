import React, {Component} from 'react';
import RecipeTray from './RecipeTray.js';
import NavBar from './NavBar.js';
import RecipeInput from './RecipeInput.js';

import './RecipeApp.css';

class RecipeApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            showForm: false,
            recipes: [
                {
                    title: "Bulgogi",
                    ingredients: ["beef", "shoyu"],
                    instructions: "Cook on grill until done.",
                    img: "https://www.justonecookbook.com/wp-content/uploads/2017/06/Bulgogi-600x400.jpg"
                },
                {
                    title: "Kalbi",
                    ingredients: ["short ribs", "shoyu"],
                    instructions: "Cook on grill until done.",
                    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/24/0/DV2501H_Kalbi-Short-Ribs-in-Da-Kitchen-Teriyaki-Sauce_s4x3.jpg.rend.hgtvcom.616.462.suffix/1466834513725.jpeg"
                },
                {
                    title: "Yangnyeong Tongdak",
                    ingredients: ["chicken", "black bean paste", "garlic"],
                    instructions: "Recipe at http://www.tofoodwithlove.com/2011/08/yangnyeom-tongdak-korean-spicy-fried.html.",
                    img: "http://2.bp.blogspot.com/-unL1HiGQ-cE/TkZIYe-pOVI/AAAAAAAAAw8/V_tv73N6Mc8/s640/IMG_0096.JPG8"
                }
            ]
        };//state
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleFormOn = this.toggleFormOn.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }//con
    handleSubmit(newRecipe){
        this.setState({recipes: [...this.state.recipes, newRecipe], showForm: false});
    }//def
    toggleFormOn(){
        this.setState({showForm: true});
    }//def
    handleDelete(recipeIndex){
        var newRecipeSet = this.state.recipes.filter( (r, i) => i !== recipeIndex );
        this.setState({recipes: newRecipeSet});
    }//def
    render(){
        return (<div>
            <NavBar toggleFormOn={this.toggleFormOn} />
            { this.state.showForm ? <RecipeInput onSave={this.handleSubmit} /> : null}
            <RecipeTray recipes={this.state.recipes} onDelete={this.handleDelete} />
        </div>);
    }//rend
}//cla

export default RecipeApp;