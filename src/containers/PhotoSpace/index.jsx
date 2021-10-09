import React from 'react';
import './PhotoSpace.css';
import { useSelector, useDispatch } from 'react-redux';


     



const Photospace = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    //-------------------- Functions Fetch and Store Data for the PhotoSpace:

    const imageFileNameArray = useSelector(state => state.imageArrayReducer.imageFileNameArray);
    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState); // gets the NBack state from the store
    const finalFileNameArray = useSelector(state => state.imageArrayReducer.finalFileNameArray);
    const imageSetStageThreeFromRedux = useSelector(state => state.imageArrayReducer.imageSetStageThree);

    //-------------------- END of functions Fetch and Store Data for the PhotoSpace
    return (//
        
<div className="photospace">
    
       <img src={process.env.PUBLIC_URL + imageSetStageThreeFromRedux[NBackState]} alt='Current nBack'/>
        
</div>
    )
    // console.log("the array baby",imageFileNameArray);
}

export default Photospace;

