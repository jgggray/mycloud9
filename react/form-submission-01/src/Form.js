import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputText: '',
            data: ["rice", "hammers", "pineapples"]
        }
    }//con
    render(){
        // var listItems = this.state.data.map( function(item){
        //     return <li>{item}</li>;
        // });
        return (<div className="unit-form">
            <form onSubmit={(e) => {
                e.preventDefault();
                const data = [...this.state.data, this.state.inputText];
                this.setState( { data: data, inputText: ''} );
            }}>
                <input
                    type="text"
                    name="inputText"
                    value={this.state.inputText}
                    onChange={ (e) => {
                        this.setState({ [e.target.name]: e.target.value })
                    }}
                />
            </form>
            <ol>
                { this.state.data.map(item => (<li>{item}</li>)) } 
            </ol>
        </div>);
    }//
}//class

export default Form;