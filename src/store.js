import { createStore, combineReducers } from "redux";
import examNavigation from './containers/ExamNavigation/reducers'
import photoSpace from './containers/PhotoSpace/reducers'
import nBackSettings from './containers/nBackSettings/reducers'
import ImageArray from './containers/ImageArray/reducers'

const reducers = combineReducers({examNavigationReducer: examNavigation, photoSpaceReducer: photoSpace, nBackSettingsReducer: nBackSettings, ImageArrayReducer: ImageArray});
console.log("reducers ran", createStore(reducers))
export default createStore(reducers);


