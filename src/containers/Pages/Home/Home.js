import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Home.css';
import Header from '../../../components/Header/Header';
import Title from '../../../components/Header/Title/Title';
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
                    {/* <Header className={classes.Header}
                        title="Software Developer"
                        >Haley Griffin</Header> */}

<                   div className={classes.Header}>
                        <h1>Haley Griffin</h1>
                        <Title>Software Developer</Title>
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