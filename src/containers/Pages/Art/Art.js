import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Art.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';

class Art extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Art}>
                    <Header title="Art title">Art Header</Header>
                    <Display />
                    
                </div>
            </Aux>
        )
    }
} 

export default Art;