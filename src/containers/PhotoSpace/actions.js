import { ActionTypes } from "./constants";

export const setCorrectResponseArray = (correctResponseArray) => ({
    type: ActionTypes.CORRECT_RESPONSE_ARRAY,  // from the constants file
    payload: correctResponseArray
})