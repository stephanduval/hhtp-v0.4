/* eslint-disable default-case */
import React, { useState, useEffect } from 'react'
import './genericModal.css'

const GenericModal = props => {


    // const keyStrokeListener = (event) => {      
    //     /*
    //     *  Listens for the keystoke and updates the NBackState
    //     */
    //     console.log('HIT',)
    //    //if (event.keyCode == 27) {props.onClose};
            
    //     }
    
    // console.log("Before useEffect()")
 
    //let localNBackState = NBackState;


    

    // React.useEffect(() => {
    // document.addEventListener('keydown', keyStrokeListener);
    
    // return function cleanup() {
    //     document.removeEventListener('keydown', keyStrokeListener);
    // };
    //  });


        // Start of code that allows the ESCAPE key to close the modal:
    // Create a function that returns the props.onClose() function that closes the modal
    // const closeOnEscapeKeyDown = (e) => {
    //     if(e.keyCode == 27) {props.OnClose}
    // }


    // An Escape keydown listener that uses useEffect()
 //Commenting it out because it its causing an error
//  React.useEffect(() => {
//     document.body.addEventListener('keydown', closeOnEscapeKeyDown)
//     return function cleanup() {
//         document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
//     }
// },[]);


    // Condition that determines if the modal is shown
    // It uses props.show (a true or false value)  

    if(!props.show) {
        return null;
    }


    

    

    // End of code that allows the ESCAPE key to close the modal:

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4></div>
                <div className="modal-body">{props.children}</div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
                
            </div>
         </div>
)
}

export default GenericModal