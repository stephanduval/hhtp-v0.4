import React from 'react';
import './nBackSettings.css';
import { useDispatch, useSelector } from 'react-redux';
import { setNumberofPhotos, setNumberOfPredictivePhotos, setNumberofnBackMatches, setnBackDegree, setTimerSeconds } from './actions';


 /*  VARIABLES:

let numberOfPhotos = 126;
let numberOfPredictivePhotos = 12;
let NumberofnBackMatches = 26;
let nBackDegree = 2;
let  = 5;

export const ActionTypes = {  
    NUMBER_OF_PHOTOS: "app/containers/Settings/NUMBER_OF_PHOTOS",
    NUMBER_OF_PREDICTIVE_PHOTOS: "app/containers/Settings/NUMBER_OF_PREDICTIVE_PHOTOS",
    NUMBER_OF_NBACK_MATCHES: "app/containers/Settings/NUMBER_OF_NBACK_MATCHES",
    NBACK_DEGREE: "app/containers/Settings/NBACK_DEGREE",
    TIMER_SECONDS: "app/containers/Settings/TIMER_SECONDS",
    

*/

const numberOfPhotosDispatch = (dispatch) => ({
  setNumberofPhotos: (numberOfPhotos) => dispatch(setNumberofPhotos(numberOfPhotos)),
});
const numberOfPredictivePhotosDispatch = (dispatch) => ({
  setNumberOfPredictivePhotos: (numberOfPredictivePhotos) => dispatch(setNumberOfPredictivePhotos(numberOfPredictivePhotos)),
});
const NumberofnBackMatchesDispatch = (dispatch) => ({
  setNumberofnBackMatches: (NumberofnBackMatches) => dispatch(setNumberofnBackMatches(NumberofnBackMatches)),
});
const nBackDegree = (dispatch) => ({
  setnBackDegree: (nBackDegree) => dispatch(setnBackDegree(nBackDegree)),
});
const timerSeconds = (dispatch) => ({
  setTimerSeconds: (timerSeconds) => dispatch(setTimerSeconds(timerSeconds)),
});


const Settings = () => { 

    const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    const numberOfPredictivePhotos = useSelector(state => state.nBackSettingsReducer.numberOfPredictivePhotos);
    const NumberofnBackMatches = useSelector(state => state.nBackSettingsReducer.NumberofnBackMatches);
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    const timerSeconds = useSelector(state => state.nBackSettingsReducer.timerSeconds);

    const { setNumberofPhotos } = numberOfPhotosDispatch(useDispatch());
    const { setNumberOfPredictivePhotos } = numberOfPredictivePhotosDispatch(useDispatch());
    const { setNumberofnBackMatches } = NumberofnBackMatchesDispatch(useDispatch());
   // const { setnBackDegree } = nBackDegree(useDispatch());
  //  const { setTimerSeconds } = timerSeconds(useDispatch());

    return (
        
<div className="nBackSettings">
settings bar

<form>
<ul>
  <li><label>
    numberOfPhotos:  
    <input type="text" name="name" />  {numberOfPhotos}
  </label>
  </li>
  <li><label>
  numberOfPredictivePhotos:
    <input type="text" name="name" /> {numberOfPredictivePhotos}
  </label>
  </li>
  <li><label>
  NumberofnBackMatches:
    <input type="text" name="name" /> {NumberofnBackMatches}
  </label>
  </li>
  <li><label>
  nBackDegree:
    <input type="text" name="name" /> {nBackDegree}
  </label>
  </li>
  <li><label>
  timerSeconds:
    <input type="text" name="name" /> {timerSeconds}
  </label>
  </li>

  <input type="submit" value="Submit" />
</ul>
</form>


  </div>
 
    )
    }

export default Settings;


