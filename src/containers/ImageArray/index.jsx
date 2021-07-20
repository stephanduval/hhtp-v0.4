import React, { useEffect } from 'react';
import './imageArray.css';
import { filesToPhotosObject } from './../../functions.js';
import { useSelector, useDispatch } from 'react-redux';
import { setCorrectResponseArray, setUserResponseArray, setImageFileNameArray, setImageFileNameLength, setPredictiveImageFileNameArray, setPredictiveImageFileNameLength } from './actions';
import { randomizeArray, arrayLength } from './../../functions'; 

//import { setNumberofPhotos, setNumberOfPredictivePhotos, setNumberofnBackMatches, setnBackDegree, setTimerSeconds } from './../nBackSettings/actions';

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
    const slicedRandomizedImageArray = imageFileNameArray.slice((numberOfPhotos, numberOfPredictivePhotos) => 0, numberOfPhotos-numberOfPredictivePhotos); 
    const PredictiveFileNameArrayLength = arrayLength(PredictiveFileNameArray)
    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState); // gets the NBack state from the store
   // const randomizedPredictiveImageArrayLength = arrayLength(ReduxStorePredictiveFileNameArray);
    const ReduxPredictiveFileNameArrayLength = useSelector(state => state.imageArrayReducer.predictiveImageFileNameLength)

    const { setImageFileNameArray } = imageArrayDispatch(useDispatch()); // how does this work?  It creates an object
    const { setImageFileNameLength } = imageFileNameLengthDispatch(useDispatch());
    const { setPredictiveImageFileNameArray } = PredictveImageArrayDispatch(useDispatch()); // how does this work?  It creates an object
    const { setPredictiveImageFileNameLength } = PredictiveImageFileNameLengthDispatch(useDispatch());

    const predictiveSet = (array) => {
        /*
        *  This Function takes an array and adds the predictive images into it at random places 
        *
        */
        let RandomPredictiveFileNameArray = randomizeArray(PredictiveFileNameArray);
        let arr = [...array];
        let predictIndex = 0;
        while(arr.length < numberOfPhotos){
         var r = Math.floor(Math.random() * (array.length - 0 + 1) + 0);
         arr.splice(r,0,PredictiveFileNameArray[predictIndex]); 
         predictIndex++;

         //if(arr.indexOf(r) === -1) arr.push(array[r]);
      
    }
    return arr;
    } 

  const arraywithPredictives = predictiveSet(slicedRandomizedImageArray) 

 

function spliceNBacksIntoArray(arraywithPredictives,numberOfPhotos,PredictiveFileNameArray) {
    /*
    *  Function: spliceNBacksIntoArray
  
    *  Purpose: It creates a list of unique random integers and uses that to decide which images
    *  In the array will be duplicated for the purpose of creating the n-back test
    * 
    * It also marks each file name as "predictive or matching" for testing purposes
    * 
    *  Parameters: None
    * 
    *  Returns: A modified array of the image list with the n-back matches inserted
    * 
    */ 
  
  let excluded = [];
  let finalArray =[...arraywithPredictives];
  let scoreArray = [];
  // Map each index of items that match the predictiveSetOfImages //arraywithPredictives
  PredictiveFileNameArray.map(x => excluded.push(arraywithPredictives.indexOf(x)));
  excluded.sort((a,b)=>a-b);
  console.log(excluded);
  
  // adds values that will protect the predictive set of images 
  excluded.map((element) => excluded.push(element+nBackDegree));
  excluded.sort((a,b)=>a-b);
  console.log(excluded);
  
  let i = 0;
  while (i < NumberofnBackMatches) {
  let num = Math.floor(Math.random() * (numberOfPhotos + 1) + 0);
  
  if (!(excluded.includes(num))
      //&& !(excluded.includes(num+nBackDegree))
      && !(excluded.includes(num-nBackDegree))
        ) 
        {
          //console.log["Match",num];
          excluded.push(num,num-nBackDegree);
          finalArray.splice(num+nBackDegree,1,finalArray[num] + !(excluded.includes(finalArray[num])) );
          }
  
   i++   
    }
  
    let j = 0
     while (j < slicedRandomizedImageArray.length) {
       
      if (PredictiveFileNameArray.includes(finalArray[j])) 
       //slicedRandomizedImageArray[j])) 
       {
     //    console.log("FLAG");
     finalArray[j] = finalArray[j];
       }
       j++
     }
  
    excluded.sort((a,b)=>a-b);
    console.log(excluded);
    return finalArray;
  }


  function createScoringArray(finalArray,PredictiveFileNameArray,nBackDegree) {
    let arr = [...finalArray];
    let n = 0;
    let j = 0;
    arr.forEach(item =>{ 
/*  if(arr[n] == arr[n+nBackDegree])
    {
      arr.splice(n,1,'{=N=}');
      arr.splice(n+nBackDegree,1,'{=N=}');

    }*/
if(PredictiveFileNameArray.includes(arr[n]))
    {
      arr.splice(n,1,'=P=');
    }
    n++
  });

  arr.forEach(item =>{ 
if(arr[3] == arr[3])
  {
    arr.splice(n,1,'=N=');
  }
  j++
});
/*
    else {
     // arr.splice(n,1,'O');
    };
    n++
  }
  */
  

  return arr;
};

  

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
    setPredictiveImageFileNameLength(PredictiveFileNameArrayLength);
    let finalArray = spliceNBacksIntoArray(arraywithPredictives,numberOfPhotos,PredictiveFileNameArray)
    let scoringArray = createScoringArray(finalArray,PredictiveFileNameArray,nBackDegree)

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
<p>
setPredictiveImageFileNameLength: {ReduxPredictiveFileNameArrayLength} 
</p>
<p>
  arraywithPredictives: 
</p>
<p>{arraywithPredictives}</p>
<p>
Scoring Array: 
<p>
{scoringArray}
</p>
</p>
<p>
  final array:
</p>
<p>
{finalArray}
</p>
</div>
    )
}

//-------------------- End of Function that will render the ImageArray Page

export default ImageArray;

