
import { ActionTypes } from "./constants";

const defaultState = {
    practiceImageArray: [],
};

export default function practiceImageArrayRedux(state = defaultState, action) { 
    switch (action.type) {
        case ActionTypes.PRACTICE_IMAGE_ARRAY:
            return { ...state, practiceImageArray: action.payload };
        
        default:
            return state;
    }
}
 
