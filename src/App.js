import './App.css';
import React from 'react';
import ImageArray from './containers/ImageArray/';
import store from "./store";
import { navigationPhaseTypes, renderState } from "./containers/renderSwitch/renderSwitch.js";
import RenderSwitch from './containers/renderSwitch';

function App() {

  let intro = false;


  return false ?
  // Displays a loading message if the asynchronous call hasn't come back (this.state.robots.lenght is 0)
  // we no longer need .this so we take it out
  //if (this.state.robots.length === 0) {
  //


  <h1>Loading</h1> :

  (
    <div className="App">
    


    <ImageArray></ImageArray> 
    { intro ? <div>{renderState(navigationPhaseTypes.introductionPage)}</div> : <div>{renderState(navigationPhaseTypes.nBackTest)}</div>}
   
    <renderState />
   
    
      
    </div>
  );
}

export default App;
