import React, {Component} from 'react';

class NavBar extends Component {
    static defaultProps = {
        toggleFormOn(){
            
        }
    }
    render(){
        return (<nav>
            <ul>
                <li><a>Home</a></li>
                <li><a onClick={this.props.toggleFormOn}>New Recipe</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>);
    }//rend
}//clas

export default NavBar;