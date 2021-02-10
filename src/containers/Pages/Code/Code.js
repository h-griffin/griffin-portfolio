import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Code.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';
import DisplayItem from '../../../components/Display/DisplayItem/DisplayItem';

import journal from '../../../images/projects/foodie-journals.png';
import burger from '../../../images/projects/burger-builder.png';
import slots from '../../../images/projects/slot-machine.png';

class Code extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Code}>
                    {/* <p>Code.js</p> */}
                    
                    {/* <Header title=
                        <div align='center' >
                            <img alt="Python" width="56px" 
                                src="https://img.icons8.com/color/96/000000/python.png" />
                            <img alt="JavaScript" width="56px" 
                                src="https://img.icons8.com/color/96/000000/javascript.png" />
                            <img alt="React" width="56px"
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                            <img alt="C-sharp" width="56px" 
                                src="https://img.icons8.com/color/48/000000/c-sharp-logo-2.png" />
                            <img alt="Unity" width="56px" 
                                src="https://img.icons8.com/ios-filled/50/000000/unity.png" />
                            <img alt="HTML5" width="56px"
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
                            <img alt="CSS3" width="56px"
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
                        </div>
                        >Projects
                        </Header> */}

                    <Header title="Programming applications and games">Projects</Header>

                    <DisplayItem 
                        link="/"
                        icon={journal}
                        text="foodie journals"
                    
                        >foodie journals </DisplayItem>

                    <DisplayItem 
                        link="/"
                        icon={burger}
                        text="burger builder"
                    
                        >burger builder </DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={slots}
                        text="slot machine"
                    
                        >slot machine </DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={burger}
                        text="burger builder"
                    
                        >burger builder </DisplayItem>
                    
                    <DisplayItem 
                        link="/"
                        icon={burger}
                        text="burger builder"
                    
                        >burger builder </DisplayItem>
                    
                    
                </div>
            </Aux>
        )
    }
} 

export default Code;