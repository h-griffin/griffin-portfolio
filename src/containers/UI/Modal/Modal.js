import React, {Component} from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import toxic from '../../../images/art/atoxicsoul.png';
import bryce from '../../../images/art/equiptmunk.png';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { facr } from '@fortawesome/free-solid-svg-icons'


class Modal extends Component{

    constructor(){
        super();

        this.state = {
           isDisplayBlock: false,
           isShowSpan: false,
           captionText: '',
           modalimgsrc: null
        }
    }

//  grab image info and place in modal
    imgOnClickHandler = (event) =>{
            this.setState({
                // isDisplayBlock: !this.state.isDisplayBlock,
                isDisplayBlock: true,
                isShowSpan: true,
                captionText: event.target.alt,
                modalimgsrc: event.target.src
            })
    }

//  When the user clicks on <span> (x), close the modal
    spanOnclickHandler = () =>{
    this.setState({
        isDisplayBlock: false,
        isShowSpan: false,
        captionText: '',
        modalimgsrc: null
     })
}   

    render(){
        let modalclass = this.state.isDisplayBlock ? "modalOpen" : "modalClosed";
        let spanclass = this.state.isDisplayBlock ? "spanShow" : "spanHide";

        return(
            <Aux>
                {/* <img 
                    className={classes.myImg} 
                    src={toxic} 
                    alt="toxic alt small img" 
                onClick={((event) => this.imgOnClickHandler(event))}
                ></img>

                <img 
                    className={classes.myImg} 
                    src={bryce} 
                    alt="bryce alt small img" 
                onClick={((event) => this.imgOnClickHandler(event))}
                ></img> */}
                
                

                {/* modal */}
                <div className={modalclass}>

                    <span className={classes.spanShow}
                        onClick={((event) => this.imgOnClickHandler(event))}
                        >&times;</span>

                    <img className={classes.modalContent} 
                        src={this.state.modalimgsrc}
                        alt={this.state.captionText}
                        ></img>

                    <div id="caption">
                        {this.state.captionText}
                    </div>
                </div>


            </Aux>
        )
    }
} 

export default Modal;