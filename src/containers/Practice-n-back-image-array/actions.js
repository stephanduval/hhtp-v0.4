import { ActionTypes } from "./constants";

export const setPracticeImageArray = (practiceImageArray) => ({
  type: ActionTypes.PRACTICE_IMAGE_ARRAY, // from the constants file
  payload: practiceImageArray,
});

export const setTestPracticeStateArray = (testPracticeStateArrayParam) => ({
  type: ActionTypes.TEST_PRACTICE_STATE_ARRAY, // from the constants file
  payload: testPracticeStateArrayParam,
});
