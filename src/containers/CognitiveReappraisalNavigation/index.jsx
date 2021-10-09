import './CognitiveReappraisalNavigation.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRenderState, newNBackState, newUserResponseArray } from './actions';
import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';
import { Button, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from '@material-ui/core';
//

const CognitiveReappraisalExamNavigation = () => {
 
    const keyStrokeListener = (event) => {
        /*
        *  Listens for the keystoke and updates the NBackState
        * ISSUE:  IT repeats all previous keystrokes for some reason, making the process increasingly slower
        */
        console.log('HIT',event.keyCode)

        switch (event.keyCode) {
            case 49:
                return console.log('1 key, Log the Result, Run Next Image Function,newNBackState(NBackState),addNBackToUserResponseArray()');
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
    console.log("Before useEffect()")
    React.useEffect(() => {
    document.addEventListener('keyup', keyStrokeListener);
    // console.log("RAN useEffect()");
    
    return function cleanup() {
        document.removeEventListener('keyup', keyStrokeListener);
    };
     });
    

    return (
            
        <div className="buttonSpace">
        
           
           <FormControl component="fieldset">
               <FormLabel component="legend">Feeling Score</FormLabel>
               <RadioGroup
               row
               aria-label="Feeling Sctore"
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

                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="contained">
          Submit Answer
        </Button>
        
           </FormControl>
   
        </div>

        )
};

export default CognitiveReappraisalExamNavigation;