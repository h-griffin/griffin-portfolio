import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Certificates.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';
import DisplayItem from '../../../components/Display/DisplayItem/DisplayItem';


import burger from '../../../images/projects/burger-builder.png';
import slots from '../../../images/projects/slot-machine.png';


class Certificates extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Certificates}>
                    <Header title="Software Development Achievements">Certificates</Header>
                    
                    <DisplayItem 
                        link="/"
                        icon={burger}
                        text="foodie journals"
                    
                        >foodie journals </DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={burger}
                        text="foodie journals"
                    
                        >foodie journals </DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={burger}
                        text="foodie journals"
                    
                        >foodie journals </DisplayItem>
                    
                </div>
            </Aux>
        )
    }
} 

export default Certificates;