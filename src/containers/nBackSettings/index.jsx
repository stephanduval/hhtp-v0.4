import React from 'react';
import './nBackSettings.css';
import { useDispatch, useSelector } from 'react-redux';
import { setNumberofPhotos, setNumberOfPredictivePhotos, setNumberofnBackMatches, setnBackDegree, setTimerSeconds } from './actions';
import { validateNumberOfPhotos, validateNumberOfPredictivePhotos, validatesetNumberofnBackMatches, validatesetnBackDegree, validatesetTimerSeconds } from './../../functions';

//-------------------- CONTSTANTS FOR REDUX TO DISPATCH ACTIONS: 


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

//-------------------- END OF CONTSTANTS FOR REDUX TO DISPATCH ACTIONS


const Settings = () => { 

  //-------------------- Functions Fetch and Store Data for the Settings Page:


    const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    const numberOfPredictivePhotos = useSelector(state => state.nBackSettingsReducer.numberOfPredictivePhotos);
    const NumberofnBackMatches = useSelector(state => state.nBackSettingsReducer.NumberofnBackMatches);
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    const timerSeconds = useSelector(state => state.nBackSettingsReducer.timerSeconds);
    const imageFileNameArrayLength = useSelector(state => state.imageArrayReducer.imageFileNameLength);  // This is not the real value
    const ReduxPredictiveFileNameArrayLength = useSelector(state => state.imageArrayReducer.predictiveImageFileNameLength)

    const { setNumberofPhotos } = numberOfPhotosDispatch(useDispatch());
    const { setNumberOfPredictivePhotos } = numberOfPredictivePhotosDispatch(useDispatch());
    const { setNumberofnBackMatches } = NumberofnBackMatchesDispatch(useDispatch());
    const { setnBackDegree } = nBackDegreeDispatch(useDispatch());
    const { setTimerSeconds } = timerSecondsDispatch(useDispatch());

//-------------------- End of Functions to Fetch and Store Data for the Settings Page:

//-------------------- Settings Form Event Handlers:

const setNumberofPhotosFormEventHandler = () => {
  setNumberOfPredictivePhotos(validateNumberOfPredictivePhotos(numberOfPredictivePhotos, ReduxPredictiveFileNameArrayLength, numberOfPhotos));
  setNumberofnBackMatches(validatesetNumberofnBackMatches(NumberofnBackMatches, numberOfPhotos));
}
//-------------------- End Settings Event Handlers

//-------------------- Rendered Website:

    return (
        
<div className="nBackSettings">
settings bar

<form>
<ul>
  <li><label>
    numberOfPhotos:  
    <input type="number" name="numberOfPhotos" onChange={(e) => {setNumberofPhotos(validateNumberOfPhotos(e.target.value, imageFileNameArrayLength));setNumberofPhotosFormEventHandler()}}/>  {numberOfPhotos}
  </label>
  </li>
  <li><label>
  numberOfPredictivePhotos: (should also be limited by number of photos in folder)
    <input type="number" name="numberOfPredictivePhotos" onChange={(e) => {setNumberOfPredictivePhotos(validateNumberOfPredictivePhotos(e.target.value, ReduxPredictiveFileNameArrayLength, numberOfPhotos))}}/> {numberOfPredictivePhotos}
  </label>
  </li>
  <li><label>
  NumberofnBackMatches: (Capped at 1/5 the Image Set Size)
    <input type="number" name="NumberofnBackMatches" onChange={(e) => {setNumberofnBackMatches(validatesetNumberofnBackMatches(e.target.value))}}/> {NumberofnBackMatches}
  </label>
  </li>
  <li><label>
  nBackDegree: (Capped at 11)
    <input type="number" name="nBackDegree" onChange={(e) => {setnBackDegree(validatesetnBackDegree(e.target.value))}}/> {nBackDegree}
  </label>
  </li>
  <li><label>
  timerSeconds: (capped at 15 seconds)
    <input type="number" name="timerSeconds" onChange={(e) => {setTimerSeconds(validatesetTimerSeconds(e.target.value))}}/> {timerSeconds}
  </label>
  </li>

  <input type="submit" value="Reset to Defaults" />
</ul>
</form>
Total Number of images in array: {imageFileNameArrayLength}

  </div>
 
    )
    }
//-------------------- End of Rendered Website



export default Settings;


