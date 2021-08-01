import './App.css';
import React from 'react';
import Photospace from './containers/PhotoSpace';
import ExamNavigation from './containers/ExamNavigation';
import Settings from './containers/nBackSettings';
import ImageArray from './containers/ImageArray/';
import store from "./store";





function App() {


console.log('store:',{store});



  
  return false ?
  // Dis plays a loading message if the asynchronous call hasn't come back (this.state.robots.lenght is 0)
  // we no longer need .this so we take it out
  //if (this.state.robots.length === 0) {
  
  <h1>Loading</h1> :

  (
    <div className="App">

       <div className="headerBar">
        <div align="center">This is a Header (class topBar)
  
        </div>
    </div>
     <div className="navBarWrapper">

          <ul className="navBar">
          
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
            <li>five</li>
          </ul>
          
    </div>
    
    <Photospace />
    
    <ExamNavigation />
    <Settings />
    <ImageArray></ImageArray>
    </div>
  );
}

export default App;
