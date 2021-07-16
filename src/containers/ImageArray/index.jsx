import React, { useEffect } from 'react';
import './imageArray.css';
import { filesToPhotosObject } from './../../functions.js';
import { useSelector, useDispatch } from 'react-redux';
import { setCorrectResponseArray, setUserResponseArray, setImageFileNameArray } from './actions';
    
//import { setNumberofPhotos, setNumberOfPredictivePhotos, setNumberofnBackMatches, setnBackDegree, setTimerSeconds } from './../nBackSettings/actions';

// ======= Functions that will go into their own components eventually:

    const randomizeArray = (array) => {array.sort(()=> 0.5 - Math.random())};


    const images = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/', false, /\.(png|jpe?g|svg)$/));
    const imageFileNameArray = Object.keys(images);
    const randomizedImageArray = randomizeArray(imageFileNameArray); // spread operator didn't work with the randomizeArray Function



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

//-------------------- END OF CONTSTANTS FOR REDUX TO DISPATCH ACTIONS

//-------------------- Function that will render the ImageArray Page:
const ImageArray = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    
    const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    const numberOfPredictivePhotos = useSelector(state => state.nBackSettingsReducer.numberOfPredictivePhotos);
    const NumberofnBackMatches = useSelector(state => state.nBackSettingsReducer.NumberofnBackMatches);
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    const timerSeconds = useSelector(state => state.nBackSettingsReducer.timerSeconds);

    const slicedRandomizedImageArray = imageFileNameArray.slice((numberOfPhotos) => 0, numberOfPhotos); 

 




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
    const ReduxStorefileNameArray = useSelector(state => state.imageArrayReducer.imageFileNameArray);
    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState); // gets the NBack state from the store


    const { setImageFileNameArray } = imageArrayDispatch(useDispatch()); // how does this work?  It creates an object

    //  Send the image FileNameArray to the store:
    setImageFileNameArray(imageFileNameArray)


    return (
        
<div className="imageArray">Image Array Info
<p>
Image File Array at nBack: {NBackState}  from Component: {imageFileNameArray[NBackState]}
</p>
Image File at nBack: {NBackState} array from store:  {ReduxStorefileNameArray[NBackState]}
<p>
Image File at nBack: {NBackState} array from Component:  {randomizedImageArray}
</p>
</div>
    )
}

//-------------------- End of Function that will render the ImageArray Page

export default ImageArray;

