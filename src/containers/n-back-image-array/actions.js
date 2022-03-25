import { ActionTypes } from "./constants";

export const setCorrectResponseArray = (correctResponseArray) => ({
  type: ActionTypes.CORRECT_RESPONSE_ARRAY, // from the constants file
  payload: correctResponseArray,
});

export const setUserResponseArray = (userResponseArray) => ({
  type: ActionTypes.USER_RESPONSE_ARRAY, // from the constants file
  payload: userResponseArray,
});

export const setImageFileNameArray = (imageFileNameArray) => ({
  type: ActionTypes.IMAGE_FILENAME_ARRAY, // from the constants file
  payload: imageFileNameArray,
});

export const setImageFileNameLength = (imageFileNameLength) => ({
  type: ActionTypes.IMAGE_FILENAME_LENGTH, // from the constants file
  payload: imageFileNameLength,
});

export const setPredictiveImageFileNameArray = (
  PredictiveImageFileNameArray
) => ({
  type: ActionTypes.PREDICTIVE_IMAGE_FILENAME_ARRAY, // from the constants file
  payload: PredictiveImageFileNameArray,
});

export const setPredictiveImageFileNameLength = (
  predictiveImageFileNameLength
) => ({
  type: ActionTypes.PREDICTIVE_IMAGE_FILENAME_LENGTH, // from the constants file
  payload: predictiveImageFileNameLength,
});

export const setImageSet = (imageSet) => ({
  type: ActionTypes.IMAGE_SET, // from the constants file
  payload: imageSet,
});

export const setScoringArray = (scoringArray) => ({
  type: ActionTypes.SCORING_ARRAY, // from the constants file
  payload: scoringArray,
});

export const setFinalFileNameArray = (finalFileNameArray) => ({
  type: ActionTypes.FINAL_FILENAME_ARRAY, // from the constants file
  payload: finalFileNameArray,
});

export const setImageSetStageOne = (imageSetStageOne) => ({
  type: ActionTypes.IMAGE_SET_STAGE_ONE, // from the constants file
  payload: imageSetStageOne,
});
export const setImageSetStageTwo = (imageSetStageTwo) => ({
  type: ActionTypes.IMAGE_SET_STAGE_TWO, // from the constants file
  payload: imageSetStageTwo,
});
export const setImageSetStageThree = (imageSetStageThree) => ({
  type: ActionTypes.IMAGE_SET_STAGE_THREE, // from the constants file
  payload: imageSetStageThree,
});
export const setCorrectScoresrray = (correctScoresrray) => ({
  type: ActionTypes.CORRECT_SCORESRRAY, // from the constants file
  payload: correctScoresrray,
});
export const setNBackIndex = (nBackIndex) => ({
  type: ActionTypes.NBACK_INDEX, // from the constants file
  payload: nBackIndex,
});
export const setPredictiveIndex = (predictiveIndex) => ({
  type: ActionTypes.PREDICTIVE_INDEX, // from the constants file
  payload: predictiveIndex,
});
