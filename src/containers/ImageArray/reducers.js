
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
        default:
            return state;
    }
}
 