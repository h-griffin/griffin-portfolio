import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItems/NavigationItem';

import { withRouter } from 'react-router';
import Aux from '../../hoc/Aux/Aux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const NavigationItems = () => (
    <Aux>
        
        <ul className={classes.NavigationItems}>
            <NavigationItem 
                link='/' 
                image={faHome}
                >Home</NavigationItem>

            <NavigationItem 
                link='/code' 
                image={faCode}
                >Code</NavigationItem>

            <NavigationItem 
                link='/certificates'
                image={faCertificate}
                >Certificates</NavigationItem>
            <NavigationItem 
                link='/art'
                image={faPalette}
                >Art</NavigationItem>
            <NavigationItem 
                link='/contact'
                image={faEnvelope}
                >Contact</NavigationItem>


            
        </ul>
    </Aux>
    


);

export default withRouter(NavigationItems);

// class="icon solid fa-home"