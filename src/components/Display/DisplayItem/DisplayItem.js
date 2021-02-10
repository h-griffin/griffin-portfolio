import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './DisplayItem.css';

class DisplayItem extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.DisplayItem}>

                    <a href={this.props.link}>
                        <img 
                            className={classes.DisplayImage}
                            src={this.props.icon}
                            alt={this.props.text}
                        ></img>
                    </a>
                    {this.props.children}

                </div>
            </Aux>
        )
    }
} 

export default DisplayItem;