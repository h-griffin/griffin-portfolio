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

class Certificates extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Certificates}>
                    <Header title="Software Development Achievements">Certificates</Header>
                    
                    <DisplayItem 
                        link="/"
                        icon={python}
                        text="python"
                        ></DisplayItem>

                    <DisplayItem 
                        link="/"
                        icon={react}
                        text="react"
                        ></DisplayItem>

                    <DisplayItem 
                        link="/"
                        icon={c}
                        text="csharp"
                        ></DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={jq}
                        text="jquery"
                        ></DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={mc}
                        text="minecraft"
                        ></DisplayItem>

                    
                </div>
            </Aux>
        )
    }
} 

export default Certificates;