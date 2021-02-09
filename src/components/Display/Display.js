import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Display.css';

import DisplayItem from '../Display/DisplayItem/DisplayItem';

class Display extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Display}>
                    {/* <h1>Display.js</h1> */}
                    <DisplayItem>DisplayItem child</DisplayItem>
                    <DisplayItem>DisplayItem child</DisplayItem>
                    <DisplayItem>DisplayItem child</DisplayItem>

                    <DisplayItem>DisplayItem child</DisplayItem>
                    <DisplayItem>DisplayItem child</DisplayItem>
                    <DisplayItem>DisplayItem child</DisplayItem>
                </div>
            </Aux>
        )
    }
} 

export default Display;