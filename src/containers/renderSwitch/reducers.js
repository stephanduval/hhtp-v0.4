import { ActionTypes } from "./constants";

const defaultState = {
  //  renderView: false,
};

export default function renderViewToStore(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.RENDER_VIEW:
      return { ...state, renderView: action.payload };
    default:
      return state;
  }
}
