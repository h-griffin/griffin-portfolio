import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './DisplayItem.css';

class DisplayItem extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.DisplayItem}>
                    <h1>DisplayItem.js</h1>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
} 

export default DisplayItem;