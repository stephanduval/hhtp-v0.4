import { ActionTypes } from "./constants";

export const newNBackState = (nBackState) => ({
    type: ActionTypes.ADVANCE_IMAGE,  // from the constants file
    payload: nBackState+1
})
export const newUserResponseArray = (userResponseArray) => ({
    type: ActionTypes.USER_RESPONSE_ARRAY,  // from the constants file
    payload: userResponseArray
})

export const setRenderState = (renderView) => ({
    type: ActionTypes.RENDER_VIEW,  // from the constants file
    payload: renderView
})

export const newUserAnswerTimeArray = (answerTimeArray) => ({
    type: ActionTypes.USER_ANSWER_TIME,  // from the constants file
    payload: answerTimeArray
})
export const duplicateTheImageArray = (duplicateImageArray) => ({
    type: ActionTypes.DUPLICATE_IMAGE_ARRAY,  // from the constants file
    payload: duplicateImageArray
})