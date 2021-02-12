import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Art.css';
import Header from '../../../components/Header/Header';
import DisplayItem from '../../../components/Display/DisplayItem/DisplayItem';

import toxic from '../../../images/art/atoxicsoul.png';
import bryce from '../../../images/art/equiptmunk.png';
import haaken from '../../../images/art/phokusme.png';

import tiger from '../../../images/art/tiger.png';
import luna from '../../../images/art/luna.png';

import mcgregor from '../../../images/art/mcgregor.png';
import frank from '../../../images/art/frankiero.png';
import elvis from '../../../images/art/elvis.png';

import octo from '../../../images/art/octo.png';
import dog from '../../../images/art/dog.png';
import soldier from '../../../images/art/soldier.png';


class Art extends Component{

    render(){
        return(
            <Aux>
                <Header title="Traditional & Digital commission artwork">Commissions</Header>
                <div className={classes.Art}>
                        
                    <DisplayItem 
                        link="/"
                        icon={toxic}
                        text="toxic png"
                    
                        ></DisplayItem> 
                    
                    <DisplayItem 
                        link="/"
                        icon={bryce}
                        text="bryce png"
                    
                        ></DisplayItem>

                    <DisplayItem 
                        link="/"
                        icon={haaken}
                        text="haaken png"
                    
                        ></DisplayItem> 
                
                    <div className={classes.Cats}>
                        <DisplayItem 
                            style={{width: "90%"}}
                            link="/"
                            icon={luna}
                            text="luna png"
                        
                            ></DisplayItem>
                        
                        <DisplayItem 
                            style={{width: "90%"}}
                            link="/"
                            icon={tiger}
                            text="tiger png"
                        
                            ></DisplayItem> 
                    </div>
                    
                        
                    <DisplayItem 
                        link="/"
                        icon={mcgregor}
                        text="mcgregor png"
                    
                        ></DisplayItem>

                    <DisplayItem 
                        link="/"
                        icon={frank}
                        text="frank png"
                    
                        ></DisplayItem>

                    <DisplayItem 
                        link="/"
                        icon={elvis}
                        text="elvis png"
                    
                        ></DisplayItem> 

                    <div className={classes.OctoDog}>
                        <DisplayItem 
                            className={classes.Octo}
                            link="/"
                            icon={octo}
                            text="octo png"
                        
                                ></DisplayItem>

                        <div className={classes.Dogs}>
                            <DisplayItem 
                                link="/"
                                icon={dog}
                                text="dog png"
                            
                                ></DisplayItem>

                            <DisplayItem 
                                link="/"
                                icon={soldier}
                                text="soldier png"
                            
                                ></DisplayItem> 
                        </div>
                    
                    </div>
                    
                </div>
            </Aux>
        )
    }
} 

export default Art;