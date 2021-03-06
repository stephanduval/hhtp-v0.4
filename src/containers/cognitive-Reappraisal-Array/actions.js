import { ActionTypes } from "./constants";

export const setCRImageArray = (cRImageArray) => ({
  type: ActionTypes.CR_IMAGE_ARRAY, // from the constants file
  payload: cRImageArray,
});

export const newCRState = (newCRState) => ({
  type: ActionTypes.CR_ADVANCE_IMAGE, // from the constants file
  payload: newCRState + 1,
});

export const newCRUserResponseArray = (cRUserResponseArray) => ({
  type: ActionTypes.CR_USER_RESPONSE_ARRAY, // from the constants file
  payload: cRUserResponseArray,
});

export const setCRRenderState = (cRRenderView) => ({
  type: ActionTypes.CR_RENDER_VIEW, // from the constants file
  payload: cRRenderView,
});

export const newCRUserAnswerTimeArray = (cRAnswerTimeArray) => ({
  type: ActionTypes.CR_USER_ANSWER_TIME, // from the constants file
  payload: cRAnswerTimeArray,
});
