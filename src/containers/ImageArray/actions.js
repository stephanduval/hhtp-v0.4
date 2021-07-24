import { ActionTypes } from "./constants";

export const setCorrectResponseArray = (correctResponseArray) => ({
    type: ActionTypes.CORRECT_RESPONSE_ARRAY,  // from the constants file
    payload: correctResponseArray
})

export const setUserResponseArray = (userResponseArray) => ({
    type: ActionTypes.USER_RESPONSE_ARRAY,  // from the constants file
    payload: userResponseArray
})

export const setImageFileNameArray = (imageFileNameArray) => ({
    type: ActionTypes.IMAGE_FILENAME_ARRAY,  // from the constants file
    payload: imageFileNameArray
})

export const setImageFileNameLength = (imageFileNameLength) => ({
    type: ActionTypes.IMAGE_FILENAME_LENGTH,  // from the constants file
    payload: imageFileNameLength
})

export const setPredictiveImageFileNameArray = (PredictiveImageFileNameArray) => ({
    type: ActionTypes.PREDICTIVE_IMAGE_FILENAME_ARRAY,  // from the constants file
    payload: PredictiveImageFileNameArray
})

export const setPredictiveImageFileNameLength = (predictiveImageFileNameLength) => ({
    type: ActionTypes.PREDICTIVE_IMAGE_FILENAME_LENGTH,  // from the constants file
    payload: predictiveImageFileNameLength
})


