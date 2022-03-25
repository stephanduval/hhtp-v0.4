import { ActionTypes } from "./constants";

const defaultState = {
  correctResponseArray: [],
  userResponseArray: [],
  imageFileNameArray: [],
  imageFileNameArrayLength: 0,
  finalFileNameArray: [],
};

export default function imageArray(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CORRECT_RESPONSE_ARRAY:
      return { ...state, correctResponseArray: action.payload };
    case ActionTypes.USER_RESPONSE_ARRAY:
      return { ...state, userResponseArray: action.payload };
    case ActionTypes.IMAGE_FILENAME_ARRAY:
      return { ...state, imageFileNameArray: action.payload };
    case ActionTypes.IMAGE_FILENAME_LENGTH:
      return { ...state, imageFileNameLength: action.payload };
    case ActionTypes.PREDICTIVE_IMAGE_FILENAME_ARRAY:
      return { ...state, PredictiveImageFileNameArray: action.payload };
    case ActionTypes.PREDICTIVE_IMAGE_FILENAME_LENGTH:
      return { ...state, predictiveImageFileNameLength: action.payload };
    case ActionTypes.IMAGE_SET:
      return { ...state, imageSet: action.payload };
    case ActionTypes.SCORING_ARRAY:
      return { ...state, scoringArray: action.payload };
    case ActionTypes.FINAL_FILENAME_ARRAY:
      return { ...state, finalFileNameArray: action.payload };
    case ActionTypes.IMAGE_SET_STAGE_ONE:
      return { ...state, imageSetStageOne: action.payload };
    case ActionTypes.IMAGE_SET_STAGE_TWO:
      return { ...state, imageSetStageTwo: action.payload };
    case ActionTypes.IMAGE_SET_STAGE_THREE:
      return { ...state, imageSetStageThree: action.payload };
    case ActionTypes.CORRECT_SCORESRRAY:
      return { ...state, correctScoresrray: action.payload };
    case ActionTypes.NBACK_INDEX:
      return { ...state, nBackIndex: action.payload };
    case ActionTypes.PREDICTIVE_INDEX:
      return { ...state, predictiveIndex: action.payload };

    default:
      return state;
  }
}
