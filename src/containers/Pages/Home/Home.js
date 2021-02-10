import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Home.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';
import Title from '../../../components/Header/Title/Title';
import griffin from '../../../images/griffin.jpg';

class Home extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Home}>
                    <Header title="Software Developer">Haley Griffin</Header>
                    
                    <img src={griffin} alt='griffin'></img>
                </div>
            </Aux>
        )
    }
} 

export default Home;