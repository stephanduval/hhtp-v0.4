import './ExamNavigation.css';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectNBack } from './selectors';
import { newNBackState } from './actions';


const ExamNavigation = () => {


    console.log('the thing:',useSelector(state => state.examNavigationReducer.newNBackState));

    const NBackPlusOne = (NBackState) => {
       // newNBackState(NBackState + 1);
       NBackState++
    }
    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState);
    const updateNBackState = useDispatch(NBackPlusOne)

    return (

    
        
        <div className="buttonSpace">
           
    <button variant="contained" intValue={10} stringValue={"Hello"}>"W" - Same as *n* photos Back
        </button>

        <button variant="contained">"R" - Does not repeat
        </button>
        <button onClick={{updateNBackState}}>ADDs</button>
 
        { NBackState }
        </div>

        )
}

export default ExamNavigation