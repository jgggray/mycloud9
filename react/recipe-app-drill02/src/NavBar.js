import React, {Component} from 'react';

class NavBar extends Component {
    render(){
        return (<nav>
            <ul>
                <li>Home</li>
                <li onClick={this.props.formOn}>New Recipe</li>
                <li>Contact</li>
            </ul>
        </nav>);
    }
}//cla

export default NavBar;