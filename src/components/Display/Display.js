import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Display.css';

class Display extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Display}>
                    <h1>Display.js</h1>
                </div>
            </Aux>
        )
    }
} 

export default Display;