import { ActionTypes } from "./constants";
import { filesToPhotosObject } from './../../functions.js';


const images = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/', false, /\.(png|jpe?g|svg)$/));
let imageFileNameArray = Object.keys(images);
let imageFileNameArrayLength = imageFileNameArray.length


export const setNumberofPhotos = (numberOfPhotos) => ({
    type: ActionTypes.NUMBER_OF_PHOTOS,  // from the constants file
    payload: numberOfPhotos
})

export const setNumberOfPredictivePhotos = (numberOfPredictivePhotos) => ({
    type: ActionTypes.NUMBER_OF_PREDICTIVE_PHOTOS,  // from the constants file
    payload: numberOfPredictivePhotos
})

export const setNumberofnBackMatches = (numberofnBackMatches) => ({
    type: ActionTypes.NUMBER_OF_NBACK_MATCHES,  // from the constants file
    payload: numberofnBackMatches
})

export const setnBackDegree = (nBackDegree) => ({
    type: ActionTypes.NBACK_DEGREE,  // from the constants file
    payload: nBackDegree
})

export const setTimerSeconds = (timerSeconds) => ({
    type: ActionTypes.TIMER_SECONDS,  // from the constants file
    payload: timerSeconds
})


