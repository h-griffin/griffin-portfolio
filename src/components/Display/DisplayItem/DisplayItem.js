import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'



import Aux from '../../../hoc/Aux/Aux';
import classes from './DisplayItem.css';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

class DisplayItem extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.DisplayItem}>

                    <a 
                    className={classes.Thumbnail} 
                    href={this.props.link} 
                    target={this.props.target} rel={this.props.rel}>
                        <img 
                            className={classes.DisplayImage}
                            src={this.props.icon}
                            alt={this.props.text}
                        ></img>
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