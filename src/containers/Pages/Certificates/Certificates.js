import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Certificates.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';
import DisplayItem from '../../../components/Display/DisplayItem/DisplayItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import c from '../../../images/certificates/CSharp-Certificate.jpg';
import jq from '../../../images/certificates/JQuery-Certificate.jpg';
import mc from '../../../images/certificates/Minecraft-Certificate.png';
import python from '../../../images/certificates/Python-Certificate.jpg';
import react from '../../../images/certificates/React-Certificate.jpg';

class Certificates extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Certificates}>
                    <Header title="Software Development Achievements">Certificates</Header>
                    
                    <div>
                        <a className={classes.Icons} href="https://www.linkedin.com/in/h-griffin/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>
                        h-griffin
                    </div>
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
                            >Python</DisplayItem> 
                        </Cell>
                        
                        <Cell>
                           <DisplayItem 
                                link="/"
                                icon={react}
                                text="react"
                            >React</DisplayItem>
                        </Cell>

                        <Cell>
                           <DisplayItem 
                                link="/"
                                icon={c}
                                text="csharp"
                            >C#</DisplayItem> 
                        </Cell>
                        
                        <Cell>
                           <DisplayItem 
                                link="/"
                                icon={jq}
                                text="jquery"
                            >JQuery</DisplayItem>
                        </Cell>
                        
                        <Cell>
                           <DisplayItem 
                                link="/"
                                icon={mc}
                                text="minecraft"
                            >Minecraft</DisplayItem>
                        </Cell>
                    </Grid>
                </div>
            </Aux>
        )
    }
} 

export default Certificates;