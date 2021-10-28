import './CognitiveReappraisalNavigation.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newCRAViewState, setRenderState, newCRAUserResponseArray } from './actions';
import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';
import { Button, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, makeStyles } from '@material-ui/core';
//

const newCRAViewStateDispatch = (dispatch) => ({
    newCRAViewState: (photoState) => dispatch(newCRAViewState(photoState)),
});

const setRenderStateDispatch = (dispatch) => ({
    setRenderState: (photoState) => dispatch(setRenderState(photoState)),
});

const setCRAUserResponseArrayDispatch = (dispatch) => ({
    newCRAUserResponseArray: (array) => dispatch(newCRAUserResponseArray(array)),
});

const useStyles = makeStyles ({
    field: {
        marginTop: 20,
        marginBotton: 20,
        display: 'block'
    }
})





const CognitiveReappraisalExamNavigation = () => {


    const classes = useStyles();
    const CRAViewState = useSelector(state => state.craNavigationReducer.CRAViewState);
    const { setRenderState } = setRenderStateDispatch(useDispatch());
    const { newCRAViewState } = newCRAViewStateDispatch(useDispatch());
    const { newCRAUserResponseArray } = setCRAUserResponseArrayDispatch(useDispatch());
    const a = useSelector(state => state.craNavigationReducer);
    const CRImageArrayFromRedux = useSelector(state => state.cRImageArrayReducer.cRImageArray);
    const userResponseArray = useSelector(state => state.craNavigationReducer.userResponseArray);
    const [category, setCategory] = useState('5')  
    /*
     my first time using the useState hook.  setCategory is the setter and the '' is the
     initial value. category is the variable

     */
    console.log('userResponseArray',userResponseArray)

    const addToUserResponseArray = (value) => {
        userResponseArray.push(value);
    }



    const checkIfTestIsComplete = () => {
        if (CRAViewState == CRImageArrayFromRedux.length-1) {
            setRenderState(navigationPhaseTypes.introductionPage)
        }
    }



    const keyStrokeListener = (event) => {
        /*
        *  Listens for the keystoke and updates the NBackState
        * 
        */
        console.log('HIT',event.keyCode)
        console.log('CRAViewState',CRAViewState);
        console.log('userResponseArray',userResponseArray)
        switch (event.keyCode) {
            case 49:
                return (111);console.log('1 key, Log the Result, Run Next Image Function addNBackToUserResponseArray()');
            case 50:
                return console.log('2 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addPredictiveToUserResponseArray()');
            case 51:
                return console.log('3 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 52:
                return console.log('4 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 53:
                return console.log('5 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 54:
                return console.log('6 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 55:
                 return console.log('7 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 56:
                 return console.log('8 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 57:
                  return console.log('9 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 48:
                 return console.log('0 Key, Log the Result, Run Next Image Function,mnewNBackState(NBackState),addSkipToUserResponseArray()');
            case 97:
                return console.log('keypad 1 key, Log the Result, Run Next Image Function,newNBackState(NBackState),addNBackToUserResponseArray()');
            case 98:
                return console.log('keypad 2 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addPredictiveToUserResponseArray()');
            case 99:
                return console.log('keypad 3 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 100:
                return console.log('keypad 4 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 101:
                return console.log('keypad 5 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 102:
                return console.log('keypad 6 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 103:
                    return console.log('keypad 7 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 104:
                    return console.log('keypad 8 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 105:
                    return console.log('keypad 9 Key, Log the Result, Run Next Image Function,newNBackState(NBackState),addSkipToUserResponseArray()');
            case 96:
                    return console.log('keypad 0 Key, Log the Result, Run Next Image Function,mnewNBackState(NBackState),addSkipToUserResponseArray()');
                    
    }
}

    React.useEffect(() => {
    document.addEventListener('keyup', keyStrokeListener);
    // console.log("RAN useEffect()");
    
    return function cleanup() {
        document.removeEventListener('keyup', keyStrokeListener);
    };
     });
    
     console.log('category',category)

    return (
            
        <div className="buttonSpace">
        
           
           <FormControl className={classes.field} component="fieldset">
               <FormLabel component="legend">Feeling Score</FormLabel>
                    <RadioGroup
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    /*  
                    Take from this tutorial:
                    https://www.youtube.com/watch?v=TtJ3eCLYoRQ
                    */
                    row
                    aria-label="Feeling"
                    defaultValue="5" 
                    name="radio-buttons-group"
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                        <FormControlLabel value="5" control={<Radio />} label="5" />
                        <FormControlLabel value="6" control={<Radio />} label="6" />
                        <FormControlLabel value="7" control={<Radio />} label="7" />
                        <FormControlLabel value="8" control={<Radio />} label="8" />
                        <FormControlLabel value="9" control={<Radio />} label="9" />
                        <FormControlLabel value="10" control={<Radio />} label="10" />
                        </RadioGroup>
                        

                        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="contained" onClick={()=>{newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray(category);console.log("State",CRAViewState)}}>
                        Submit Answer
                        </Button>
        
           </FormControl>
           {CRAViewState}
   
        </div>

        )
};

export default CognitiveReappraisalExamNavigation;