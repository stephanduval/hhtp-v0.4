import React from 'react';
import '../../App.css';
import './StartCognitiveReappraisalTestButton.css';
import { useSelector, useDispatch } from 'react-redux';
import { setRenderState } from '../ExamNavigation/actions';
import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';
import { Button } from '@material-ui/core';
     
const renderViewDispatch = (dispatch) => ({
    setRenderState: (nameState) => dispatch(setRenderState(nameState)),
});



const PracticeCognitiveReappraisalTestButton = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    //-------------------- Functions Fetch and Store Data for the setRenderState:

    const { setRenderState } = renderViewDispatch(useDispatch());  

    //-------------------- END of functions Fetch and Store Data for the setRenderState
    return (//
        
<div className="mainPageButtons">


<Button color ="secondary" variant="contained" stringvalue={"Practice Cognitive Reappraisal Test"} onClick={()=>{setRenderState(navigationPhaseTypes.practiceCognitiveReappraisalTest);console.log("clicked practice cognitive reappraisal test start button")}}>Practice Cognitive Reappraisal Test
        </Button>

        
        
</div>
    )
   
}

export default PracticeCognitiveReappraisalTestButton;

