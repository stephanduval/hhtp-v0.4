import './ExamNavigation.css';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectNBack } from './selectors';
import { newNBackState } from './actions';

const actionDispatch = (dispatch) => ({
    newNBackState: (users) => dispatch(newNBackState(users)),
});

const ExamNavigation = () => {


    console.log('the thing:',useSelector(state => state.examNavigationReducer.newNBackState));

    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState);
    const { newNBackState } = actionDispatch(useDispatch())

    //newNBackState(112)
    

    return (

    
        
        <div className="buttonSpace">
           
    <button variant="contained" intValue={10} stringValue={"Hello"}>"W" - Same as *n* photos Back
        </button>

        <button variant="contained">"R" - Does not repeat
        </button>
    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState);
        <button onClick={()=>{newNBackState(NBackState+1)}}>ADDs</button>
 
        { NBackState }
        </div>

        )
}

export default ExamNavigation