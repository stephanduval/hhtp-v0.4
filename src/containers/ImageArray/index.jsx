import React, { useEffect } from 'react';
import './imageArray.css';
import { filesToPhotosObject } from './../../functions.js';
import { useSelector, useDispatch } from 'react-redux';
import { setCorrectResponseArray, setUserResponseArray, setImageFileNameArray, setImageFileNameLength, setPredictiveImageFileNameArray, setPredictiveImageFileNameLength } from './actions';
    
//import { setNumberofPhotos, setNumberOfPredictivePhotos, setNumberofnBackMatches, setnBackDegree, setTimerSeconds } from './../nBackSettings/actions';

// ======= Functions that will go into their own components eventually:
    
    const randomizeArray = (array) => {array.sort(()=> 0.5 - Math.random())};
    const arrayLength = (array) => array.length;

// ======= Constants:


    const images = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/RandomLot/', false, /\.(png|jpe?g|svg)$/));
    const imageFileNameArray = Object.keys(images);
    const randomizedImageArray = randomizeArray(imageFileNameArray); // spread operator didn't work with the randomizeArray Function
    const predictiveImages = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/Predictive/', false, /\.(png|jpe?g|svg)$/));
    const PredictiveFileNameArray = Object.keys(predictiveImages);
    const randomizedPredictiveImageArray = randomizeArray(PredictiveFileNameArray);
//--------------------  Create an object of the photo file names

//-------------------- End of Create an object of the photo file names

//-------------------- CONTSTANTS FOR REDUX TO DISPATCH ACTIONS: 
/*
const numberOfPhotosDispatch = (dispatch) => ({
    setNumberofPhotos: (numberOfPhotos) => dispatch(setNumberofPhotos(numberOfPhotos)),
  });
 */

const imageArrayDispatch = (dispatch) => ({
    setImageFileNameArray: (array) => dispatch(setImageFileNameArray(array)),
});
const imageFileNameLengthDispatch = (dispatch) => ({
    setImageFileNameLength: (array) => dispatch(setImageFileNameLength(array)),
});
const PredictveImageArrayDispatch = (dispatch) => ({
    setPredictiveImageFileNameArray: (array) => dispatch(setPredictiveImageFileNameArray(array)),
});
const PredictiveImageFileNameLengthDispatch = (dispatch) => ({
    setPredictiveImageFileNameLength: (array) => dispatch(setPredictiveImageFileNameLength(array)),
});

//-------------------- END OF CONTSTANTS FOR REDUX TO DISPATCH ACTIONS

//-------------------- Function that will render the ImageArray Page:
const ImageArray = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    const ReduxStorefileNameArray = useSelector(state => state.imageArrayReducer.imageFileNameArray);
    const ReduxStorePredictiveFileNameArray = useSelector(state => state.imageArrayReducer.PredictiveImageFileNameArray);
    const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    const numberOfPredictivePhotos = useSelector(state => state.nBackSettingsReducer.numberOfPredictivePhotos);
    const NumberofnBackMatches = useSelector(state => state.nBackSettingsReducer.NumberofnBackMatches);
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    const timerSeconds = useSelector(state => state.nBackSettingsReducer.timerSeconds);
    const imageFileNameLength = arrayLength(ReduxStorefileNameArray)
    const slicedRandomizedImageArray = imageFileNameArray.slice((numberOfPhotos) => 0, numberOfPhotos); 
    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState); // gets the NBack state from the store
   // const randomizedPredictiveImageArrayLength = arrayLength(ReduxStorePredictiveFileNameArray);

    const { setImageFileNameArray } = imageArrayDispatch(useDispatch()); // how does this work?  It creates an object
    const { setImageFileNameLength } = imageFileNameLengthDispatch(useDispatch());
    const { setPredictiveImageFileNameArray } = PredictveImageArrayDispatch(useDispatch()); // how does this work?  It creates an object
    const { setPredictiveImageFileNameLength } = PredictiveImageFileNameLengthDispatch(useDispatch());

     /*
    useEffect(() => {
        const images = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/', false, /\.(png|jpe?g|svg)$/));
        const imageFileNameArray = Object.keys(images);
        const randomizedImageArray = randomizeArray(imageFileNameArray); // spread operator didn't work with the randomizeArray Function
        const slicedRandomizedImageArray = imageFileNameArray.slice((numberOfPhotos) => 0, numberOfPhotos);
    
      
    }, [numberOfPhotos])
*/
    /*
    const images = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/', false, /\.(png|jpe?g|svg)$/));
    const imageFileNameArray = Object.keys(images);
    const randomizedImageArray = randomizeArray(imageFileNameArray); // spread operator didn't work with the randomizeArray Function
    const slicedRandomizedImageArray = imageFileNameArray.slice((numberOfPhotos) => 0, numberOfPhotos);
    */
 // Assigns the imageFileNameArray to the Store!!!
       
    //const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);  


    //  Send the image FileNameArray to the store:
    setImageFileNameArray(imageFileNameArray);
    setImageFileNameLength(imageFileNameLength);
    setPredictiveImageFileNameArray(PredictiveFileNameArray);
    //setPredictiveImageFileNameLength(randomizedPredictiveImageArrayLength);

    return (
        
<div className="imageArray">Image Array Info
<p>
Image File Array at nBack: {NBackState}  from Component: {imageFileNameArray[NBackState]}
</p>
Image File at nBack: {NBackState} array from store:  {ReduxStorefileNameArray[NBackState]}
<p>
Image File at nBack: {NBackState} array from Component:  {randomizedImageArray}
</p>
<p>
Sliced array: {slicedRandomizedImageArray}    
</p>
<p>
Number of Photos {numberOfPhotos}    length: {imageFileNameLength}  ... {ReduxStorePredictiveFileNameArray}
</p>
</div>
    )
}

//-------------------- End of Function that will render the ImageArray Page

export default ImageArray;

