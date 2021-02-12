import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItems/NavigationItem';

import { withRouter } from 'react-router';
import Aux from '../../hoc/Aux/Aux';



const NavigationItems = () => (
    <Aux>
        
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' iconClass="icon solid fa-home">Home</NavigationItem>
            <NavigationItem link='/code' >Code</NavigationItem>
            <NavigationItem link='/certificates'>Certificates</NavigationItem>
            <NavigationItem link='/art'>Art</NavigationItem>
            <NavigationItem link='/contact'>Contact</NavigationItem>

            
        </ul>
    </Aux>
    


);

export default withRouter(NavigationItems);

// class="icon solid fa-home"