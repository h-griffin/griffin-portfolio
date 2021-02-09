import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItems/NavigationItem';



const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active >Home</NavigationItem>
        <NavigationItem link='/'>Code</NavigationItem>
        <NavigationItem link='/'>Certificates</NavigationItem>
        <NavigationItem link='/'>Art</NavigationItem>
        <NavigationItem link='/'>Contact</NavigationItem>
    </ul>
);

export default NavigationItems;