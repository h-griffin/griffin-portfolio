import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Art.css';
import Header from '../../../components/Header/Header';
import DisplayItem from '../../../components/Display/DisplayItem/DisplayItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

import toxic from '../../../images/art/atoxicsoul.png';
import bryce from '../../../images/art/equiptmunk.png';
import haaken from '../../../images/art/phokusme.png';
import tiger from '../../../images/art/tiger.png';
import luna from '../../../images/art/luna.png';
import deer from '../../../images/art/deer.png';
import mcgregor from '../../../images/art/mcgregor.png';
import frank from '../../../images/art/frankiero.png';
import elvis from '../../../images/art/elvis.png';
import octo from '../../../images/art/octo.png';
import dog from '../../../images/art/dog.png';
import soldier from '../../../images/art/soldier.png';

import Modal from '../../UI/Modal/Modal';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Art extends Component{


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


                <Header title="Traditional & Digital commission artwork">Commissions</Header>
                <div>
                    <a className={classes.Icons} href="https://www.instagram.com/odetocharcoal/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare} size="lg" /> </a>
                    odetocharcoal
                </div>
                
                <div className={classes.Art}>
                    <Grid 
                        className={classes.DisplayParent}
                        flow="row dense" 
                        columns={9}>

                        <Cell width={3} height={2} onClick={((event) => this.imgOnClickHandler(event))} >
                            <div className={classes.ModalParent}>
                                <img 
                                className={classes.myImg} 
                                src={bryce} 
                                alt="Digital logo with Adobe Fresco" 
                            onClick={((event) => this.imgOnClickHandler(event))}
                            ></img>
                            </div>

                        </Cell>

                        <Cell width={3} height={2}>
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg} 
                                    src={haaken} 
                                    alt="Digital logo with Adobe Fresco" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>  
                            </div>
                        
                        </Cell>

                        <Cell width={3} height={2} >
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg} 
                                    src={toxic} 
                                    alt="Digital logo with Adobe Fresco" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>  
                            </div>
                        </Cell>

                        <Cell width={5} height={4} >

                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg} 
                                    src={deer} 
                                    alt="6x8&quot; Gouache painting" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                            </div>
                        </Cell>

                        <Cell width={4} height={2}>
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg} 
                                    src={luna} 
                                    alt="4x6&quot; Watercolor painting" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                            </div>
                        </Cell>
                            
                        <Cell width={4} height={2} >
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg} 
                                    src={tiger} 
                                    alt="6x8&quot; Gouache painting" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                            </div>
                        </Cell>

                        <Cell width={3} height={2}>
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg} 
                                    src={frank} 
                                    alt="9x12&quot; Charcoal drawing" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                            </div>
                        </Cell>
                            
                        <Cell width={3} height={2}>
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg} 
                                    src={mcgregor} 
                                    alt="9x12&quot; Charcoal drawing" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                            </div>
                        </Cell>

                        <Cell width={3} height={2}>
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg} 
                                    src={elvis} 
                                    alt="9x12&quot; Charcoal drawing" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                            </div> 
                        </Cell>
                        
                        <Cell width={5} height={6}>
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg} 
                                    src={octo} 
                                    alt="6x8&quot; Gouache painting" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                            </div>
                        </Cell>
                        
                        <Cell width={4} height={2}>
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg} 
                                    src={dog} 
                                    alt="Digital drawing with Adobe Fresco" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                            </div>
                        </Cell>
                                
                        <Cell width={4} height={2}>
                            <div className={classes.ModalParent}>
                                <img 
                                    className={classes.myImg} 
                                    src={soldier} 
                                    alt="Digital drawing with Adobe Fresco" 
                                onClick={((event) => this.imgOnClickHandler(event))}
                                ></img>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </Aux>
        )
    }
} 

export default Art;