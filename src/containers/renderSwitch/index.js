
import React, { connect } from 'react';
import { useSelector, useDispatch,} from 'react-redux';
import { setRenderState } from './actions';
import { newNBackState } from '../ExamNavigation/actions';

const nBackStateDispatch = (dispatch) => ({
    newNBackState: (users) => dispatch(newNBackState(users)),
});

//-------------------- CONTSTANTS FOR REDUX TO DISPATCH ACTIONS: 

const renderViewDispatch = (dispatch) => ({
    setRenderState: (users) => dispatch(setRenderState(users)),
});

//-------------------- END OF CONTSTANTS FOR REDUX TO DISPATCH ACTIONS


const RenderSwitch = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    const { setViewState } = renderViewDispatch(useDispatch())

   // newNBackState(11);

    const renderViewFromReduxStore = useSelector(state => state.renderSwitchReducer.renderView);


   //const { setViewState } = renderViewDispatch(useDispatch()) // how does this work?  It creates an object

    
//     console.log("state renderview", renderViewFromReduxStore);
//  //   let aaa = 11;
//     // setViewState(12);

//     console.log("state renderview", renderViewFromReduxStore);

    return (
        
<div className="renderSwitch">{renderViewFromReduxStore}
    
</div>
    )

}

export default RenderSwitch;









        