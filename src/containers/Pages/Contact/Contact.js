import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Contact.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';

class Contact extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Contact}>
                    {/* <p>Contact.js</p> */}
                    
                    <Header title="Contact title">Contact Header</Header>
                    <Display />
                    
                </div>
            </Aux>
        )
    }
} 

export default Contact;