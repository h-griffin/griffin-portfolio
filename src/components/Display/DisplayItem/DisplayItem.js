import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './DisplayItem.css';

class DisplayItem extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.DisplayItem}>

                    <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                        <img 
                            className={classes.DisplayImage}
                            src={this.props.icon}
                            alt={this.props.text}
                        ></img>
                    </a>

                    <div className={classes.DisplayDescription}>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.children}</p>
                    </div>

                </div>
            </Aux>
        )
    }
} 

export default DisplayItem;