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

import { Grid, Cell } from 'styled-css-grid';

class Art extends Component{

    render(){
        return(
            <Aux>
                <Header title="Traditional & Digital commission artwork">Commissions</Header>
                <div className={classes.Art}>
                        
                    <Grid 
                        columns={"100px 1fr 100px"}
                        rows={"45px 1fr 45px"}
                        areas={[
                        "bryce hunter  haaken",
                        "cat   tiger ",
                        "mcgregor frank  elvis",
                        "octo dogone ",
                        "octo dogtwo"
                        ]}> 

                    <Cell area="bryce" >
                       <DisplayItem 
                        link="/"
                        icon={toxic}
                        text="toxic png"
                    
                        ></DisplayItem>  
                    </Cell>
                    
                    <Cell area="hunter">
                        <DisplayItem 
                        link="/"
                        icon={bryce}
                        text="bryce png"
                    
                        ></DisplayItem>

                    </Cell>
                    
                    <Cell area="haaken">
                       <DisplayItem 
                        link="/"
                        icon={haaken}
                        text="haaken png"
                    
                        ></DisplayItem> 
                 
                    </Cell>
                    

                    <Cell area="cat">
                        <DisplayItem 
                            style={{width: "90%"}}
                            link="/"
                            icon={luna}
                            text="luna png"
                        
                            ></DisplayItem>
                        
                    </Cell>
                        
                    <Cell are="tiger">
                        <DisplayItem 
                            style={{width: "90%"}}
                            link="/"
                            icon={tiger}
                            text="tiger png"
                        
                            ></DisplayItem> 
                        
                    </Cell>
                        
                    <Cell area="mcgregor">
                        <DisplayItem 
                        link="/"
                        icon={mcgregor}
                        text="mcgregor png"
                    
                        ></DisplayItem>

                    </Cell>
                    
                    <Cell area="frank">
                        <DisplayItem 
                        link="/"
                        icon={frank}
                        text="frank png"
                    
                        ></DisplayItem>
                    </Cell>
                    

                    <Cell area="elvis">
                       <DisplayItem 
                        link="/"
                        icon={elvis}
                        text="elvis png"
                    
                        ></DisplayItem>  
                    </Cell>
                    
{/* 
                    <Cell area="octo">
                         <DisplayItem 
                            className={classes.Octo}
                            link="/"
                            icon={octo}
                            text="octo png"
                        
                                ></DisplayItem>

                    </Cell>
                       
                     <Cell area="dogone">
                         <DisplayItem 
                                link="/"
                                icon={dog}
                                text="dog png"
                            
                                ></DisplayItem>

                     </Cell>
                            
                    <Cell area="dogtwo">
                        <DisplayItem 
                                link="/"
                                icon={soldier}
                                text="soldier png"
                            
                                ></DisplayItem> 
                    </Cell>
                             */}
                    </Grid>
                </div>
            </Aux>
        )
    }
} 

export default Art;