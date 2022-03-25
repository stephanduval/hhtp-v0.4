import { ActionTypes } from "./constants";

const defaultState = {
  CRAViewState: 0, // 181 total
  userResponseArray: [],
  renderView: "navigationPhaseTypes.introductionPage",
  CSVDownloaded: false,
  scoringArray: [],
};

export default function craNavigation(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.ADVANCE_IMAGE:
      return { ...state, CRAViewState: action.payload };
    case ActionTypes.USER_RESPONSE_ARRAY:
      return { ...state, userResponseArray: action.payload };
    case ActionTypes.RENDER_VIEW:
      return { ...state, setRenderState: action.payload };
    case ActionTypes.CSVSTATE:
      return { ...state, CSVDownloaded: action.payload };
    case ActionTypes.SCORING_ARRAY:
      return { ...state, scoringArray: action.payload };
    default:
      return state;
  }
}
