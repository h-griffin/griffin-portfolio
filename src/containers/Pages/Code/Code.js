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

import { Grid, Cell } from 'styled-css-grid';

class Code extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Code}>
                    

                    <Header title="Programming applications and games">Projects</Header>

                    <Grid 
                        className={classes.DisplayParent}
                        columns="repeat(auto-fit,minmax(220px,1fr))" 
                        gap="10px"
                        >

                        <Cell>
                            <DisplayItem 
                                link="/"
                                icon={journal}
                                text="foodie journals"
                                
                                title="Foodie Journals"
                                >this is a paragraph about foodie journals</DisplayItem>
                        </Cell>

                        <Cell>
                            <DisplayItem 
                                link="/"
                                icon={burger}
                                text="burger builder"
                                
                                title="Burger Builder"
                                >long description about burger builder </DisplayItem>
                        </Cell>
                        
                        <Cell>
                            <DisplayItem 
                                link="/"
                                icon={slots}
                                text="slot machine"
                                
                                title="Slot Machine"
                                ></DisplayItem>
                        </Cell>
                        
                        <Cell>
                            <DisplayItem 
                                link= '/code/rpg'
                                icon={rpg}
                                text="rpg game"
                                
                                title="RPG Game"
                                >click for snapshots</DisplayItem>
                        </Cell>
                        
                        <Cell>
                            <DisplayItem 
                                link="/"
                                icon={city}
                                text="city exploerer API"
                                
                                title="City Exploerer API"
                                >all about the City Exploerer API</DisplayItem>
                        </Cell>
                    </Grid>
                </div>
            </Aux>
        )
    }
} 

export default Code;