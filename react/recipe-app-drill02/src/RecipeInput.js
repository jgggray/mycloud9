import React, {Component} from 'react';

class RecipeInput extends Component {
    static defaultProps = {
        onSave(){
            alert("onSave not configured");
        }//onSave
    }//defaultProps
    constructor(props){
        super(props);
        this.state = {
            title: "",
            ingredients: [""],
            instructions: "",
            img: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }//con
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }//handChange
    handleChangeIng(e){
        var ingIndex = Number(e.target.name.split("-")[1]);
        var ingredientsCopy = this.state.ingredients;
        ingredientsCopy[ingIndex] = e.target.value;
        this.setState({ingredients: ingredientsCopy});
    }//handChange
    handleNewIngredient(e){
        this.setState({ingredients: [...this.state.ingredients, ""]});
    }//handleNewIngredient
    handleSubmit(e){
        e.preventDefault();
        this.props.onSave(this.state);
        this.setState({title: "",
            ingredients: [""],
            instructions: "",
            img: ""
        });
    }//handleSub
    render(){
        return (<form onSubmit={this.handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Recipe title..."
                autoComplete="off"
                value={this.state.title}
                onChange={this.handleChange}
            />
            {this.state.ingredients.map( (ing, i) => (
                <input
                    name={`ingredient-${i}`}
                    type="text"
                    placeholder={`ingredient ${i + 1}...`}
                    autoComplete="off"
                    value={ing}
                    onChange={this.handleChangeIng}
                />
            ))}
            <button type="button" onClick={this.handleNewIngredient}>+</button>
            <input
                name="instructions"
                type="text"
                placeholder="Recipe instructions..."
                autoComplete="off"
                value={this.state.instructions}
                onChange={this.handleChange}
            />
            <input
                name="img"
                type="text"
                placeholder="Image url..."
                autoComplete="off"
                value={this.state.img}
                onChange={this.handleChange}
            />
            <button type="submit">Save</button>
        </form>);
    }//rend
}//cla

export default RecipeInput;