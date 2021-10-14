
import { ActionTypes } from "./constants";
import { filesToPhotosObject } from './../../functions.js';


const images = filesToPhotosObject(require.context('./../../../public/images/n-back-photos/', false, /\.(png|jpe?g|svg)$/));
let imageFileNameArray = Object.keys(images);
let imageFileNameArrayLength = imageFileNameArray.length


const defaultState = {
    numberOfPhotosAlt: 106,
    numberOfPhotos: 106,  // does not take number below 50
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
        else {
                return { ...state, NumberofnBackMatches: action.payload };
            }         

        case ActionTypes.NBACK_DEGREE:
            return { ...state, nBackDegree: action.payload };
        case ActionTypes.TIMER_SECONDS:
            return { ...state, timerSeconds: action.payload };
            case ActionTypes.NUMBER_OF_PHOTOS_ALT:
                return { ...state, numberOfPhotosAlt: action.payload };
        default:
            return state;
    }
}


