import React from 'react';
import './PhotoSpace.css';
import { useSelector } from 'react-redux';


     



const PracticePhotospace = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    //-------------------- Functions Fetch and Store Data for the PhotoSpace:

    //const imageFileNameArray = useSelector(state => state.imageArrayReducer.imageFileNameArray);
    const NBackState = useSelector(state => state.practiceExamNavigationReducer.newPracticeNBackState);
    //const finalFileNameArray = useSelector(state => state.imageArrayReducer.finalFileNameArray);
    const practiceImageArrayFromRedux = useSelector(state => state.practiceImageArrayReducer.practiceImageArray);
    
   // console.log("the array baby",practiceImageArrayFromRedux,NBackState);

    //-------------------- END of functions Fetch and Store Data for the PhotoSpace

    /*  troubleshooting the image not showing up:

<img src={'./images/1026.jpg'} alt='Current nBack'/>
<img src={'./images/Sad face 1.jpg'} alt='Current nBack'/>
<img src={'./images/cognitive-reappraisal/decrease/Sad face 1.jpg'} alt='Current nBack'/>
<img src={'./images/practice-n-back-photos/RemainingPictures/1026.jpg'} alt='Current nBack'/>

    */
    return (//
        
<div className="photospace">

<img src={process.env.PUBLIC_URL + practiceImageArrayFromRedux[NBackState]} alt='Current nBack'/>


</div>
    )
}

export default PracticePhotospace;

