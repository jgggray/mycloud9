import React, {Component} from 'react';

class ButtonTray extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Bobby Boy"
        }//sta
        //click states
        this.uppercaseName = this.uppercaseName.bind(this);
    }//con
    uppercaseName(e){
        this.setState( (prevState, props) => ({ name: prevState.name.toUpperCase() }) );
    }
    render(){
        var {name} = this.state;
        return (<div>
            <p>My name is {name}</p>
            <button onClick={ () => this.setState({ name: "Bongy Boy"}) } >Change name</button>
            <button onClick={ this.uppercaseName } >Alter name</button>
        </div>);
    }//rend
}//cla

export default ButtonTray;