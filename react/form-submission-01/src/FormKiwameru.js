import React, {Component} from 'react';

class FormKiwameru extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoInput: "",
            todoList: []
        }//state
    }//cons
    render(){
        return (<div>
            <form
                onSubmit={ e => {
                    e.preventDefault();
                    const todoList = [...this.state.todoList, this.state.todoInput];
                    this.setState({ todoList: todoList, todoInput: '' });
                }}
                id="todoForm"
            >
                <input
                    type="text"
                    name="todoInput"
                    value={this.state.todoInput}
                    onChange={ (e) => this.setState( {[e.target.name]: e.target.value} ) }
                />
                
            </form>
            <ol>
                {this.state.todoList.map( item => (<li>{item}</li>) )}
            </ol>
        </div>);
    }//rend
}//class

export default FormKiwameru;