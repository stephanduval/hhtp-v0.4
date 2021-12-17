import './App.css';
import React from 'react';
import ImageArray from './containers/n-back-image-array/';
import PracticeImageArray from './containers/Practice-n-back-image-array';
//import store from "./store";
import { renderState } from "./containers/renderSwitch/renderSwitch.js";
import { useSelector } from 'react-redux';

function App() {

  let renderViewFromReduxStore = useSelector(state => state.examNavigationReducer.renderView);

  


  return false ?
  // Displays a loading message if the asynchronous call hasn't come back (this.state.robots.lenght is 0)
  // we no longer need .this so we take it out
  //if (this.state.robots.length === 0) {
  //
// //{ renderViewFromReduxStore ? <div>{renderState(navigationPhaseTypes.introductionPage)}</div> : <div>{renderState(navigationPhaseTypes.nBackTest)}</div>}

  <h1>Loading</h1> :

  (
    <div className="App">
    <ImageArray></ImageArray>
    <PracticeImageArray></PracticeImageArray>
    
    
    {renderState(renderViewFromReduxStore)}

    </div>
  );
}

export default App;
