import React from 'react';
import './nBackSettings.css';
import { useDispatch, useSelector } from 'react-redux';
import { setNumberofPhotos, setNumberOfPredictivePhotos, setNumberofnBackMatches, setnBackDegree, setTimerSeconds } from './actions';
import { filesToPhotosObject } from '../../functions';




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

//-------------------- END OF CONTSTANTS FOR REDUX TO DISPATCH ACTIONS: 

//-------------------- Function that will render the Settings Page:


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

      //------ FUNCTIONS TO VALIDATE DATA BEFORE IT IS SENT TO STORE:

const validateNumberOfPhotos = (numberOfPhotos) => {
          if (numberOfPhotos < 0){
              return 0;
          }
          if (numberOfPhotos > imageFileNameArrayLength){
              return imageFileNameArrayLength;
          } 
          else {
            return numberOfPhotos;      
    }
  }

const validateNumberOfPredictivePhotos = (numberOfPredictivePhotos) => {
        if (numberOfPredictivePhotos < 0){
            return 0;
        }
        if (numberOfPredictivePhotos > numberOfPhotos){
            return numberOfPhotos;
        } 
        else {
          return numberOfPredictivePhotos;      
      }
    }
    
const validatesetNumberofnBackMatches = (setNumberofnBackMatches) => {
          if (setNumberofnBackMatches < 0){
              return 0;
          }
          if (setNumberofnBackMatches > numberOfPhotos/5){
              return Math.ceil(numberOfPhotos/5);
          } 
          else {
            return setNumberofnBackMatches;      
        }
      }

const validatesetnBackDegree = (nBackDegree) => {
          if (nBackDegree < 0){
              return 0;
          }
          if (nBackDegree > 11){
              return 11;
          } 
          else {
            return nBackDegree;      
        }
      }
  

const validatesetTimerSeconds = (setTimerSeconds) => {        
          if (setTimerSeconds < 0){
              return 0;
          }
          if (setTimerSeconds > 15000){
              return 15000;
          } 
          else {
            return setTimerSeconds;      
        }
      }
        
  

      //------ END OF FUNCTIONS TO VALIDATE DATA BEFORE IT IS SENT TO STORE


//-------------------- Settings Form Event Handlers:

const setNumberofPhotosFormEventHandler = () => {
  setNumberOfPredictivePhotos(validateNumberOfPredictivePhotos(numberOfPredictivePhotos));
  setNumberofnBackMatches(validatesetNumberofnBackMatches(NumberofnBackMatches));
}
//-------------------- End Settings Event Handlers

(useDispatch());

//-------------------- End of Functions that will render the Settings Page

//-------------------- Rendered Website


    return (
        
<div className="nBackSettings">
settings bar

<form>
<ul>
  <li><label>
    numberOfPhotos:  
    <input type="number" name="numberOfPhotos" onChange={(e) => {setNumberofPhotos(validateNumberOfPhotos(e.target.value));setNumberofPhotosFormEventHandler()}}/>  {numberOfPhotos}
  </label>
  </li>
  <li><label>
  numberOfPredictivePhotos:
    <input type="number" name="numberOfPredictivePhotos" onChange={(e) => {setNumberOfPredictivePhotos(validateNumberOfPredictivePhotos(e.target.value))}}/> {numberOfPredictivePhotos}
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


