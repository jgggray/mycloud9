import React, {Component} from 'react';

class FormTray extends Component {
    constructor(props){
       super(props);
       this.state = {
           inputText: "",
           data: ["Eat pie", "have fun"]
       }
    }//
    render(){
        return (<div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const data = [...this.state.data, this.state.inputText];
                this.setState({data, inputText: ''});
            }}
            id="todo">
                <input
                    type="text"
                    name="inputText"
                    value={this.state.inputText}
                    onChange={(e) => {
                        this.setState({ [e.target.name]: e.target.value })
                    }}
                />
            </form>
            <ol>
                {this.state.data.map( item => (<li>{item}</li>)  ) }
            </ol>
        </div>);
    }//rend
}// class

export default FormTray;