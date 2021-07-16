import { createStore, combineReducers } from "redux";
import examNavigation from './containers/ExamNavigation/reducers'
import photoSpace from './containers/PhotoSpace/reducers'
import nBackSettings from './containers/nBackSettings/reducers'
import imageArray from './containers/ImageArray/reducers'

const reducers = combineReducers({examNavigationReducer: examNavigation, photoSpaceReducer: photoSpace, nBackSettingsReducer: nBackSettings, imageArrayReducer: imageArray});
console.log("reducers ran", createStore(reducers))
export default createStore(reducers);


