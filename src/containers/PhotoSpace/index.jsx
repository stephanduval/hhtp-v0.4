import React from 'react';
import './PhotoSpace.css';
import { filesToPhotosObject } from './../../functions.js';


     
const images = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/', false, /\.(png|jpe?g|svg)$/));
  
let imageFileNameArray = Object.keys(images);
let n =0;

//const currentImage = require('./../images/FeeliePhotos/'+imageFileNameArray[0]);
//console.log(currentImage);



const Photospace = ({onInputChange}) => {  // this destructing allows us to use onInputChange instead of props.onInputChange
    return (
<div className="photospace">
       <img src={process.env.PUBLIC_URL + './images/FeeliePhotos/'+imageFileNameArray[n]} alt='Current nBack'/>;
       Count from Hook in App.js:
  </div>
    )
}
export default Photospace;

