import React, {Component} from 'react';

class NavBar extends Component {
    static defaultProps = {
        formHandler(){}
    }//defaultprops
    render(){
        return (<header>
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a onClick={this.props.formHandler}>New Recipe</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </header>);
    }//rend
}//cla

export default NavBar;