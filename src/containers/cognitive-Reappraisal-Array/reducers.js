
import { ActionTypes } from "./constants";

const defaultState = {
    cRImageArray: [1,2,3,4,5,],
};

export default function crImageArrayToStore(state = defaultState, action) { 
    switch (action.type) {
        case ActionTypes.ADVANCE_IMAGE:
            return { ...state, newNBackState: action.payload };
        case ActionTypes.USER_RESPONSE_ARRAY:
            return { ...state, userResponseArray: action.payload };
        case ActionTypes.RENDER_VIEW:
            return { ...state, renderView: action.payload };
        case ActionTypes.CR_IMAGE_ARRAY:
            return {...state, cRImageArray: action.payload}
        default:
            return state;


            
    }
}
