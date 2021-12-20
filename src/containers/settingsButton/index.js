import React from 'react';
import '../../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setRenderState } from '../ExamNavigation/actions';
import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';
import { Button } from '@material-ui/core';
     
const renderViewDispatch = (dispatch) => ({
    setRenderState: (nameState) => dispatch(setRenderState(nameState)),
});




const SettingsButton = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    //-------------------- Functions Fetch and Store Data for the setRenderState:

    const { setRenderState } = renderViewDispatch(useDispatch());  

    //-------------------- END of functions Fetch and Store Data for the setRenderState
    return (//
        
<div className="mainPageButtons">


<Button color ="secondary" variant="contained" stringvalue={"Start Cognitive Reappraisal Test"} onClick={()=>{setRenderState(navigationPhaseTypes.settings)}}>Settings
        </Button>

        
        
</div>
    )
   
}

export default SettingsButton;

