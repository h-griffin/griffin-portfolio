import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Art.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';
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
                <div className={classes.Art}>
                    <Header title="Traditional & Digital commission artwork">Commissions</Header>
                        
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
                    
                    
                    <div id='cats'>
                        <DisplayItem 
                            link="/"
                            icon={luna}
                            text="luna png"
                        
                            ></DisplayItem>

                        <DisplayItem 
                            link="/"
                            icon={tiger}
                            text="tiger png"
                        
                            ></DisplayItem> 
                    </div>

                    <div id='portraits'>
                    <DisplayItem 
                            link="/"
                            icon={mcgregor}
                            text="toxic png"
                        
                            ></DisplayItem>

                        <DisplayItem 
                            link="/"
                            icon={frank}
                            text="bryce png"
                        
                            ></DisplayItem>

                        <DisplayItem 
                            link="/"
                            icon={elvis}
                            text="haaken png"
                        
                            ></DisplayItem> 
                    </div>

                    <div id='octo'>
                    <DisplayItem 
                            link="/"
                            icon={octo}
                            text="haaken png"
                        
                            ></DisplayItem> 
                    </div>

                    <div id='dogs'>
                        <DisplayItem 
                            link="/"
                            icon={dog}
                            text="haaken png"
                        
                            ></DisplayItem>
                        <DisplayItem 
                            link="/"
                            icon={soldier}
                            text="haaken png"
                        
                            ></DisplayItem>
                    </div>

                </div>
            </Aux>
        )
    }
} 

export default Art;