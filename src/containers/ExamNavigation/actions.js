import { ActionTypes } from "./constants";

export const newNBackState = (nBackState) => ({
    type: ActionTypes.ADVANCE_IMAGE,  // from the constants file
    payload: nBackState+1
})