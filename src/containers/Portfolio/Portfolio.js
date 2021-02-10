import React, { Component } from 'react';

import classes from './Portfolio.css';
import Body from '../Body/Body';
import NavigationItems from '../../components/Navigation/NavigationItems';

import Aux from '../../hoc/Aux/Aux';

class Portfolio extends Component{
     
    render(){

        return (
            <Aux className={classes.Portfolio}>
                
                <NavigationItems />
                <Body />
            </Aux>  

        );
    }
}

export default Portfolio;