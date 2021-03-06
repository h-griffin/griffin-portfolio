import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Display.css';


class Display extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Display}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
} 

export default Display;