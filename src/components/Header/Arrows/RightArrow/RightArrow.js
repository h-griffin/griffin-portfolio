import React from 'react';

import classes from './RightArrow.css';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const RightArrow = (props) => (
    <a href={props.linkto} className={classes.Arrow}> 
        <FontAwesomeIcon icon={faChevronRight} size="lg"/></a>
);

export default RightArrow;               
