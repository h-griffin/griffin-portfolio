import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Home.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';
import Title from '../../../components/Header/Title/Title';

class Home extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Home}>
                    <Header title="home title">Home Header</Header>
                    
                </div>
            </Aux>
        )
    }
} 

export default Home;