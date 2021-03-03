import React from 'react';

import classes from './LeftArrow.css';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const LeftArrow = (props) => (
    <a href={props.linkto} className={classes.Arrow}> 
        <FontAwesomeIcon icon={faChevronLeft} size="lg"/></a>
);

export default LeftArrow;               
