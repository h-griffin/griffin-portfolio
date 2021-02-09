import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Code.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';

class Code extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Code}>
                    {/* <p>Code.js</p> */}
                    
                    <Header title="Code title">Code Header</Header>
                    <Display />
                    
                </div>
            </Aux>
        )
    }
} 

export default Code;