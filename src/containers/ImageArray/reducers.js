
import { ActionTypes } from "./constants";

const defaultState = {
    correctResponseArray: [],
    userResponseArray: [],
    imageFileNameArray: [],
    imageFileNameArrayLength: 0,
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

        default:
            return state;
    }
}
 
