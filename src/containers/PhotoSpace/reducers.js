
import { ActionTypes } from "./constants";
import { filesToPhotosObject } from './../../functions.js';

const images = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/RandomLot/', false, /\.(png|jpe?g|svg)$/));
let imageFileNameArray = Object.keys(images);
let imageFileNameArrayLength = imageFileNameArray.length;

const defaultState = {
    correctResponseArray: [],
    userResponseArray: [],
    imageFileNameArray: [],
    imageFileNameArrayLength: imageFileNameArrayLength,

};

export default function photoSpace(state = defaultState, action) { 
    switch (action.type) {
        /*case ActionTypes.CORRECT_RESPONSE_ARRAY:
            return { ...state, correctResponseArray: action.payload };*/
        /*case ActionTypes.USER_RESPONSE_ARRAY:
            return { ...state, userResponseArray: action.payload };*/
        /*case ActionTypes.IMAGE_FILENAME_ARRAY:
            return { ...state, imageFileNameArray: action.payload };*/
        default:
            return state;
    }
}
 