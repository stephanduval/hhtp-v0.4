import React from 'react';
import './PhotoSpace.css';
import { useSelector, useDispatch } from 'react-redux';


     



const Photospace = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    //-------------------- Functions Fetch and Store Data for the PhotoSpace:

    const imageFileNameArray = useSelector(state => state.imageArrayReducer.imageFileNameArray);
    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState); // gets the NBack state from the store
    
    //-------------------- END of functions Fetch and Store Data for the PhotoSpace
    return (
        
<div className="photospace">
       <img src={process.env.PUBLIC_URL + './images/FeeliePhotos/RandomLot/'+imageFileNameArray[NBackState]} alt='Current nBack'/>
        First item in image FileArray: {imageFileNameArray[0]}  nBack State: {NBackState}
  </div>
    )

    console.log("the array baby",imageFileNameArray);
}

export default Photospace;

