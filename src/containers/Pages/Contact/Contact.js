import React, { Component } from 'react';

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
                    
                    <Header title="Contact Me"> 
                        <FontAwesomeIcon icon={faGithub} size="lg"/> 
                        <FontAwesomeIcon icon={faLinkedin} size="lg"/> 
                        <FontAwesomeIcon icon={faSlack} size="lg"/> 
                    </Header>
                    


                    <form action="mailto:haleygriffin708@gmail.com" method="GET" target="_blank">
                        <div>
                            <div class="row">
                                <div class="col-6 col-12-medium">
                                    <input type="text" name="name" placeholder="Name" />
                                </div>
                                <div class="col-6 col-12-medium">
                                    <input type="text" name="email" placeholder="Email" />
                                </div>
                                <div class="col-12">
                                    <input type="text" name="subject" placeholder="Subject" />
                                </div>
                                <div class="col-12">
                                    <textarea name="message" placeholder="Message" rows="6"></textarea>
                                </div>
                                <div class="col-12">
                                    <input type="submit" value="Send Message" />
                                </div>
                            </div>
                        </div>
                    </form>


                </div>
            </Aux>
        )
    }
} 

export default Contact;