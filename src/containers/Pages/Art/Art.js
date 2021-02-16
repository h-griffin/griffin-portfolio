import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Art.css';
import Header from '../../../components/Header/Header';
import DisplayItem from '../../../components/Display/DisplayItem/DisplayItem';

import toxic from '../../../images/art/atoxicsoul.png';
import bryce from '../../../images/art/equiptmunk.png';
import haaken from '../../../images/art/phokusme.png';
import tiger from '../../../images/art/tiger.png';
import luna from '../../../images/art/luna.png';
import deer from '../../../images/art/deer.png';
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
                    <Grid 
                        className={classes.DisplayParent}
                        flow="row dense" 
                        columns={9}>

                        <Cell width={3} height={2}>
                            <DisplayItem 
                                link="/"
                                icon={bryce}
                                text="bryce png"
                            ></DisplayItem>
                        </Cell>
                        
                        <Cell width={3} height={2}>
                            <DisplayItem 
                                    link="/"
                                    icon={haaken}
                                    text="haaken png"
                            ></DisplayItem> 
                        </Cell>

                        <Cell width={3} height={2} >
                            <DisplayItem 
                                    link="/"
                                    icon={toxic}
                                    text="toxic png"
                            ></DisplayItem>  
                        </Cell>



                        <Cell width={5} height={4} >
                            <DisplayItem 
                                link="/"
                                icon={deer}
                                text="deer png"
                            ></DisplayItem> 
                        </Cell>

                        <Cell width={4} height={2}>
                            <DisplayItem 
                                link="/"
                                icon={luna}
                                text="luna png"
                            ></DisplayItem>
                        </Cell>
                            
                        <Cell width={4} height={2} >
                            <DisplayItem 
                                link="/"
                                icon={tiger}
                                text="tiger png"
                            ></DisplayItem> 
                        </Cell>



                        <Cell width={3} height={2}>
                            <DisplayItem 
                                link="/"
                                icon={frank}
                                text="frank png"
                            ></DisplayItem>
                        </Cell>
                            
                        <Cell width={3} height={2}>
                            <DisplayItem 
                                link="/"
                                icon={mcgregor}
                                text="mcgregor png"
                            ></DisplayItem>
                        </Cell>

                        <Cell width={3} height={2}>
                            <DisplayItem 
                                link="/"
                                icon={elvis}
                                text="elvis png"
                            ></DisplayItem>  
                        </Cell>
                        

                        
                        <Cell width={5} height={6}>
                            <DisplayItem 
                                link="/"
                                icon={octo}
                                text="octo png"
                            ></DisplayItem>
                        </Cell>
                        
                        <Cell width={4} height={2}>
                            <DisplayItem 
                                link="/"
                                icon={dog}
                                text="dog png"
                            ></DisplayItem>
                        </Cell>
                                
                        <Cell width={4} height={2}>
                            <DisplayItem 
                                link="/"
                                icon={soldier}
                                text="soldier png"
                            ></DisplayItem> 
                        </Cell>
                    </Grid>
                </div>
            </Aux>
        )
    }
} 

export default Art;