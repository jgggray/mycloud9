import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.css';


class Header extends Component {
    static defaultProps = {
        onNewRecipe(){
            
        }
    }
    
    static propTypes = {
        onNewRecipe: PropTypes.func
    }
    
    render(){
        return(<header>
            <nav>
                <ul class="links">
                    <li><a>Home</a></li>
                    <li ><a onClick={this.props.onNewRecipe} >New Recipe</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </header>);
    }//rend
}//class

export default Header;