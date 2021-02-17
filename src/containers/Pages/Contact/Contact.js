import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Contact.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSlack } from '@fortawesome/free-brands-svg-icons'

class Contact extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Contact}>
                    
                    <Header title="Contact Me" > 
                        <a className={classes.Icons} href="/"><FontAwesomeIcon icon={faGithub} size="lg"/> </a>
                        <a className={classes.Icons} href="/"><FontAwesomeIcon icon={faLinkedin} size="lg"/> </a>
                        <a className={classes.Icons} href="" ><FontAwesomeIcon icon={faSlack} size="lg"/> </a>
                        <br></br>
                        <br></br>
                         
                    </Header>

                    <div className={classes.Container}>
                        <form action="mailto:haleygriffin708@gmail.com" method="GET" target="_blank">
                        <Grid 

                            columns={4}
                            gap="10px"
                            className={classes.DisplayParent}
                        >
                            <Cell width={2}>
                                <input type="text" name="name" placeholder="Name" />
                            </Cell>
                            <Cell width={2}>
                                <input type="email" name="email" placeholder="Email" />
                            </Cell>
                            <Cell width={4}>
                                <input type="text" name="subject" placeholder="Subject" />
                            </Cell>
                            <Cell width={4}>
                                <textarea name="message" placeholder="Message" rows="6"></textarea>
                            </Cell>
                            <Cell width={4}>
                                <input type="submit" value="Send Message" />
                            </Cell>

                        </Grid>
                    </form>
                    </div>
                    

                </div>
            </Aux>
        )
    }
} 

export default Contact;