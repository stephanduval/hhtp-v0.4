import { ActionTypes } from "./constants";

const defaultState = {
  newPracticeNBackState: 0,
  renderView: "navigationPhaseTypes.practiceNBackExamPage",
};

export default function practiceExamNavigation(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.ADVANCE_IMAGE:
      return { ...state, newPracticeNBackState: action.payload };

    case ActionTypes.RENDER_VIEW:
      return { ...state, renderView: action.payload };
    default:
      return state;
  }
}
