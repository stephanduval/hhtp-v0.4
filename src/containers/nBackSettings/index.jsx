import React from 'react';
import './nBackSettings.css';
import { useDispatch, useSelector } from 'react-redux';
import { setNumberofPhotos, setNumberOfPredictivePhotos, setNumberofnBackMatches, setnBackDegree, setTimerSeconds, setNumberOfPhotosAlt } from './actions';
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
const numberOfPhotosAltDispatch = (dispatch) => ({
  setNumberOfPhotosAlt: (numberOfPhotosAlt) => dispatch(setNumberOfPhotosAlt(numberOfPhotosAlt)),
});
//-------------------- END OF CONTSTANTS FOR REDUX TO DISPATCH ACTIONS


const Settings = () => { 

  //-------------------- Functions Fetch and Store Data for the Settings Page:


    const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    const numberOfPhotosAlt = useSelector(state => state.nBackSettingsReducer.numberOfPhotosAlt);
    const numberOfPredictivePhotos = useSelector(state => state.nBackSettingsReducer.numberOfPredictivePhotos);
    const NumberofnBackMatches = useSelector(state => state.nBackSettingsReducer.NumberofnBackMatches);
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    const timerSeconds = useSelector(state => state.nBackSettingsReducer.timerSeconds);
    const imageFileNameArrayLength = useSelector(state => state.imageArrayReducer.imageFileNameLength);  // This is not the real value
    const ReduxPredictiveFileNameArrayLength = useSelector(state => state.imageArrayReducer.predictiveImageFileNameLength)
    const reduxImageSet = useSelector(state => state.imageArrayReducer.imageSet);
    const reduxScoringArray = useSelector(state => state.imageArrayReducer.scoringArray);

    const { setNumberofPhotos } = numberOfPhotosDispatch(useDispatch());
    const { setNumberOfPredictivePhotos } = numberOfPredictivePhotosDispatch(useDispatch());
    const { setNumberofnBackMatches } = NumberofnBackMatchesDispatch(useDispatch());
    const { setnBackDegree } = nBackDegreeDispatch(useDispatch());
    const { setTimerSeconds } = timerSecondsDispatch(useDispatch());
    const { setNumberOfPhotosAlt } = numberOfPhotosAltDispatch(useDispatch());

//-------------------- End of Functions to Fetch and Store Data for the Settings Page:

//-------------------- Settings Form Event Handlers:

const setNumberofPhotosFormEventHandler = () => {
  setNumberOfPredictivePhotos(validateNumberOfPredictivePhotos(numberOfPredictivePhotos, ReduxPredictiveFileNameArrayLength, numberOfPhotos));
  setNumberofnBackMatches(validatesetNumberofnBackMatches(NumberofnBackMatches, numberOfPhotos));
}
//-------------------- End Settings Event Handlers

//-------------------- Rendered Website:

    return (
<div>
<div className="header">
<h2>Welcome to a early version of the n-back test</h2>
<p></p>
You will be presented with a number of images.  Follow the instructions given and your responses will be recorded.
<p></p>
Following the exam the page will reset and the tester will be able to review the results and download them as a CSV
<p></p>
This is an early version for testing and review purposes.
<p></p>
This page is designed for the tester to customize the testing parameters.
<h3>Settings:</h3>
<h3></h3>

</div>

<div className="nBackSettings">



<form>
<ul>
  <li><label>
    numberOfPhotos:  
    <input type="number" name="numberOfPhotos" onChange={(e) => {setNumberofPhotos(validateNumberOfPhotos(e.target.value, nBackDegree, numberOfPredictivePhotos, imageFileNameArrayLength));setNumberofPhotosFormEventHandler()}}/>  {numberOfPhotos}
  </label>
  </li>
  <li><label>
  numberOfPredictivePhotos: (should also be limited by number of photos in folder)
    <input type="number" name="numberOfPredictivePhotos" onChange={(e) => {setNumberOfPredictivePhotos(validateNumberOfPredictivePhotos(e.target.value, ReduxPredictiveFileNameArrayLength, numberOfPhotos))}}/> {numberOfPredictivePhotos}
  </label>  
  </li>
  <li><label>
  NumberofnBackMatches: (higher numbers will crash the program)
    <input type="number" name="NumberofnBackMatches" onChange={(e) => {setNumberofnBackMatches(validatesetNumberofnBackMatches(e.target.value, numberOfPhotos))}}/> {NumberofnBackMatches}
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
<p>{/*reduxImageSet.toString()*/}</p>
  </div>
  </div>
 
    )
    }
//-------------------- End of Rendered Website



export default Settings;


