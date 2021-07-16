
import { ActionTypes } from "./constants";
import { filesToPhotosObject } from './../../functions.js';


const images = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/', false, /\.(png|jpe?g|svg)$/));
let imageFileNameArray = Object.keys(images);
let imageFileNameArrayLength = imageFileNameArray.length


const defaultState = {
    numberOfPhotos: 126,
    numberOfPredictivePhotos: 12,
    NumberofnBackMatches: 26,
    nBackDegree: 2,
    timerSeconds: 5,
};

export default function nBackSettings(state = defaultState, action) { 
    switch (action.type) {
        case ActionTypes.NUMBER_OF_PHOTOS:
            return { ...state, numberOfPhotos: action.payload };
        case ActionTypes.NUMBER_OF_PREDICTIVE_PHOTOS:
            return { ...state, numberOfPredictivePhotos: action.payload };
        case ActionTypes.NUMBER_OF_NBACK_MATCHES:
            if (action.payload < 0){
                return { ...state, NumberofnBackMatches: 0 };
            }
            if (action.payload > imageFileNameArrayLength/4){
                return { ...state, NumberofnBackMatches: imageFileNameArrayLength/4 };
            } 
            else {
                return { ...state, NumberofnBackMatches: action.payload };
            }         

        case ActionTypes.NBACK_DEGREE:
            return { ...state, nBackDegree: action.payload };
        case ActionTypes.TIMER_SECONDS:
            return { ...state, timerSeconds: action.payload };
        default:
            return state;
    }
}

