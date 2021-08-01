
import { ActionTypes } from "./constants";

const defaultState = {
    newNBackState: 0,
    userResponseArray: [],

};

export default function examNavigation(state = defaultState, action) { 
    switch (action.type) {
        case ActionTypes.ADVANCE_IMAGE:
            return { ...state, newNBackState: action.payload };
        case ActionTypes.USER_RESPONSE_ARRAY:
            return { ...state, userResponseArray: action.payload };
        default:
            return state;
    }
}
