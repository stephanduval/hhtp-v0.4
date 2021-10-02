import { ActionTypes } from "./constants";


export const newCRAViewState = (nBackState) => ({
    type: ActionTypes.ADVANCE_IMAGE,  // from the constants file
    payload: nBackState+1
})
export const newCRAUserResponseArray = (userResponseArray) => ({
    type: ActionTypes.USER_RESPONSE_ARRAY,  // from the constants file
    payload: userResponseArray
})

export const setRenderState = (renderView) => ({
    type: ActionTypes.RENDER_VIEW,  // from the constants file
    payload: renderView
})