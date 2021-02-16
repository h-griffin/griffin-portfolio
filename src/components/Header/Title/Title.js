import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Title.css';

class Title extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Title}>
                    <p>{this.props.children}</p>
                </div>
            </Aux>
        )
    }
} 

export default Title;