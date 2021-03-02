import React from 'react';

import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavigationItem = (props) => (
    <li className={classes.NavigationItem}>
        
        <NavLink 
            to={props.link} 
            exact 
            activeClassName={classes.active}
            // className={ props.active ? classes.active : null}
            
            ><FontAwesomeIcon icon={props.image} size="lg"/>
        </NavLink>
        <div className={classes.Triangle}></div>
    </li>
);

export default withRouter(NavigationItem);

// if ( $(window).width() > 739) {      
//         //Desktop scripts - hover
//     } 
//     else {
//         //mobile scripts - double click
//         $('.site-nav__list a').click(function(){
//         $(this).click();
//     }