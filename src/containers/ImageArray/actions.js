import { ActionTypes } from "./constants";

export const spliceNBacksIntoArray = (nBackArray) => ({
    type: ActionTypes.nBackArray,  // from the constants file
    payload: nBackArray
})

