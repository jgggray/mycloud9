import React, {Component} from 'react';

class RecipeInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            ingredients: [''],
            instructions: "",
            img: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    handleChangeIng(e){
        var ingredientId = Number(e.target.name.split("-")[1]);
        var ingredientsCopy = this.state.ingredients;
        ingredientsCopy[ingredientId] = e.target.value;
        this.setState({ingredients: ingredientsCopy});
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onNewRecipe(this.state);
        this.setState({
            title: '',
            ingredients: [''],
            instructions: '',
            img: ''
        });
    }
    handleNewIngredient(){
        this.setState({ingredients: [...this.state.ingredients, ""]});
    }
    handleRemoveIngredient(){
        var newIngSet = this.state.ingredients.filter( (ingredient, index) => {
           return index !== this.state.ingredients.length - 1; 
        });
        this.setState({ingredients: newIngSet});
    }
    render(){
        return (<form onSubmit={this.handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Recipe title..."
                value={this.state.title}
                onChange={this.handleChange}
                autoComplete="off"
            />
            <input
                name="instructions"
                type="text"
                placeholder="Instructions..."
                value={this.state.instructions}
                onChange={this.handleChange}
                autoComplete="off"
            />
            {this.state.ingredients.map( (ing, i) => (
                <input
                    name={`ingredient-${i}`}
                    type="text"
                    placeholder={`Ingredient ${i + 1}`}
                    value={ing}
                    onChange={this.handleChangeIng}
                    autoComplete="off"
                />
            ))}
            <div className="modify-ingredients">
                <button id="add-ingredient" type="button" onClick={this.handleNewIngredient}> 
                    +
                </button>
                <button id="remove-ingredient" type="button" onClick={this.handleRemoveIngredient}> 
                    -
                </button>
            </div>
            <input
                name="img"
                type="text"
                placeholder="Image url..."
                value={this.state.img}
                onChange={this.handleChange}
                autoComplete="off"
            />
            <button type="submit">Save</button>
        </form>);
    }//rend
}//cla

export default RecipeInput;