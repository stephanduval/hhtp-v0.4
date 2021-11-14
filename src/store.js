import { createStore, combineReducers } from "redux";
import examNavigation from './containers/ExamNavigation/reducers'
import photoSpace from './containers/PhotoSpace/reducers'
import nBackSettings from './containers/nBackSettings/reducers'
import imageArray from './containers/n-back-image-array/reducers'
import craNavigation from "./containers/CognitiveReappraisalNavigation/reducers";
import practiceImageArrayRedux from "./containers/Practice-n-back-image-array/reducers";
import practiceExamNavigation from "./containers/PracticeExamNavigation/reducers";
import crImageArrayToStore from "./containers/Cognitive-Reappraisal-Array/reducers";

const reducers = combineReducers({examNavigationReducer: examNavigation, photoSpaceReducer: photoSpace, nBackSettingsReducer: nBackSettings, imageArrayReducer: imageArray, craNavigationReducer: craNavigation, practiceImageArrayReducer: practiceImageArrayRedux, practiceExamNavigationReducer: practiceExamNavigation, cRImageArrayReducer: crImageArrayToStore});
// console.log("reducers ran", createStore(reducers)) //
export default createStore(reducers);


