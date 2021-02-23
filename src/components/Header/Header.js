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
                    <p className={classes.Title}>{this.props.title}</p>
                    <small>{this.props.note}</small>
                </div>
            </Aux>
        )
    }
} 

export default Header;