
import { ActionTypes } from "./constants";

const defaultState = {

};

export default function cognitiveReappraisalExamNavigation(state = defaultState, action) { 
    switch (action.type) {
        case ActionTypes.ADVANCE_IMAGE:
            return { ...state, newNBackState: action.payload };
        case ActionTypes.USER_RESPONSE_ARRAY:
            return { ...state, userResponseArray: action.payload };
        case ActionTypes.RENDER_VIEW:
            return { ...state, renderView: action.payload };
        default:
            return state;
    }
}
