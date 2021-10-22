import './PracticeExamNavigation.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newPracticeNBackState, setPracticeRenderState } from './actions';
import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';
import { Button } from '@material-ui/core';
import GenericModal from '../Generic_Modal';
//

const newPracticeNBackStateDispatch = (dispatch) => ({
    newPracticeNBackState: (users) => dispatch(newPracticeNBackState(users)),
});

// const setPracticeRenderStateDispatch = (dispatch) => ({
//     setPracticeRenderState: (array) => dispatch(setPracticeRenderState(array)),
// });

const setPracticeRenderStateDispatch = (dispatch) => ({
    setPracticeRenderState: (nameState) => dispatch(setPracticeRenderState(nameState)),
});




const PracticeExamNavigation = () => {


    
    const practiceImageArrayFromRedux = useSelector(state => state.practiceImageArrayReducer.practiceImageArray);

   

    const NBackState = useSelector(state => state.practiceExamNavigationReducer.newPracticeNBackState);
    const { newPracticeNBackState } = newPracticeNBackStateDispatch(useDispatch());
    const { setPracticeRenderState } = setPracticeRenderStateDispatch(useDispatch());  

    //const practiceImageArray = useSelector(state => state.practiceImageArrayReducer.practiceImageArray);



    
    

    const checkIfTestIsComplete = () => {
        if (NBackState > practiceImageArrayFromRedux.length) {
            setPracticeRenderState(navigationPhaseTypes.nBackComplete)
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
                    return (newPracticeNBackState(NBackState),checkIfTestIsComplete());
                case 79:
                    return (newPracticeNBackState(NBackState),checkIfTestIsComplete());
                case 83:
                    return (newPracticeNBackState(NBackState),checkIfTestIsComplete());
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

const [show, setShow] = useState(false)


// Modal Message Logic

let practiceExamResponse = ""

const setResponse = (responseParameter) => {

    practiceExamResponse = responseParameter
    return practiceExamResponse

}

let modalMessage = {title: "Titlerror", body: "Bodyerror"};


let testSlice = practiceImageArrayFromRedux[NBackState].slice(32,-9);

const practiceCheckResult = (practiceExamResponseParam,imageSourceStringParam) => {
    let modalTitle = "func Titlerror";
    let modalMessage = "func Bodyerror";

    if (/*imageSourceStringParam == 'Two-Back-Hits' && */ practiceExamResponseParam == 'N') {     
        setShow(true)
        //modalMessage = {title: "CORRECT!", message: "You got the correct answer. Brilliant"};
        modalTitle = "CORRECT!";
        modalMessage = "You got the correct answer. Brilliant";
        return {modalTitle, modalMessage};
    } else {
        return {modalTitle, modalMessage};
    }

};

practiceCheckResult()
let modalCheckResult = practiceCheckResult();
let word = modalCheckResult.modalTitle;

// Has to export for the Modal Message
// Modal Title
//


//Two-Back-Hits

//RemainingPictures

        return (
            
            <div className="container">    
                <div className="buttonSpace">
        
            <Button color ="primary" variant="contained" stringvalue={"Same as *n* photos Back"} onClick={()=>{practiceCheckResult(setResponse('N'),testSlice);newPracticeNBackState(NBackState);checkIfTestIsComplete();}}>"W" - Same as 2 photos Back
                </Button>
        
                <Button color ="default" variant="contained" stringvalue={"O - Predictive"} onClick={()=>{setResponse('P');newPracticeNBackState(NBackState);checkIfTestIsComplete()}}>"O" - Predictive - I was told to remember this
                </Button>
        
                <Button color ="secondary" variant="contained" stringvalue={"S - Unique Image"} onClick={()=>{setResponse('U');newPracticeNBackState(NBackState);checkIfTestIsComplete()}}>"S" - Unique Image
                </Button>
        
                </div>
                <div className="Modal">
                    <button onClick={() => setShow(true) }>Show Modal</button>
                    <GenericModal title={word} onClose={() => setShow(false)} show={show} >
                    <p> {modalMessage.body} </p>
                    </GenericModal> {testSlice}, {modalMessage.title}, {modalMessage.body}
                </div>
            </div>
            )
    }

export default PracticeExamNavigation