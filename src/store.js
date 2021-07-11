import { createStore, combineReducers } from "redux";
import examNavigationReducer from './containers/ExamNavigation/reducers'

const reducers = combineReducers({examNavigationReducer});
console.log("reducers ran", createStore(reducers))
export default createStore(reducers);


