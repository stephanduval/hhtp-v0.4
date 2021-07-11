// sectors grab data from the store 
// the value you are looking for can be an object inside of an object

import { createSelector } from "reselect";

// (state) here refers to the global state
// get the current homePage state from the store.js
const homePageState = (state) => state.homePage;  // state.name matches the name used in combine reducers in store.js

// this is the old way: 
// export const makeSelectUsers = homePage(state).user
// but we will use the reselector library module
// this will bind homePageUSers and return the users variable in the homePage part of the store
export const makeSelectUsers = createSelector(  //'make* is a naming convention for selectors
    homePageState,  // get the global store state for state.homepage
     homePage => homePage.users //find the data within the store.js reducer name (homePage) and users within that: homePage.users
     );