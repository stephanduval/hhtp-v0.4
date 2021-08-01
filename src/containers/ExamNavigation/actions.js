import { ActionTypes } from "./constants";

export const newNBackState = (nBackState) => ({
    type: ActionTypes.ADVANCE_IMAGE,  // from the constants file
    payload: nBackState+1
})
export const newUserResponseArray = (userResponseArray) => ({
    type: ActionTypes.USER_RESPONSE_ARRAY,  // from the constants file
    payload: userResponseArray
})