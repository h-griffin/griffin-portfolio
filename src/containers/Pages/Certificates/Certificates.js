import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Certificates.css';
import Header from '../../../components/Header/Header';
import Display from '../../../components/Display/Display';
import DisplayItem from '../../../components/Display/DisplayItem/DisplayItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import c from '../../../images/certificates/CSharp-Certificate.jpg';
import jq from '../../../images/certificates/JQuery-Certificate.jpg';
import mc from '../../../images/certificates/Minecraft-Certificate.png';
import python from '../../../images/certificates/Python-Certificate.jpg';
import react from '../../../images/certificates/React-Certificate.jpg';
import Backdrop from '../../UI/Backdrop/Backdrop';

import LeftArrow from '../../../components/Header/Arrows/LeftArrow/LeftArrow';
import RightArrow from '../../../components/Header/Arrows/RightArrow/RightArrow';


class Certificates extends Component{


    constructor(){
        super();

        this.state = {
           isDisplayBlock: false,
           captionText: '',
           modalimgsrc: null
        }
    }

//  grab image info and place in modal
    imgOnClickHandler = (event) =>{
            this.setState({
                isDisplayBlock: true,
                captionText: event.target.alt,
                modalimgsrc: event.target.src
            })
    }

//  When the user clicks on <span> (x), close the modal
    spanOnclickHandler = () =>{
    this.setState({
        isDisplayBlock: false,
        captionText: '',
        modalimgsrc: null
     })
}   

    render(){

        // let modalclass = this.state.isDisplayBlock ? "modalOpen" : "modalClosed";
        // let spanclass = this.state.isDisplayBlock ? "spanShow" : "spanHide";

        let close = this.state.isDisplayBlock ? <span 
                        className={classes.spanShow}
                        onClick={((event) => this.spanOnclickHandler(event))}
                    >&times;</span> : null

        let displayImage = <img 
                            className={classes.modalContent} 
                            src={this.state.modalimgsrc}
                            alt={this.state.captionText}
                            // style={{border: this.state.isDisplayBlock ? 'solid white 2px' : null}}
                            ></img>

        return(
            <Aux>

                <Backdrop show={this.state.isDisplayBlock} clicked={((event) => this.spanOnclickHandler(event))}>
                    {close}
                    <div className={classes.modalDisplay}>
                        {displayImage}
                        <div className={classes.caption}>
                            {this.state.captionText}
                        </div>
                    </div>
                </Backdrop>

                <div className={classes.Certificates}>
                    <Header 
                        title="Software Development Achievements"
                        note="click to expand"
                        >Certificates
                            <LeftArrow linkto="/code"></LeftArrow>
                            <RightArrow linkto="/art"></RightArrow>
                        </Header>
                    
                    <div>
                        <a className={classes.Icons} href="https://www.linkedin.com/in/h-griffin/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>
                        h-griffin
                    </div>

                    <Grid 
                        className={classes.DisplayParent}
                        columns="repeat(auto-fit,minmax(220px,1fr))" 
                        gap="20px"
                        >
                        
                        <Cell>

                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg}
                                    src={python} 
                                    alt="Advanced Software Development with Python" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                                <br></br>
                                Python
                            </div>

                        </Cell>
                        
                        <Cell>
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg}
                                    src={react} 
                                    alt="React the Complete Guide" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                                <br></br>
                                React.js
                            </div>
                        </Cell>

                        <Cell>
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg}
                                    src={c} 
                                    alt="C# Basics for Beginners" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                                <br></br>
                                C#
                            </div>
                        </Cell>
                        
                        <Cell>
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg}
                                    src={jq} 
                                    alt="jQuery Tutorial Course" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                                <br></br>
                                jQuery
                            </div>
                        </Cell>
                        
                        <Cell>
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg}
                                    src={mc} 
                                    alt="Minecraft Hour of Code 2020" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                                <br></br>
                                Minecraft
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </Aux>
        )
    }
} 

export default Certificates;