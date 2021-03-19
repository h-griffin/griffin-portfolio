import React, { Component } from 'react';

import Aux from '../../../../hoc/Aux/Aux';
import classes from './foodie.css';
import Header from '../../../../components/Header/Header';
import { Route } from 'react-router-dom';

import quest from '../../../../images/rpg/quest-items.png';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Cell } from 'styled-css-grid';
import DisplayItem from '../../../../components/Display/DisplayItem/DisplayItem';


class Foodie extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Foodie}>

                    <Route path="/code" active />

                    <Header 
                        title="Python React.js PostgresSql"
                        >Foodie Journal Details
                    
                        <a href="/code" className={classes.Arrow}> 
                                <FontAwesomeIcon icon={faChevronLeft} size="lg"/></a>
                    </Header>
                    <div className={classes.Container}>
                        <div className={classes.Live}>
                            test
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
} 

export default Foodie;