import React from 'react';
import './StartCognitiveReappraisalTestButton.css';
import { useSelector, useDispatch } from 'react-redux';
import { setRenderState } from '../ExamNavigation/actions';
import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';
import { Button } from '@material-ui/core';
     
const renderViewDispatch = (dispatch) => ({
    setRenderState: (nameState) => dispatch(setRenderState(nameState)),
});




const StartCognitiveReappraisalTestButton = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    //-------------------- Functions Fetch and Store Data for the setRenderState:

    const { setRenderState } = renderViewDispatch(useDispatch());  

    //-------------------- END of functions Fetch and Store Data for the setRenderState
    return (//
        
<div className="StartCognitiveReappraisalTestButton">


<Button color ="tertiary" variant="contained" stringValue={"Start Cognitive Reappraisal Test"} onClick={()=>{setRenderState(navigationPhaseTypes.cognitiveReappraisalTest);console.log("clicked  cognitive reappraisal test start button")}}>Start Cognitive Reappraisal Test
        </Button>

        
        
</div>
    )
   
}

export default StartCognitiveReappraisalTestButton;

