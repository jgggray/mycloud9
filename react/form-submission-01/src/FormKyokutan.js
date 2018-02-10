import React, {Component} from 'react';

class FormKyokutan extends Component {
    constructor(props){
        super(props);
        this.state = { todoList: [], todoInput: "" };
    }//cons
    render(){
        return (<div>
            <form onSubmit={ e => {
                e.preventDefault();
                const dummyList = [...this.state.todoList, this.state.todoInput];
                this.setState({ todoList: dummyList, todoInput: '' });
            }}>
                <input
                    name="todoInput"
                    type="text"
                    value={this.state.todoInput}
                    onChange={ e => {
                        this.setState({ [e.target.name]: e.target.value });
                    }}
                />
            </form>
            <ol>
                { this.state.todoList.map( item => (<li>{item}</li>) ) }
            </ol>
        </div>);
    }//rend
}//cla

export default FormKyokutan;