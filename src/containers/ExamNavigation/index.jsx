import './ExamNavigation.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRenderState, newNBackState, newUserResponseArray } from './actions';
import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';
import { Button } from '@material-ui/core';
//



const nBackStateDispatch = (dispatch) => ({
    newNBackState: (users) => dispatch(newNBackState(users)),
});

const userResponseArrayDispatch = (dispatch) => ({
    newUserResponseArray: (array) => dispatch(newUserResponseArray(array)),
});

const renderViewDispatch = (dispatch) => ({
    setRenderState: (nameState) => dispatch(setRenderState(nameState)),
});


const ExamNavigation = () => {
 
    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState);
    const { newNBackState } = nBackStateDispatch(useDispatch());
    const userResponseArray = useSelector(state => state.examNavigationReducer.userResponseArray);
    const { newUserResponseArray } = userResponseArrayDispatch(useDispatch());
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    const { setRenderState } = renderViewDispatch(useDispatch());  
    const renderViewFromReduxStore = useSelector(state => state.examNavigationReducer.renderView);
    const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    const timerSeconds = 1000*(useSelector(state => state.nBackSettingsReducer.timerSeconds));
    

    const addPredictiveToUserResponseArray = () => {
        userResponseArray.push('P');
    }

    const addNBackToUserResponseArray = () => {
        userResponseArray.push('N');
    }

    const addSkipToUserResponseArray = () => {
        userResponseArray.push('-');
    }

    const addSkippedToUserResponseArray = () => {
        userResponseArray.push('S');
    }
    
    let timerStart = new Date().getTime();

    const timeTakenToAnswer = (timerStart) => {new Date().getTime() - timerStart;
        console.log(timerStart)

    }


    
    let n = 0
    const addN = () => {n++};    

    const interval = () => setInterval(() => {
        newNBackState(n);
        addSkippedToUserResponseArray();
        let TimeTaken = timeTakenToAnswer(timerStart);
        console.log(TimeTaken);
        addN();
        console.log(n)

       }, timerSeconds);

       

     useEffect(() => {interval()
        
        return () => clearInterval(interval);
      }, []);




    const keyStrokeListener = (event) => {      
        /*
        *  Listens for the keystoke and updates the NBackState
        * ISSUE:  IT repeats all previous keystrokes for some reason, making the process increasingly slower
        */
        console.log('HIT',event.keyCode)
        const buttonNBackState = NBackState;
           switch (event.keyCode) {
            case 87:
                return console.log('W key, Log the Result, Run Next Image Function',newNBackState(NBackState),addNBackToUserResponseArray(),clearInterval(interval));
            case 79:
                return console.log('O Key, Log the Result, Run Next Image Function',newNBackState(NBackState),addPredictiveToUserResponseArray(),clearInterval(interval));
            case 83:
                return console.log('S Key, Log the Result, Run Next Image Function',newNBackState(NBackState),addSkipToUserResponseArray(),clearInterval(interval));
        }
    }
    // console.log("Before useEffect()")
 
    let localNBackState = NBackState;


    

    React.useEffect(() => {
    document.addEventListener('keyup', keyStrokeListener);
    
    return function cleanup() {
        document.removeEventListener('keyup', keyStrokeListener);
    };
     });
 

    return (
        
            
        <div className="buttonSpace">

    <Button color ="primary" variant="contained" stringValue={"Same as *n* photos Back"} onClick={()=>{newNBackState(NBackState);addNBackToUserResponseArray()}}>"W" - Same as {nBackDegree} photos Back
        </Button>

        <Button color ="quaternary" variant="contained" stringValue={"O - Predictive"} onClick={()=>{newNBackState(NBackState);addPredictiveToUserResponseArray()}}>"O" - Predictive - I was told to remember this
        </Button>

        <Button color ="secondary" variant="contained" stringValue={"S - Unique Image"} onClick={()=>{newNBackState(NBackState);addSkipToUserResponseArray()}}>"S" - Unique Image
        </Button>

   


        </div>

        )
}

export default ExamNavigation