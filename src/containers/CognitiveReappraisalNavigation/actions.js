import { ActionTypes } from "./constants";


export const newCRAViewState = (cRViewState) => ({
    type: ActionTypes.ADVANCE_IMAGE,  // from the constants file
    payload: cRViewState+1
})
export const newCRAUserResponseArray = (userResponseArray) => ({
    type: ActionTypes.USER_RESPONSE_ARRAY,  // from the constants file
    payload: userResponseArray
})

export const setRenderState = (renderView) => ({
    type: ActionTypes.RENDER_VIEW,  // from the constants file
    payload: renderView
})

export const setCSVDownloadState = (aBooleanValue) => ({
    type: ActionTypes.CSVSTATE,  // from the constants file
    payload: aBooleanValue
})