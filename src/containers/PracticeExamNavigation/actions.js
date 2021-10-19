import { ActionTypes } from "./constants";


export const newPracticeNBackState = (practiceNBackState) => ({
    type: ActionTypes.ADVANCE_IMAGE,  // from the constants file
    payload: practiceNBackState+1
})

export const setPracticeRenderState = (renderView) => ({
    type: ActionTypes.RENDER_VIEW,  // from the constants file
    payload: renderView
})
