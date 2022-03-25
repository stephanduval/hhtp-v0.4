import { createSelector } from "reselect";

// (state) here refers to the global state
// get the current homePage state from the store.js

const renderViewState = (state) => state.renderView;
