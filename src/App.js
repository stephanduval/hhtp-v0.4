import './App.css';
import React from 'react';
import Photospace from './containers/PhotoSpace';
import ExamNavigation from './containers/ExamNavigation';
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
    <div className="headerBar">
            State from redux generated by ExamNav 
      <p>Handleclick in App.JS state:  </p>
      <button >Click me</button>
      
    
      </div>
    </div>
  );
}

export default App;
