import './PracticeExamNavigation.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newPracticeNBackState, setPracticeRenderState } from './actions';
import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';
import { Button } from '@material-ui/core';
import GenericModal from '../Generic_Modal';

const newPracticeNBackStateDispatch = (dispatch) => ({
    newPracticeNBackState: (users) => dispatch(newPracticeNBackState(users)),
});

// const setPracticeRenderStateDispatch = (dispatch) => ({
//     setPracticeRenderState: (array) => dispatch(setPracticeRenderState(array)),
// });

const setPracticeRenderStateDispatch = (dispatch) => ({
    setPracticeRenderState: (nameState) => dispatch(setPracticeRenderState(nameState)),
});

let modalCheckResult = "";



const PracticeExamNavigation = () => {
    const [show, setShow] = useState(false)
    const [showEndofExamModal, setShowEndofExamModal] = useState(false)


    
    const practiceImageArrayFromRedux = useSelector(state => state.practiceImageArrayReducer.practiceImageArray);

   

    const NBackState = useSelector(state => state.practiceExamNavigationReducer.newPracticeNBackState);
    const { newPracticeNBackState } = newPracticeNBackStateDispatch(useDispatch());
    const { setPracticeRenderState } = setPracticeRenderStateDispatch(useDispatch());  

    //const practiceImageArray = useSelector(state => state.practiceImageArrayReducer.practiceImageArray);



    
    

    const checkIfTestIsComplete = () => {
        if (NBackState == practiceImageArrayFromRedux.length-1) {
            setPracticeRenderState(navigationPhaseTypes.introductionPage)
        }
    }
    
    
    
    
           
    /*
        https://stackoverflow.com/questions/53633698/referencing-outdated-state-in-react-useeffect-hook
        Refs don't give you the closure issue mentioned above because refs is an object with a current field
        and multiple calls to useRef will return you the same object. As long as you mutate the .current
        b value, your useEffect can always (only) read the most updated value.
    
    */
        //const NBackState = userAnswerTimeArray.length
        
        let timerStart = new Date().getTime();
    
        const timeTakenToAnswer = (timerStart) => {
            
            console.log("Timer Start", timerStart);
            return (new Date().getTime() - timerStart)
        }
        
      
    
        const keyStrokeListener = (event) => {      
            /*
            *  Listens for the keystoke and updates the NBackState
            */
            console.log('HIT',event.keyCode)
            const buttonNBackState = NBackState;
               switch (event.keyCode) {
                case 87:
                    return (modalCheckResult=practiceCheckResult("nBackButton",practiceArraySourceSlice),setShow(true));
                case 79:
                    return (modalCheckResult=practiceCheckResult("predictiveButton",practiceArraySourceSlice),setShow(true));
                case 83:
                    return (modalCheckResult=practiceCheckResult("uniqueButton",practiceArraySourceSlice),setShow(true));
                case 27:
                return (onCloseWrapperFunction());
            }
        }
        // console.log("Before useEffect()")
     
        //let localNBackState = NBackState;
    
    
        
    
        React.useEffect(() => {
        document.addEventListener('keyup', keyStrokeListener);
        
        return function cleanup() {
            document.removeEventListener('keyup', keyStrokeListener);
        };
         });
     
//const setTestPracticeStateArrayFromRedux = useSelector(state => state.practiceImageArrayRedux.testPracticeStateArray);


//console.log("setTestPracticeStateArrayFromRedux",setTestPracticeStateArrayFromRedux)
        
//Modal logic Control:



// Modal Message Logic


let practiceArraySourceSlice = practiceImageArrayFromRedux[NBackState].slice(32,-9);


const practiceCheckResult = (buttonSwitchParam,imageSourceStringParam) => {
        switch (buttonSwitchParam) {
            case 'nBackButton':    
            console.log("Two Back Route");
                if (imageSourceStringParam.includes("Two-Back-Hits",0) && practiceImageArrayFromRedux[NBackState] == practiceImageArrayFromRedux[NBackState-2] ) {     
                    return {modalTitle: "CORRECT!", modalMessage: "The image you are looking at appeared two images prior to this one. You're getting it"};
                }
                if (imageSourceStringParam.includes("Two-Back-Hits",0) && practiceImageArrayFromRedux[NBackState] !== practiceImageArrayFromRedux[NBackState-2] ) {     
                    return {modalTitle: "Wrong Answer!", modalMessage: "You have not seen this image before.  However you may see it repeated later."};
                }
                if (imageSourceStringParam.includes("RemainingPictures",0)) {     
                    return {modalTitle: "Wrong Answer!", modalMessage: "The image you are looking at is a unique Image. You have not seen it before"};
                } else {
                    return {modalTitle: "Wrong Answer!", modalMessage: "The image you are looking at is a unique Image. You have not seen it before"};
                }

            break;

            case 'predictiveButton':
                console.log("Predictive Route");
                                if (imageSourceStringParam.includes("Two-Back-Hits",0) && practiceImageArrayFromRedux[NBackState] == practiceImageArrayFromRedux[NBackState-2] ) {     
                    return {modalTitle: "Wrong Answer!", modalMessage: "This image appeared two images ago.  When you see an image repreat with one image in between click the \"Same As 2 Photos Back\" button"};
                }
                if (imageSourceStringParam.includes("RemainingPictures",0)) {     
                    return {modalTitle: "Wrong Answer!", modalMessage: "Click this button if the image is the same as one if the images you were asked to remember.  You were not asked to remember any images in this practice exam."};
                } else {
                    return {modalTitle: "Wrong Answer!", modalMessage: "The image you are looking at is a unique Image. You have not seen it before"};
                }
            break;

            case 'uniqueButton':
                console.log("Unique Route");
                if (imageSourceStringParam.includes("RemainingPictures",0)) {     
                    return {modalTitle: "CORRECT!", modalMessage: "This is a unique image.  You have not seen it before."}; 
                }
                if (imageSourceStringParam.includes("Two-Back-Hits",0) && practiceImageArrayFromRedux[NBackState] !== practiceImageArrayFromRedux[NBackState-2] ) {     
                    return {modalTitle: "CORRECT!", modalMessage: "This is a unique image.  You have not seen it before."};
                }
                if (imageSourceStringParam.includes("Two-Back-Hits",0) && practiceImageArrayFromRedux[NBackState] == practiceImageArrayFromRedux[NBackState-2] ) {     
                    return {modalTitle: "Wrong Answer!!", modalMessage: "The image you are looking at appeared two images prior to this one"};
                } else {
                    return {modalTitle: "Wrong Answer!", modalMessage: "The image you are looking at is a unique Image. You have not seen it before"};
                }
                break;
        default:
        return {modalTitle: "error", modalMessage: "error" }      
    } 
    
};




useEffect(() => {
   return () => {
    modalCheckResult = {modalTitle: "error", modalMessage: "error" }

    }
}, [])


const onCloseWrapperFunction = () => {
    setShow(false);
    newPracticeNBackState(NBackState);
    checkIfTestIsComplete();
}

// we are object destructuring the result




// Has to export for the Modal Message"
// Modal Title
//


//Two-Back-Hits

//RemainingPictures

        return (
            
            <div className="container">    
                <div className="buttonSpace">
        
            <Button color ="primary" variant="contained" stringvalue={"Same as *n* photos Back"} onClick={()=>{modalCheckResult=practiceCheckResult("nBackButton",practiceArraySourceSlice);setShow(true)}}>"W" - Same as 2 photos Back
                </Button>
        
                <Button color ="default" variant="contained" stringvalue={"O - Predictive"} onClick={()=>{modalCheckResult=practiceCheckResult("predictiveButton",practiceArraySourceSlice);setShow(true)}}>"O" - Predictive - I was told to remember this
                </Button>
        
                <Button color ="secondary" variant="contained" stringvalue={"S - Unique Image"} onClick={()=>{modalCheckResult=practiceCheckResult("uniqueButton",practiceArraySourceSlice);setShow(true)}}>"S" - Unique Image
                </Button>
        
                </div>
                <div className="Modal">
                
                    <GenericModal title={modalCheckResult.modalTitle} onClose={() => onCloseWrapperFunction()} show={show} >
                    <p> {modalCheckResult.modalMessage} </p>
                    </GenericModal> 

                  

                </div>
            </div>
            )
    }

export default PracticeExamNavigation