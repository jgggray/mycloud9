import React, {Component} from 'react';

class FormMaster extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: "",
            todoList: ["eat pie", "more pie"]
        }//state
    }//cons
    render(){
        return (<div>
            <form onSubmit={ (e) => {
                e.preventDefault();
                const todoList = [ ...this.state.todoList, this.state.inputText ];
                this.setState({ todoList: todoList, inputText: '' });
            }}>
                <input
                    type="text"
                    name="inputText"
                    value={this.state.inputText}
                    onChange={ (e) => this.setState({ [e.target.name]: e.target.value }) }
                />
            </form>
            <ol>
                {this.state.todoList.map( item => (<li>{item}</li>) )}
            </ol>
        </div>);
    }//rend
}//class

export default FormMaster;