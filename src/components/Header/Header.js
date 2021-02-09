import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Header.css';
import Title from './Title/Title';

class Header extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Header}>
                    <h1>{this.props.children}</h1>
                    <Title>{this.props.title}</Title>
                </div>
            </Aux>
        )
    }
} 

export default Header;