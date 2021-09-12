import { ActionTypes } from "./constants";

export const setRenderState = (state) => ({
    type: ActionTypes.RENDER_VIEW,  // from the constants file
    payload: state
})

