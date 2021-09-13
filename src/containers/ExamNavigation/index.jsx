import './ExamNavigation.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRenderState, newNBackState, newUserResponseArray } from './actions';
import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';


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

       // ==== Creating an Object to determine the different phases (states) the app
    
       console.log("state renderview 1", renderViewFromReduxStore);
       //   let aaa = 11;
      // renderViewDispatch(useDispatch('hi'));

       //console.log(renderViewDispatch(useDispatch(11)));
      // let aaa = 11;
     //  setRenderState(aaa);

    console.log("state renderview 2", renderViewFromReduxStore);


    //case ActionTypes.ADVANCE_IMAGE:
    //    return { ...state, newNBackState: action.payload };

    
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
 
     console.log("Nback State and number of pred Photos",NBackState,numberOfPhotos);
     if (NBackState > numberOfPhotos) {
        setRenderState(navigationPhaseTypes.nBackComplete);
     }


    return (
            
        <div className="buttonSpace">
           
    <button variant="contained" stringValue={"Same as *n* photos Back"} onClick={()=>{newNBackState(NBackState);addNBackToUserResponseArray()}}>"W" - Same as {nBackDegree} photos Back
        </button>

        <button variant="contained" stringValue={"O - Predictive"} onClick={()=>{newNBackState(NBackState);addPredictiveToUserResponseArray()}}>"O" - Predictive - I was told to remember this
        </button>

        <button variant="contained" stringValue={"S - Unique Image"} onClick={()=>{newNBackState(NBackState);addSkipToUserResponseArray()}}>"S" - Unique Image
        </button>

        </div>

        )
}

export default ExamNavigation