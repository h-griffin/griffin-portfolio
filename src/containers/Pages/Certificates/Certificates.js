import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Certificates.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';
import DisplayItem from '../../../components/Display/DisplayItem/DisplayItem';


import c from '../../../images/certificates/CSharp-Certificate.jpg';
import jq from '../../../images/certificates/JQuery-Certificate.jpg';
import mc from '../../../images/certificates/Minecraft-Certificate.png';
import python from '../../../images/certificates/Python-Certificate.jpg';
import react from '../../../images/certificates/React-Certificate.jpg';

import { Grid, Cell } from 'styled-css-grid';

class Certificates extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Certificates}>
                    <Header title="Software Development Achievements">Certificates</Header>
                    
                    <Grid 
                        className={classes.DisplayParent}
                        columns="repeat(auto-fit,minmax(220px,1fr))" 
                        gap="10px"
                        >
                        
                        <Cell>
                           <DisplayItem 
                            link="/"
                            icon={python}
                            text="python"
                            ></DisplayItem> 
                        </Cell>
                        
                        <Cell>
                           <DisplayItem 
                            link="/"
                            icon={react}
                            text="react"
                            ></DisplayItem>
 
                        </Cell>

                        <Cell>
                           <DisplayItem 
                            link="/"
                            icon={c}
                            text="csharp"
                            ></DisplayItem> 
                        </Cell>
                        
                        <Cell>
                           <DisplayItem 
                            link="/"
                            icon={jq}
                            text="jquery"
                            ></DisplayItem>
                         
                        </Cell>
                        
                        <Cell>
                           <DisplayItem 
                            link="/"
                            icon={mc}
                            text="minecraft"
                            ></DisplayItem>
 
                        </Cell>
                        
                    
                    </Grid>
                    
                </div>
            </Aux>
        )
    }
} 

export default Certificates;