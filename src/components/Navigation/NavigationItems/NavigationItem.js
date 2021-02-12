import React from 'react';

import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const NavigationItem = (props) => (
    <li className={classes.NavigationItem}>
        
        <NavLink 
            to={props.link} 
            exact 
            activeClassName={classes.active}
            // className={ props.active ? classes.active : null}
            >{props.children}
        </NavLink>


        {/* <a 
            href={props.link} 
            className={ props.active ? classes.active : null}
            >{props.children}</a> */}
    </li>
);

export default withRouter(NavigationItem);