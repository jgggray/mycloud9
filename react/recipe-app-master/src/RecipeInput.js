import React, {Component} from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: "",
          ingredients: [""],
          instructions: "",
          img: ""
        };
        
        //functions
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIngredient = this.handleChangeIngredient.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }//con
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }//def
    handleChangeIngredient(e){
        var index = Number(e.target.name.split('-')[1]);
        var changedIngredients = this.state.ingredients.slice();
        changedIngredients[index] = e.target.value;
        this.setState({ingredients: changedIngredients});
    }//def
    handleNewIngredient(e){
        this.setState({ingredients: [...this.state.ingredients, ""]});
    }//def
    handleSubmit(e){
        e.preventDefault();
        this.props.newRecipe({...this.state});
        this.setState({ title: "", ingredients: [""], instructions: "", img: "" });
    }//def
    render(){
        return (<div className="recipe-input">
            <form onSubmit={this.handleSubmit}>
                <input
                    name="title"
                    type="text"
                    autoComplete="off"
                    placeholder="Recipe title..."
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                {this.state.ingredients.map( (ing, i) => (
                    <input
                        name={`ingredient-${i}`}
                        type="text"
                        autoComplete="off"
                        placeholder="ingredient..."
                        value={ing}
                        onChange={this.handleChangeIngredient}
                    />
                ))}
                <button
                    type="button"
                    onClick={(e)=>{ this.setState({ingredients: [...this.state.ingredients, ""]}); }}
                >+</button>
                <input
                    name="instructions"
                    type="text"
                    autoComplete="off"
                    placeholder="Recipe instructions..."
                    value={this.state.instructions}
                    onChange={this.handleChange}
                />
                <input
                    name="img"
                    type="text"
                    autoComplete="off"
                    placeholder="Image url..."
                    value={this.state.img}
                    onChange={this.handleChange}
                />
                <button
                    type="submit"
                >Save</button>
            </form>
        </div>);
    }//rend
}//cla

export default RecipeInput;