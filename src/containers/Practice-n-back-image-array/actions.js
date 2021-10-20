import { ActionTypes } from "./constants";

export const setPracticeImageArray = (practiceImageArray) => ({
    type: ActionTypes.PRACTICE_IMAGE_ARRAY,  // from the constants file
    payload: practiceImageArray
});

