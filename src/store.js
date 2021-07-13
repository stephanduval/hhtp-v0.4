import { createStore, combineReducers } from "redux";
import examNavigation from './containers/ExamNavigation/reducers'
import photoSpace from './containers/PhotoSpace/reducers'

const reducers = combineReducers({examNavigationReducer: examNavigation, photoSpaceReducer: photoSpace});
console.log("reducers ran", createStore(reducers))
export default createStore(reducers);


