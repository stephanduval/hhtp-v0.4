import React from 'react';
import './PhotoSpace.css';
import { filesToPhotosObject } from './../../functions.js';
import { useSelector } from 'react-redux';
import { setCorrectResponseArray, setUserResponseArray } from './actions';
     
const images = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/', false, /\.(png|jpe?g|svg)$/));
let imageFileNameArray = Object.keys(images);


//const currentImage = require('./../images/FeeliePhotos/'+imageFileNameArray[0]);
//console.log(currentImage);



const Photospace = ({onInputChange}) => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState);


    return (
<div className="photospace">
       <img src={process.env.PUBLIC_URL + './images/FeeliePhotos/'+imageFileNameArray[NBackState]} alt='Current nBack'/>;
       Count from Hook in App.js:
  </div>
    )
}
export default Photospace;

