import React, {Component} from 'react';


class RecipeInput extends Component {
    static defaultProps = {
        onClose(){
            
        }//onClose
        ,
        onSave(){
            
        }
    }//defaultProps
    constructor(props){
        super(props);
        this.state = {
            title: "",
            instructions: "",
            ingredients: [""],
            img: ""
        }//state
        //functions
        this.handleChange = this.handleChange.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }//con
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }//def
    handleNewIngredient(e){
        // var copyIngredients = [...this.state.ingredients, ""];
        const copyIngredients = this.state.ingredients;
        copyIngredients.push("");
        this.setState({ingredients: copyIngredients});
    }//def
    handleChangeIng(e){
        const index = Number(e.target.name.split("-")[1]);
        const copyIngredients = this.state.ingredients.map( (ing, i) => (
            i === index ? e.target.value : ing
        ));//dec ingredients
        this.setState({ingredients: copyIngredients});
    }//def
    handleSubmit(e){
        e.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
            title:"",
            instructions: "",
            ingredients: [""],
            img: ""
        });
    }//def handleSubmit
    render(){
        const {title, instructions, ingredients, img} = this.state;
        const {onClose} = this.props;
        let inputs = ingredients.map( (ing, i) => (
            <div className="recipe-form-line" key={`ingredient-${i}`}>
                <label>{i + 1}
                    <input
                        type="text"
                        name={`ingredients-${i}`}
                        value={ing}
                        size={45}
                        autoComplete="off"
                        placeholder=" Ingredient"
                        onChange={ this.handleChangeIng }
                    />
                </label>
            </div>
        ));
        
        return (<div className="recipe-form-container">
            <form className="recipe-form" onSubmit={this.handleSubmit}>
                <button type="button" className="close-button" onClick={onClose} >X</button>
                <div className="recipe-form-line">
                    <label htmlFor="recipe-title-input" >Title</label>
                    <input
                        id="recipe-title-input"
                        key="title"
                        name="title"
                        type="text"
                        value={title}
                        size={42}
                        autoComplete="off"
                        onChange={ this.handleChange }
                    />
                </div>
                <label
                    htmlFor="recipe-instructions-input"
                    style={{ marginTop: '5px'}}
                >
                    Instructions
                </label>
                <textarea
                    key="instructions"
                    id="recipe-instructions-input"
                    type="Instructions"
                    name="instructions"
                    rows='8'
                    cols='50'
                    autoComplete="off"
                    value={instructions}
                    onChange={ this.handleChange }
                />
                {inputs}
                <button
                    type="button"
                    onClick={this.handleNewIngredient}
                    className="buttons"
                >
                    +
                </button>
                <div className="recipe-form-line">
                    <label htmlFor="recipe-img-input">Image Url</label>
                    <input
                        id="recipe-img-input"
                        type="text"
                        placeholder=""
                        name='img'
                        value={img}
                        size={36}
                        autoComplete="off"
                        onChange={this.handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="buttons"
                    style={{alignSelf: 'flex-end', marginRight: 0}}
                >
                    Save
                </button>
            </form>
        </div>);
    }//rend
}//class

export default RecipeInput;