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

                    <div className={classes.DisplayParent}>
                        
                        <DisplayItem 
                            className={classes.div1}
                            link="/"
                            icon={journal}
                            text="foodie journals"
                            
                            title="Foodie Journals"
                            >this is a paragraph about foodie journals</DisplayItem>

                        <DisplayItem 
                            className={classes.div2}
                            link="/"
                            icon={burger}
                            text="burger builder"
                            
                            title="Burger Builder"
                            >long description about burger builder </DisplayItem>
                        
                        <DisplayItem 
                            className={classes.div3}
                            link="/"
                            icon={slots}
                            text="slot machine"
                            
                            title="Slot Machine"
                            ></DisplayItem>
                        
                        <DisplayItem 
                            className={classes.div4}
                            link= '/code/rpg'
                            icon={rpg}
                            text="rpg game"
                            
                            title="RPG Game"
                            >description about rpg game</DisplayItem>
                        
                        <DisplayItem 
                            className={classes.div5}
                            link="/"
                            icon={city}
                            text="city exploerer API"
                            
                            title="City Exploerer API"
                            >all about the City Exploerer API</DisplayItem>
                    </div>
                    
                    
                </div>
            </Aux>
        )
    }
} 

export default Code;