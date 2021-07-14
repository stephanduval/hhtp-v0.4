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
const nBackDegreeDispatch = (dispatch) => ({
  setnBackDegree: (nBackDegree) => dispatch(setnBackDegree(nBackDegree)),
});
const timerSecondsDispatch = (dispatch) => ({
  setTimerSeconds: (timerSeconds) => dispatch(setTimerSeconds(timerSeconds)),
});


const Settings = () => { 

    const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    const numberOfPredictivePhotos = useSelector(state => state.nBackSettingsReducer.numberOfPredictivePhotos);
    const NumberofnBackMatches = useSelector(state => state.nBackSettingsReducer.NumberofnBackMatches);
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    const timerSeconds = useSelector(state => state.nBackSettingsReducer.timerSeconds);
    const imageFileNameArrayLength = useSelector(state => state.photoSpaceReducer.imageFileNameArrayLength);

    const { setNumberofPhotos } = numberOfPhotosDispatch(useDispatch());
    const { setNumberOfPredictivePhotos } = numberOfPredictivePhotosDispatch(useDispatch());
    const { setNumberofnBackMatches } = NumberofnBackMatchesDispatch(useDispatch());
    const { setnBackDegree } = nBackDegreeDispatch(useDispatch());
    const { setTimerSeconds } = timerSecondsDispatch(useDispatch());

    
(useDispatch());

    return (
        
<div className="nBackSettings">
settings bar

<form>
<ul>
  <li><label>
    numberOfPhotos:  
    <input type="number" name="numberOfPhotos" onChange={(e) => {setNumberofPhotos(e.target.value)}}/>  {numberOfPhotos}
  </label>
  </li>
  <li><label>
  numberOfPredictivePhotos:
    <input type="number" name="numberOfPredictivePhotos" onChange={(e) => {setNumberOfPredictivePhotos(e.target.value)}}/> {numberOfPredictivePhotos}
  </label>
  </li>
  <li><label>
  NumberofnBackMatches:
    <input type="number" name="NumberofnBackMatches" onChange={(e) => {setNumberofnBackMatches(e.target.value)}}/> {NumberofnBackMatches}
  </label>
  </li>
  <li><label>
  nBackDegree:
    <input type="number" name="nBackDegree" onChange={(e) => {setnBackDegree(e.target.value)}}/> {nBackDegree}
  </label>
  </li>
  <li><label>
  timerSeconds:
    <input type="number" name="timerSeconds" onChange={(e) => {setTimerSeconds(e.target.value)}}/> {timerSeconds}
  </label>
  </li>

  <input type="submit" value="Reset to Defaults" />
</ul>
</form>
Total Number of images in array: {imageFileNameArrayLength}

  </div>
 
    )
    }

export default Settings;


