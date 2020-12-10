import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Body.css';

class Body extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Body}>
                    <h1>body.js</h1>
                </div>
            </Aux>
        )
    }
} 

export default Body;