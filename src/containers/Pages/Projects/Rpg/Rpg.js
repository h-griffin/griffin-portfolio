import React, { Component } from 'react';

import Aux from '../../../../hoc/Aux/Aux';
import classes from './Rpg.css';
import Header from '../../../../components/Header/Header';
import Display from '../../../../components/Display/Display';
import DisplayItem from '../../../../components/Display/DisplayItem/DisplayItem';


import title from '../../../../images/rpg/title.png';
import shop from '../../../../images/rpg/shop-map.png';
import sign from '../../../../images/rpg/countryside.png';

import shopinv from '../../../../images/rpg/shop-interface.png';
import playerinv from '../../../../images/rpg/inventory.png';
import stats from '../../../../images/rpg/stats.png';

import quest from '../../../../images/rpg/quest-items.png';
import { Grid, Cell } from 'styled-css-grid';

import { Route } from 'react-router-dom';


import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


class Rpg extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Rpg}>

                    <Route path="/code" active />

                    <Header 
                        title="2D Adventure game with C# & Unity"
                        >RPG Snapshots
                    
                        <a href="/code" className={classes.Arrow}> 
                                <FontAwesomeIcon icon={faChevronLeft} size="lg"/></a>
                    </Header>

                    <div>
                        <a className={classes.Icons} href="https://github.com/h-griffin/UdemyRPG" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="lg" /> </a>
                        UdemyRPG
                    </div>

                    <Grid 
                        className={classes.DisplayParent}
                        columns="repeat(auto-fit,minmax(220px,1fr))" 
                        gap="10px"
                        >

                        <Cell>
                            <DisplayItem 
                                // link="/"
                                icon={title}
                                text="Main menu"
                                // title="Main menu"
                                >Main menu</DisplayItem>
                        </Cell>
                    
                        <Cell>
                            <DisplayItem 
                                // link="/"
                                icon={shop}
                                text="Shop interface"

                                title=" "
                                >Shop interface </DisplayItem>
                        </Cell>
                        
                        <Cell>
                            <DisplayItem 
                                // link="/"
                                icon={sign}
                                text="Dialogue and quest"
                            
                                >Dialogue and quest </DisplayItem>
                        </Cell>
                        
                        <Cell>
                            <DisplayItem 
                                // link="/"
                                icon={shopinv}
                                text="shop inventory"
                            
                                >shop inventory </DisplayItem>
                        </Cell>
                        
                        <Cell>
                            <DisplayItem 
                                // link="/"
                                icon={playerinv}
                                text="player inventory"
                            
                                >player inventory </DisplayItem>
                        </Cell>
                        
                        <Cell>
                            <DisplayItem 
                                // link="/"
                                icon={stats}
                                text="player stats"
                            
                                >player stats </DisplayItem>
                        </Cell>
                    
                    <Cell>
                        <DisplayItem 
                            // link="/"
                            icon={quest}
                            text="quest items"
                        
                            >quest items </DisplayItem>
                    </Cell>
                </Grid>
            </div>
        </Aux>
        )
    }
} 

export default Rpg;