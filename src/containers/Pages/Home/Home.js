import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Home.css';
import Header from '../../../components/Header/Header';
import griffin from '../../../images/griffin.jpg';

import {NavLink} from 'react-router-dom';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';

class Home extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Home}>
                    <Header 
                        title="Software Developer"
                        >Haley Griffin</Header>

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