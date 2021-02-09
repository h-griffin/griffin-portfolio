import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Body.css';
import Header from '../../components/Header/Header';
import Display from '../../components/Display/Display';

class Body extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Body}>
                    <p>∆ Body.js  ∆</p>
                    <Header />
                    <Display />
                    
                </div>
            </Aux>
        )
    }
} 

export default Body;