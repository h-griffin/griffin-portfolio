import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Aux from '../../../hoc/Aux/Aux';
import classes from './DisplayItem.css';

class DisplayItem extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.DisplayItem}>

                    <a className={classes.Thumbnail} 
                    
                        href={this.props.link} 
                        target={this.props.target} rel={this.props.rel}>
                        <img 
                            className={classes.DisplayImage}
                            src={this.props.icon}
                            alt={this.props.text}
                        ></img>

                        <a className={classes.Live}>
                            {this.props.hover}
                        </a>
                        <a className={classes.Code}>
                            <FontAwesomeIcon icon={faGithub}/> &nbsp;
                            {this.props.lower}
                        </a>
                    </a>

                    <div className={classes.DisplayDescription}>
                        <h3 style={{fontWeight: "500"}}>{this.props.title}</h3>
                        <p style={{fontSize: "medium"}}>{this.props.description}</p>
                        <p>{this.props.children}</p>
                    </div>

                </div>
            </Aux>
        )
    }
} 

export default DisplayItem;