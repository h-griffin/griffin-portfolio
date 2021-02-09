import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Certificates.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';

class Certificates extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Certificates}>
                    <Header title="Certificates title">Certificates Header</Header>
                    <Display />
                    
                </div>
            </Aux>
        )
    }
} 

export default Certificates;