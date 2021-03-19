import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import classes from './Body.css';
import Code from '../Pages/Code/Code';
import Home from '../Pages/Home/Home';
import Certificates from '../Pages/Certificates/Certificates';
import Art from '../Pages/Art/Art';
import Contact from '../Pages/Contact/Contact';
import Rpg from '../Pages/Projects/Rpg/Rpg';
import Foodie from '../Pages/Projects/FoodieJournal/foodie';

class Body extends Component{

    render(){
        return(
            <Aux>
                <div className={classes.Body}>
                    {/* <p>∆ Body.js  ∆</p> */}
                    
                    <Route path="/" exact component={ Home } />

                    <Route path="/code" exact component={ Code } />

                    <Route path="/code/rpg" exact component={ Rpg } />
                    <Route path="/code/foodie-journal" exact component={ Foodie } />

                    <Route path="/certificates" exact component={ Certificates } />
                    
                    <Route path="/art" exact component={ Art } />
                    
                    <Route path="/contact" exact component={ Contact } />
                    
                </div>
            </Aux>
        )
    }
} 

export default Body;