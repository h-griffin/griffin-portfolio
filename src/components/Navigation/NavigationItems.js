import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItems/NavigationItem';

import Aux from '../../hoc/Aux/Aux';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active >Home</NavigationItem>
        <NavigationItem link='/code'>Code</NavigationItem>
        <NavigationItem link='/certificates'>Certificates</NavigationItem>
        <NavigationItem link='/art'>Art</NavigationItem>
        <NavigationItem link='/contact'>Contact</NavigationItem>
    </ul>


);

export default NavigationItems;