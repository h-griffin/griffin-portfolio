import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGamepad, faMicrophone } from '@fortawesome/free-solid-svg-icons'


import Aux from '../../../hoc/Aux/Aux';
import classes from './Code.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';
import DisplayItem from '../../../components/Display/DisplayItem/DisplayItem';

import journal from '../../../images/projects/foodie-journals.png';
import burger from '../../../images/projects/burger-builder.png';
import slots from '../../../images/projects/slot-machine.png';
import city from '../../../images/projects/city-explorer.png';
import rpg from '../../../images/rpg/big-title.png';
import greed from '../../../images/projects/greed.png';
import portfolio from '../../../images/projects/portfolio.png';

import LeftArrow from '../../../components/Header/Arrows/LeftArrow/LeftArrow';
import RightArrow from '../../../components/Header/Arrows/RightArrow/RightArrow';

class Code extends Component{

    render(){



        return(
            <Aux>
                <div className={classes.Code}>

                    <Header 
                        title="Programming applications and games"
                        note="click to visit live site">
                        Projects
                            <LeftArrow linkto="/"></LeftArrow>
                            <RightArrow linkto="/certificates"></RightArrow>
                        </Header>

                    <div>
                        <a className={classes.Icons} href="https://github.com/h-griffin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="lg" /> </a>
                        h-griffin
                    </div>
                    <br></br>
                    {/* <div align='center' className={classes.Logos}>
                        <img alt="Python" src="https://img.icons8.com/color/96/000000/python.png" />
                        <img alt="JavaScript" src="https://img.icons8.com/color/96/000000/javascript.png" />
                        <img alt="React"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                        <img alt="C-sharp" src="https://img.icons8.com/color/48/000000/c-sharp-logo-2.png" />
                        <img alt="Unity" src="https://img.icons8.com/ios-filled/50/000000/unity.png" />
                        <img alt="HTML5"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
                        <img alt="CSS3"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
                    </div> */}


                    <Grid 
                        className={classes.DisplayParent}
                        columns="repeat(auto-fit,minmax(220px,1fr))" 
                        gap="10px"
                        >

                        <Cell>
                            <DisplayItem 
                                link="https://github.com/smart-not-hard/foodie-journal"
                                icon={journal}
                                text="foodie journals"
                                target="_blank" rel="noopener noreferrer"

                                live="https://foodiejournals.com/"
                                source="https://burger-builder-react-88892.web.app/"
                                title="Foodie Journals"
                                description="Python + React.js"
                                >Unauthenticated visitors may view and search recipes with filters. Authenticated users may sign in/out as well as create-update-delete their own posts/recipes.
                                </DisplayItem>
                        </Cell>

                        <Cell>
                            <DisplayItem 
                                link="https://burger-builder-react-88892.web.app/"
                                icon={burger}
                                text="burger builder"
                                target="_blank" rel="noopener noreferrer"

                                hover="Live Site"
                                lower="Source Code"
                                title="Burger Builder"
                                description="React.js + Redux.js"
                                >Visitors may create an order, but must sign up/in to place an order. Once signed in, users have access to record of their previous orders.</DisplayItem>
                        </Cell>
                        
                        <Cell>
                            <DisplayItem 
                                link="https://github.com/h-griffin/city-explorer-api"
                                icon={city}
                                text="city exploerer API"
                                target="_blank" rel="noopener noreferrer"

                                hover="Live Site"
                                lower="Source Code"
                                title="City Exploerer"
                                description="Javascript + PostgreSQL"
                                >All visitors may search a given city or state and view results from 5 different APIs for weather, activities and much more.</DisplayItem>
                        </Cell>

                        <Cell>
                            <DisplayItem 
                                link="https://slot-machine-201.github.io/slot-machine/"
                                icon={slots}
                                text="slot machine"
                                target="_blank" rel="noopener noreferrer"

                                hover="Live Site"
                                lower="Source Code"
                                title="Slot Machine"
                                description="Javascript"
                                >simple pure JS arcade style animated web game with bets and rewards, as well as a modifiable win ratio.</DisplayItem>
                        </Cell>
                    
                        <Cell>
                            <DisplayItem 
                                link= '/code/rpg'
                                icon={rpg}
                                text="rpg game"
                                target="_self" rel="noopener noreferrer"

                                hover="Live Site"
                                lower="Source Code"
                                title="RPG Game"
                                description="C# + Unity"
                                >2D adventure game with animations, quests, money/shops, audio, interactive NPCs and objects.</DisplayItem>
                        </Cell>

                        <Cell>
                            <DisplayItem 
                                link= "https://github.com/josephlee3454/game-of-greed"
                                icon={greed}
                                text="greed"
                                target="_blank" rel="noopener noreferrer"

                                hover="Live Site"
                                lower="Source Code"
                                title="Game of Greed"
                                description="Python >_"
                                >Command line interface with game logic, and automated testing.</DisplayItem>
                        </Cell>

                        {/* <Cell>
                            <DisplayItem 
                                link= 'https://github.com/h-griffin/griffin-portfolio'
                                icon={portfolio}
                                text="portfolio"
                                target="_blank" rel="noopener noreferrer"

                                hover="Live Site"
                                lower="Source Code"
                                title="Portfolio"
                                description="React.js + Firebase"
                                >this site contains static & stateful components, CSS Grids and animations, and uses React-router.</DisplayItem>
                        </Cell> */}
                    </Grid>
                </div>
            </Aux>
        )
    }
} 

export default Code;