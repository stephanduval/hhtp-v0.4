import React from 'react';
import './PhotoSpace.css';
import { filesToPhotosObject } from './../../functions.js';
import { useSelector, useDispatch } from 'react-redux';
import { setCorrectResponseArray, setUserResponseArray, setImageFileNameArray } from './actions';
import { newNBackState } from './../ExamNavigation/actions';
import photoSpace from './reducers';
     
const images = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/', false, /\.(png|jpe?g|svg)$/));
let imageFileNameArray = Object.keys(images);

const NBackactionDispatch = (dispatch) => ({
    newNBackState: (users) => dispatch(newNBackState(users)),
});

const imageArrayactionDispatch = (dispatch) => ({
    setImageFileNameArray: (array) => dispatch(setImageFileNameArray(array)),
});


//const currentImage = require('./../images/FeeliePhotos/'+imageFileNameArray[0]);
//console.log(currentImage);



const Photospace = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState);
    const { newNBackState } = NBackactionDispatch(useDispatch())


    const fileNameArray = useSelector(state => state.photoSpaceReducer.imageFileNameArray);
    const { newImageFileNameArray } = imageArrayactionDispatch(useDispatch());
    const { setImageFileNameArray } = imageArrayactionDispatch(useDispatch())
    setImageFileNameArray(imageFileNameArray);
    console.log("the array baby",setImageFileNameArray(imageFileNameArray));
    console.log("the Store",fileNameArray);
    return (
        
<div className="photospace">
       <img src={process.env.PUBLIC_URL + './images/FeeliePhotos/'+imageFileNameArray[NBackState]} alt='Current nBack'/>;
       Count from Hook in App.js:  

       <button onClick={()=>setImageFileNameArray(imageFileNameArray)}>set file name array</button>
  </div>
    )

    console.log("the array baby",fileNameArray);
}

export default Photospace;

