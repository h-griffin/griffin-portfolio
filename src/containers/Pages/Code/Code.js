import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Code.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';
import DisplayItem from '../../../components/Display/DisplayItem/DisplayItem';

import journal from '../../../images/projects/foodie-journals.png';
import burger from '../../../images/projects/burger-builder.png';
import slots from '../../../images/projects/slot-machine.png';
import city from '../../../images/projects/city-explorer.png';
import rpg from '../../../images/rpg/big-title.png';

import { Route } from 'react-router-dom';
import Rpg from '../Rpg/Rpg';

class Code extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Code}>
                    

                    <Header title="Programming applications and games">Projects</Header>

                    <DisplayItem 
                        link="/"
                        icon={journal}
                        text="foodie journals"
                    
                        >foodie journals </DisplayItem>

                    <DisplayItem 
                        link="/"
                        icon={burger}
                        text="burger builder"
                    
                        >burger builder </DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={slots}
                        text="slot machine"
                    
                        >slot machine </DisplayItem>
                    
                    <DisplayItem 
                        link= '/code/rpg'
                        icon={rpg}
                        text="rpg game"
                    
                        >rpg game</DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={city}
                        text="city exploerer API"
                    
                        >City Exploerer API</DisplayItem>
                    
                </div>
            </Aux>
        )
    }
} 

export default Code;