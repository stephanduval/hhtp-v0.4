import { createSelector } from "reselect";

const settingsState = (state) => state.settings;  // state.name matches the name used in combine reducers in store.js

// this is the old way: 
// export const makeSelectUsers = homePage(state).user
// but we will use the reselector library module
// this will bind homePageUSers and return the users variable in the homePage part of the store
export const makeSelectUserResponseArray = createSelector(  //'make* is a naming convention for selectors
photoSpaceState,  // get the global store state for state.homepage
    photoSpace => photoSpace.makeSelectUserResponseArray //find the data within the store.js reducer name (homePage) and users within that: homePage.users
     );

export const makesSelectCorrectResponseArray = createSelector(  //'make* is a naming convention for selectors
photoSpaceState,  // get the global store state for state.homepage
    photoSpace => photoSpace.makeSelectCorrectResponseArrayy //find the data within the store.js reducer name (homePage) and users within that: homePage.users
     );


export const makesSelectImageFilenameArray = createSelector(  //'make* is a naming convention for selectors
photoSpaceState,  // get the global store state for state.homepage
photoSpace => photoSpace.makeSelectImageFilenameArray //find the data within the store.js reducer name (homePage) and users within that: homePage.users
);

export const makesSelectImageFilenameArray = createSelector(  //'make* is a naming convention for selectors
photoSpaceState,  // get the global store state for state.homepage
photoSpace => photoSpace.makeSelectImageFilenameArray //find the data within the store.js reducer name (homePage) and users within that: homePage.users
);

export const makesSelectImageFilenameArray = createSelector(  //'make* is a naming convention for selectors
photoSpaceState,  // get the global store state for state.homepage
photoSpace => photoSpace.makeSelectImageFilenameArray //find the data within the store.js reducer name (homePage) and users within that: homePage.users
);


 /*  VARIABLES:

let numberOfPhotos = 126;
let numberOfPredictivePhotos = 12;
let NumberofnBackMatches = 26;
let nBackDegree = 2;
let timerSeconds = 5;

export const ActionTypes = {  
    NUMBER_OF_PHOTOS: "app/containers/Settings/NUMBER_OF_PHOTOS",
    NUMBER_OF_PREDICTIVE_PHOTOS: "app/containers/Settings/NUMBER_OF_PREDICTIVE_PHOTOS",
    NUMBER_OF_NBACK_MATCHES: "app/containers/Settings/NUMBER_OF_NBACK_MATCHES",
    NBACK_DEGREE: "app/containers/Settings/NBACK_DEGREE",
    TIMER_SECONDS: "app/containers/Settings/TIMER_SECONDS",
    

*/
