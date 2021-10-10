
import { ActionTypes } from "./constants";

const defaultState = {
    newNBackState: 0,
    userResponseArray: [],
    renderView: "navigationPhaseTypes.introductionPage",
    answerTimeArray: [],

};

export default function examNavigation(state = defaultState, action) { 
    switch (action.type) {
        case ActionTypes.ADVANCE_IMAGE:
            return { ...state, newNBackState: action.payload };
        case ActionTypes.USER_RESPONSE_ARRAY:
            return { ...state, userResponseArray: action.payload };
        case ActionTypes.RENDER_VIEW:
            return { ...state, renderView: action.payload };
        case ActionTypes.USER_ANSWER_TIME_ARRAY:
            return {...state, answerTimeArray: action.payload}
        default:
            return state;
    }
}
