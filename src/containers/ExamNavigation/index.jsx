import './ExamNavigation.css';
import React from 'react';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRenderState, newNBackState, newUserResponseArray, newUserAnswerTimeArray} from './actions';
//import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';
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

const userAnswerTimeArrayDispatch = (dispatch) => ({
    newUserAnswerTimeArray: (array) => dispatch(newUserAnswerTimeArray(array)),
});


const ExamNavigation = () => {

 
    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState);
    const { newNBackState } = nBackStateDispatch(useDispatch());
    const userResponseArray = useSelector(state => state.examNavigationReducer.userResponseArray);
    const userAnswerTimeArray = useSelector(state => state.examNavigationReducer.answerTimeArray);
    //const { newUserResponseArray } = userResponseArrayDispatch(useDispatch());
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    //const { setRenderState } = renderViewDispatch(useDispatch());  
    //const renderViewFromReduxStore = useSelector(state => state.examNavigationReducer.renderView);
    //const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    const timerSeconds = 1000*(useSelector(state => state.nBackSettingsReducer.timerSeconds));
   
/*
    https://stackoverflow.com/questions/53633698/referencing-outdated-state-in-react-useeffect-hook
    Refs don't give you the closure issue mentioned above because refs is an object with a current field
    and multiple calls to useRef will return you the same object. As long as you mutate the .current
    b value, your useEffect can always (only) read the most updated value.

*/
    
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

    const addTimeToUserAnswerTimeArray = (time) => {
        userAnswerTimeArray.push(time);
    }

    //const NBackState = userAnswerTimeArray.length
    
    let timerStart = new Date().getTime();

    const timeTakenToAnswer = (timerStart) => {
        
        console.log("Timer Start", timerStart);
        return (new Date().getTime() - timerStart)
    }
    
    const switchPhotosOnInterval = () => {
       
    setInterval(() => {
        /*
        *  Logs a answer as skipped if a certain amount of time passes
        */
        newNBackState(NBackState)
        addSkippedToUserResponseArray();
        let TimeTaken = timeTakenToAnswer(timerStart);
        addTimeToUserAnswerTimeArray(timeTakenToAnswer(timerStart))
        console.log("Time Taken",TimeTaken);

  
       }, timerSeconds);

    }

    //  useEffect(() => {switchPhotosOnInterval(NBackState,timerSeconds);
        
    //     return () => clearInterval(switchPhotosOnInterval);
    //   }, []);
    

//==============================

// let n = 0
// const addN = () => {n++};    

// const switchPhotosOnInterval = () => {
   
// setInterval(() => {
//     /*
//     *  Logs a answer as skipped if a certain amount of time passes
//     */
//     newNBackState(n);
//     addSkippedToUserResponseArray();
//     let TimeTaken = timeTakenToAnswer(timerStart);
//     console.log("Time Taken",TimeTaken);
//     addN();
//     console.log(n)

//    }, timerSeconds);

// }

//  useEffect(() => {switchPhotosOnInterval(NBackState,timerSeconds)
    
//     return () => clearInterval(switchPhotosOnInterval);
//   }, []);

//==============================

    // const runSwitchPhotosOnInterval = (NBackState) => {
    // switchPhotosOnInterval(NBackState)
        
    //  return () => clearInterval(switchPhotosOnInterval);


    // }

    const keyStrokeListener = (event) => {      
        /*
        *  Listens for the keystoke and updates the NBackState
        */
        console.log('HIT',event.keyCode)
        const buttonNBackState = NBackState;
           switch (event.keyCode) {
            case 87:
                return console.log('W key, Log the Result, Run Next Image Function',newNBackState(NBackState),addNBackToUserResponseArray(),clearInterval(switchPhotosOnInterval),addTimeToUserAnswerTimeArray(timeTakenToAnswer(timerStart)));
            case 79:
                return console.log('O Key, Log the Result, Run Next Image Function',newNBackState(NBackState),addPredictiveToUserResponseArray(),clearInterval(switchPhotosOnInterval),addTimeToUserAnswerTimeArray(timeTakenToAnswer(timerStart)));
            case 83:
                return console.log('S Key, Log the Result, Run Next Image Function',newNBackState(NBackState),addSkipToUserResponseArray(),clearInterval(switchPhotosOnInterval),addTimeToUserAnswerTimeArray(timeTakenToAnswer(timerStart)));
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
 

    return (
        
            
        <div className="buttonSpace">

    <Button color ="primary" variant="contained" stringvalue={"Same as *n* photos Back"} onClick={()=>{newNBackState(NBackState);addNBackToUserResponseArray();addTimeToUserAnswerTimeArray(timeTakenToAnswer(timerStart))}}>"W" - Same as {nBackDegree} photos Back
        </Button>

        <Button color ="default" variant="contained" stringvalue={"O - Predictive"} onClick={()=>{newNBackState(NBackState);addPredictiveToUserResponseArray();addTimeToUserAnswerTimeArray(timeTakenToAnswer(timerStart))}}>"O" - Predictive - I was told to remember this
        </Button>

        <Button color ="secondary" variant="contained" stringvalue={"S - Unique Image"} onClick={()=>{newNBackState(NBackState);addSkipToUserResponseArray();addTimeToUserAnswerTimeArray(timeTakenToAnswer(timerStart))}}>"S" - Unique Image
        </Button>

   


        </div>

        )
}

export default ExamNavigation