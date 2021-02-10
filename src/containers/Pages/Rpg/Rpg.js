import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Rpg.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';
import DisplayItem from '../../../components/Display/DisplayItem/DisplayItem';


import title from '../../../images/rpg/title.png';
import shop from '../../../images/rpg/shop-map.png';
import sign from '../../../images/rpg/countryside.png';

import shopinv from '../../../images/rpg/shop-interface.png';
import playerinv from '../../../images/rpg/inventory.png';
import stats from '../../../images/rpg/stats.png';

import quest from '../../../images/rpg/quest-items.png';


class Rpg extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Rpg}>
                    <Header title="2D Adventure game in C# & Unity">Rpg</Header>
                    
                    <DisplayItem 
                        link="/"
                        icon={title}
                        text="Main menu"
                    
                        >Main menu </DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={shop}
                        text="Shop interface"
                    
                        >Shop interface </DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={sign}
                        text="Dialogue and quest"
                    
                        >Dialogue and quest </DisplayItem>

                    <DisplayItem 
                        link="/"
                        icon={shopinv}
                        text="shop inventory"
                    
                        >shop inventory </DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={playerinv}
                        text="player inventory"
                    
                        >player inventory </DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={stats}
                        text="player stats"
                    
                        >player stats </DisplayItem>

                    <DisplayItem 
                        link="/"
                        icon={quest}
                        text="quest items"
                    
                        >quest items </DisplayItem>
                    
                    
                </div>
            </Aux>
        )
    }
} 

export default Rpg;