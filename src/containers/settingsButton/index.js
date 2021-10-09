import React from 'react';
import './Settings.css';
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
        
<div className="settings">


<Button color ="tertiary" variant="contained" stringValue={"Start Cognitive Reappraisal Test"} onClick={()=>{setRenderState(navigationPhaseTypes.settings)}}>Settings
        </Button>

        
        
</div>
    )
   
}

export default SettingsButton;

