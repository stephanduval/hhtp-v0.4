
import { ActionTypes } from "./constants";

const defaultState = {
    correctResponseArray: [],
    userResponseArray: [],
    imageFileNameArray: [],
    imageFileNameArrayLength: 0,
    finalFileNameArray: [],
};

export default function practiceImageArray(state = defaultState, action) { 
    switch (action.type) {
        case ActionTypes.PRACTICE_IMAGE_ARRAY:
            return { ...state, practiceImageArray: action.payload };
                   
        
        default:
            return state;
    }
}
 
