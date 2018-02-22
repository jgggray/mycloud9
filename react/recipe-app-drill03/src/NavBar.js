import React, {Component} from 'react';

class NavBar extends Component {
    render(){
        return (<nav>
            <ul>
                <li>Home</li>
                <li onClick={this.props.onShowForm}>New Recipe</li>
                <li>More Recipes</li>
            </ul>
        </nav>);        
    }//ren
}//cla

export default NavBar;