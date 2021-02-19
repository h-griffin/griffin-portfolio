import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Home.css';
import griffin from '../../../images/griffin.jpg';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';

class Home extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Home}>

                    <div className={classes.HomeHeader}>
                        <h1 className={classes.HomeH1}>Haley Griffin</h1>
                        <p className={classes.Homep}>Software Developer</p>
                        <p className={classes.HomeSmall}>Commission Artist</p>
                    </div>

                    <div className={classes.DisplayParent}>
                        <img src={griffin} alt='griffin' className={classes.div1}></img>

                        <a href="/code" className={classes.Arrow}> 
                            <FontAwesomeIcon icon={faChevronRight} size="lg"/></a>
                    </div>


                </div>
            </Aux>
        )
    }
} 

export default Home;