import './ExamNavigation.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectNBack } from './selectors';
import { newNBackState } from './actions';
const actionDispatch = (dispatch) => ({
  newNBackState: (users) => dispatch(newNBackState(users)),
});
const ExamNavigation = () => {
  const NBackState = useSelector(state =>
    state.examNavigationReducer.newNBackState);
  const { newNBackState } = actionDispatch(useDispatch())

  const keyStrokeListener = (event) => {
    /*
     *  Listens for the keystoke and updates the NBackState
    * ISSUE:  IT repeats all previous keystrokes for some reason,
    *  making the process increasingly slower
    */
    console.log('HIT',event.keyCode)
    const buttonNBackState = NBackState;
    switch (event.keyCode) {
      case 87:
        return console.log('W key, Log the Result, Run Next Image Function',
        newNBackState(NBackState));
      case 79:
        return console.log('O Key, Log the Result, Run Next Image Function',
        newNBackState(NBackState));
    }
}

  React.useEffect(() => {
    document.addEventListener('keyup', keyStrokeListener);
    console.log('RAN useEFFECT for keystroke listener and cleanup');
    return function cleanup() {
      document.removeEventListener('keyup', keyStrokeListener);
    };
  });

  return (
    <div className="buttonSpace">
      <button variant="contained" intValue={10} 
        stringValue={"Hello"}>"W" - Same as *n* photos Back
      </button>
      <button variant="contained">"R" - Does not repeat
      </button>
      <button onClick={()=>{newNBackState(NBackState)}}>ADDs</button>
      { NBackState }
    </div>
  )
}

export default ExamNavigation