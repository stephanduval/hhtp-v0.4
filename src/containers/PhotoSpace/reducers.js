
import { ActionTypes } from "./constants";

const defaultState = {
    correctResponseArray: [],
    userResponseArray: [],
    imageFileNameArray: [],

};

export default function photoSpace(state = defaultState, action) { 
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
 