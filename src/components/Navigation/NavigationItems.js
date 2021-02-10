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



// <Aux>
        //     <head>
        //         <link href="../../css/css/all.css" rel="stylesheet"></link>
        //     </head>
        //     <nav id="nav">
        //         <div>
        //             <a href="#" class="icon solid fa-home"><span>Home</span></a>
        //             <a href="#work" class="icon solid fa-code"><span>Code</span></a>
        //             <a href="#certificates" class="icon solid fa-certificate"><span>Certficates</span></a>
        //             <a href="#art" class="icon solid fa-palette"><span>Art</span></a>
        //             <a href="#contact" class="icon solid fa-envelope"><span>Contact</span></a> 
        //         </div>
        //     </nav>  
        // </Aux>


);

export default NavigationItems;