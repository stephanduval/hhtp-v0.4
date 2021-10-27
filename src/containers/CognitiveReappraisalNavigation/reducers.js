
import { ActionTypes } from "./constants";

const defaultState = {
    CRAViewState: 0,
    userResponseArray: [],
    renderView: "navigationPhaseTypes.introductionPage",

};

export default function craNavigation(state = defaultState, action) { 
    switch (action.type) {
        case ActionTypes.ADVANCE_IMAGE:
            return { ...state, CRAViewState: action.payload };
        case ActionTypes.USER_RESPONSE_ARRAY:
            return { ...state, userResponseArray: action.payload };
        case ActionTypes.RENDER_VIEW:
            return { ...state, setRenderState: action.payload };
        default:
            return state;
    }
}
