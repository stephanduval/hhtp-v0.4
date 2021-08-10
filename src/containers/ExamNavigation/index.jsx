import './ExamNavigation.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectNBack } from './selectors';
import { newNBackState, newUserResponseArray } from './actions';

const nBackStateDispatch = (dispatch) => ({
    newNBackState: (users) => dispatch(newNBackState(users)),
});

const userResponseArrayDispatch = (dispatch) => ({
    newUserResponseArray: (array) => dispatch(newUserResponseArray(array)),
});

const ExamNavigation = () => {
 
    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState);
    const { newNBackState } = nBackStateDispatch(useDispatch())
    const userResponseArray = useSelector(state => state.examNavigationReducer.userResponseArray);
    const { newUserResponseArray } = userResponseArrayDispatch(useDispatch())
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    // 
    const navigationStateTypes = {  
        introductionPage: "Has settings, instructions and a start test button",
        nBackPageTutorial: "nBackTutorialPage, May not be implemented in production version",
    
    }
    //let navigationState = 

    const addPredictiveToUserResponseArray = () => {
        userResponseArray.push('P');
    }

    const addNBackToUserResponseArray = () => {
        userResponseArray.push('N');
    }

    const addSkipToUserResponseArray = () => {
        userResponseArray.push('-');
    }
    
    const keyStrokeListener = (event) => {
        /*
        *  Listens for the keystoke and updates the NBackState
        * ISSUE:  IT repeats all previous keystrokes for some reason, making the process increasingly slower
        */
        console.log('HIT',event.keyCode)
        const buttonNBackState = NBackState;
           switch (event.keyCode) {
            case 87:
                return console.log('W key, Log the Result, Run Next Image Function',newNBackState(NBackState),addNBackToUserResponseArray());
            case 79:
                return console.log('O Key, Log the Result, Run Next Image Function',newNBackState(NBackState),addPredictiveToUserResponseArray());
            case 83:
                return console.log('S Key, Log the Result, Run Next Image Function',newNBackState(NBackState),addSkipToUserResponseArray());
        }
    }
    console.log("Before useEffect()")
    React.useEffect(() => {
    document.addEventListener('keyup', keyStrokeListener);
    console.log("RAN useEffect()");
    
    return function cleanup() {
        document.removeEventListener('keyup', keyStrokeListener);
    };
     });
 


    return (
            
        <div className="buttonSpace">
           
    <button variant="contained" stringValue={"Same as *n* photos Back"} onClick={()=>{newNBackState(NBackState);addNBackToUserResponseArray()}}>"W" - Same as {nBackDegree} photos Back
        </button>

        <button variant="contained" stringValue={"O - Predictive"} onClick={()=>{newNBackState(NBackState);addPredictiveToUserResponseArray()}}>"O" - Predictive - I was told to remember this
        </button>

        <button variant="contained" stringValue={"S - Unique Image"} onClick={()=>{newNBackState(NBackState);addSkipToUserResponseArray()}}>"S" - Unique Image
        </button>
            
        <p>
        userResponseArray from Redux Store: (1 render behind) {userResponseArray.toString()}
        </p>
 
        { NBackState }
        </div>

        )
}

export default ExamNavigation