import './App.css';
import React from 'react';
import ImageArray from './containers/ImageArray/';
import store from "./store";
import { renderState, navigationPhaseTypes } from "./renderSwitch";





function App() {


console.log('store:',{store});



  
  return false ?
  // Displays a loading message if the asynchronous call hasn't come back (this.state.robots.lenght is 0)
  // we no longer need .this so we take it out
  //if (this.state.robots.length === 0) {
  //
  
  <h1>Loading</h1> :

  (
    <div className="App">

       <div className="headerBar">
        <div align="center">This is a Header (class topBar)
  
        </div>
    </div>
    <ImageArray></ImageArray>
    {renderState(navigationPhaseTypes.nBackTest)}
    
    </div>
  );
}

export default App;
