import React, { useState, useEffect } from 'react'
import './genericModal.css'

const GenericModal = props => {

    // Condition that determines if the modal is shown
    // It uses props.show (a true or false value)  

    if(!props.show) {
        return null
    }

    // Start of code that allows the ESCAPE key to close the modal:
    // Create a function that returns the props.onClose() function that closes the modal
    const closeOnEscapeKeyDown = (e) => {
        if((e.charCode || e.keyCode) === 27) {
            props.OnClose()
        }
    }

    // An Escape keydown listener that uses useEffect()
/* Commenting it out because it its causing an error
    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    },[]);
*/
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