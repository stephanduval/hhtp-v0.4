
import { ActionTypes } from "./constants";

const defaultState = {
    newNBackState: 11,

};

export default function examNavigation(state = defaultState, action) { 
    switch (action.type) {
        case ActionTypes.ADVANCE_IMAGE:
            return { ...state, newNBackState: action.payload };
        default:
            return state;
    }
}
