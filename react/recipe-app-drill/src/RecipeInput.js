import React, {Component} from 'react';

class RecipeInput extends Component {
    static defaultProps = {
        onSave(){
            
        }
    }//defaultProps
    constructor(props){
        super(props);
        this.state = {
            title: "",
            ingredients: [""],
            instructions: "",
            img: ""
        }//state
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.addIngredientField = this.addIngredientField.bind(this);
        this.handleNewRecipe = this.handleNewRecipe.bind(this);
    }//con
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }//def
    handleChangeIng(e){
        var ingredientIndex = Number(e.target.name.split("-")[1]);
        var ingredientsCopy = this.state.ingredients.slice();
        ingredientsCopy[ingredientIndex] = e.target.value;
        this.setState({ingredients: ingredientsCopy});
    }//def
    addIngredientField(e){
        this.setState({ingredients: [...this.state.ingredients, ""]});
    }//def
    handleNewRecipe(e){
        e.preventDefault();
        this.props.onSave(this.state);
        this.setState({
            title: "",
            ingredients: [""],
            instructions: "",
            img: ""
        });
    }//def
    render(){
        return (<div className="recipe-input">
            <form onSubmit={this.handleNewRecipe}>
                <input
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Recipe title..."
                />
                <input
                    name="instructions"
                    type="text"
                    autoComplete="off"
                    value={this.state.instructions}
                    onChange={this.handleChange}
                    placeholder="Recipe instructions..."
                />
                {this.state.ingredients.map( (ing, i) =>(
                    <input
                        name={`ingredient-${i}`}
                        type="text"
                        autoComplete="off"
                        value={ing}
                        onChange={this.handleChangeIng}
                        placeholder="Ingredient..."
                    />
                ))}
                <button
                    type="button"
                    onClick={this.addIngredientField}
                >
                    +
                </button>
                <input
                    name="img"
                    type="text"
                    autoComplete="off"
                    value={this.state.img}
                    onChange={this.handleChange}
                    placeholder="Image url..."
                />
                <button type="submit">
                    Save
                </button>
            </form>
        </div>);
    }//rend
}//cla

export default RecipeInput;