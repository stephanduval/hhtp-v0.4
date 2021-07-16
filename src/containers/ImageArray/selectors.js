import { createSelector } from "reselect";

const imageArrayState = (state) => state.imageArray;  // state.name matches the name used in combine reducers in store.js

// this is the old way: 
// export const makeSelectUsers = homePage(state).user
// but we will use the reselector library module
// this will bind homePageUSers and return the users variable in the homePage part of the store
export const makeSelectUserResponseArray = createSelector(  //'make* is a naming convention for selectors
imageArrayState,  // get the global store state for state.homepage
    imageArray => imageArray.makeSelectUserResponseArray //find the data within the store.js reducer name (homePage) and users within that: homePage.users
     );

export const makesSelectCorrectResponseArray = createSelector(  //'make* is a naming convention for selectors
imageArrayState,  // get the global store state for state.homepage
imageArray => imageArray.makeSelectCorrectResponseArrayy //find the data within the store.js reducer name (homePage) and users within that: homePage.users
     );


export const makesSelectImageFilenameArray = createSelector(  //'make* is a naming convention for selectors
imageArrayState,  // get the global store state for state.homepage
imageArray => imageArray.makeSelectImageFilenameArray //find the data within the store.js reducer name (homePage) and users within that: homePage.users
);

     
