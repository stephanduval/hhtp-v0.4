import React from 'react';
import './StartPracticeNBackTestButton.css';
import { useDispatch } from 'react-redux';
import { setRenderState } from '../ExamNavigation/actions';
import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';
import { Button } from '@material-ui/core';
     
const renderViewDispatch = (dispatch) => ({
    setRenderState: (nameState) => dispatch(setRenderState(nameState)),
});




const StartPracticeTestButton = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    //-------------------- Functions Fetch and Store Data for the setRenderState:

    const { setRenderState } = renderViewDispatch(useDispatch());  

    //-------------------- END of functions Fetch and Store Data for the setRenderState
    return (//
        
<div className="StartPracticeTestButton">
    

<Button color ="secondary" variant="contained" stringvalue={"Same as *n* photos Back"} onClick={()=>{setRenderState(navigationPhaseTypes.practiceNBackTest)}}>Start Practice NBack Test
        </Button>
        
        
</div>
    )
   
}

export default StartPracticeTestButton;

