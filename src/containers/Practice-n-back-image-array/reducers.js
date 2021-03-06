import { ActionTypes } from "./constants";

const defaultState = {
  practiceImageArray: [1, 2, 3, 4, 5, 6, 7],
  testPracticeStateArray: 13,
};

export default function practiceImageArrayRedux(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.PRACTICE_IMAGE_ARRAY:
      return { ...state, practiceImageArray: action.payload };

    case ActionTypes.TEST_PRACTICE_STATE_ARRAY:
      return { ...state, testPracticeStateArray: action.payload };

    default:
      return state;
  }
}
