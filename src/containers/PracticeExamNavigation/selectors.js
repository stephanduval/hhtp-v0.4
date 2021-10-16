import { createSelector } from "reselect";

// (state) here refers to the global state
// get the current homePage state from the store.js
const examNavigationState = (state) => state.examNavigation;  // state.name matches the name used in combine reducers in store.js

// this is the old way: 
// export const makeSelectUsers = homePage(state).user
// but we will use the reselector library module
// this will bind homePageUSers and return the users variable in the homePage part of the store
export const makeSelectNBack = createSelector(  //'make* is a naming convention for selectors
examNavigationState,  // get the global store state for state.homepage
     examNavigation => examNavigation.nBackState //find the data within the store.js reducer name (homePage) and users within that: homePage.users
     );