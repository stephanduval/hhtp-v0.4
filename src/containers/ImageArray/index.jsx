import React, { useEffect } from 'react';
import './imageArray.css';
import { checkForEmptyinArray, showMatchesOnly } from './functions'
import { filesToPhotosObject } from './../../functions.js';
import { useSelector, useDispatch } from 'react-redux';
import { setCorrectResponseArray, setUserResponseArray, setImageFileNameArray, setImageFileNameLength, setPredictiveImageFileNameArray, setPredictiveImageFileNameLength, setImageSet, setScoringArray} from './actions';
import { randomizeArray, arrayLength } from './../../functions'; 
import { render } from '@testing-library/react';
import { validateNumberOfPhotos, validateNumberOfPredictivePhotos, validatesetNumberofnBackMatches, validatesetnBackDegree, validatesetTimerSeconds } from './../../functions';
// ======= Constants:
//


    const images = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/RandomLot/', false, /\.(png|jpe?g|svg)$/));
    const imageFileNameArray = Object.keys(images);
    //-------------------- End of Create an object of the photo file names
    const randomizedImageArray = randomizeArray(imageFileNameArray); // spread operator didn't work with the randomizeArray Function
    const predictiveImages = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/Predictive/', false, /\.(png|jpe?g|svg)$/));
    const PredictiveFileNameArray = Object.keys(predictiveImages);
    const randomizedPredictiveImageArray = randomizeArray(PredictiveFileNameArray);

//--------------------  Create an object of the photo file names


//-------------------- CONTSTANTS FOR REDUX TO DISPATCH ACTIONS: 

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
const imageSetDispatch = (dispatch) => ({
  setImageSet: (array) => dispatch(setImageSet(array)),
});
const scoringArrayDispatch = (dispatch) => ({
  setScoringArray: (array) => dispatch(setScoringArray(array)),
});

//-------------------- END OF CONTSTANTS FOR REDUX TO DISPATCH ACTIONS

//-------------------- Function that will render the ImageArray Page:
const ImageArray =  () => {

  const { setImageFileNameArray } = imageArrayDispatch(useDispatch()); // how does this work?  It creates an object
  const { setImageFileNameLength } = imageFileNameLengthDispatch(useDispatch());
  const { setPredictiveImageFileNameArray } = PredictveImageArrayDispatch(useDispatch()); // how does this work?  It creates an object
  const { setPredictiveImageFileNameLength } = PredictiveImageFileNameLengthDispatch(useDispatch());
  const { setImageSet } = imageSetDispatch(useDispatch());
  const { setScoringArray } = scoringArrayDispatch(useDispatch());
  const aNumber = 120;
  
  const ReduxStorefileNameArray = useSelector(state => state.imageArrayReducer.imageFileNameArray);
  const imageFileNameLength = arrayLength(ReduxStorefileNameArray)
  const PredictiveFileNameArrayLength = arrayLength(PredictiveFileNameArray)



  setImageFileNameArray(imageFileNameArray);
  setImageFileNameLength(imageFileNameLength);
  setPredictiveImageFileNameArray(PredictiveFileNameArray);
  setPredictiveImageFileNameLength(PredictiveFileNameArrayLength);
  
    const ReduxStorefileNameArrayLength = ReduxStorefileNameArray.length;
    const ReduxStorePredictiveFileNameArray = useSelector(state => state.imageArrayReducer.PredictiveImageFileNameArray);
    const numberOfPhotosAlt = useSelector(state => state.nBackSettingsReducer.numberOfPhotosAlt);
    const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    const numberOfPredictivePhotos = useSelector(state => state.nBackSettingsReducer.numberOfPredictivePhotos);
    const NumberofnBackMatches = useSelector(state => state.nBackSettingsReducer.NumberofnBackMatches);
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    const timerSeconds = useSelector(state => state.nBackSettingsReducer.timerSeconds);
    
    
    const validPhotos = validateNumberOfPhotos(numberOfPhotos);
    const imageSetStageOne = imageFileNameArray.slice(0, numberOfPhotos);  // when number of photos is removed from here then it works
    //const imageSetStageOneLength =  imageSetStageOne.length;
    // const randomizedPredictiveImageArrayLength = arrayLength(ReduxStorePredictiveFileNameArray);
    const ReduxPredictiveFileNameArrayLength = useSelector(state => state.imageArrayReducer.predictiveImageFileNameLength)



 



    const predictiveIndexes = () => {
        /*
        *  Takes the Image Array stage one and returns an array of the indexes where the predictive values
        * Will replace the array values
        */

        let indexOfPredictivePhotos = [];

        //while(indexOfPredictivePhotos.length < numberOfPredictivePhotos){
        while(indexOfPredictivePhotos.length < numberOfPredictivePhotos){
       // var r = Math.floor(Math.random() * (imageSetStageOneLength - nBackDegree) + 0);
        var r = Math.floor(Math.random() * (numberOfPhotos - nBackDegree) + 0); // a number needs to be imageSetStageOne.length;

       // if (!indexOfPredictivePhotos.includes(r)) {indexOfPredictivePhotos.push(r)}; 
      if (!indexOfPredictivePhotos.includes(r)) {indexOfPredictivePhotos.push(r)}; 

        }
    indexOfPredictivePhotos.sort((a,b)=>a-b);
    return indexOfPredictivePhotos;
    } 

    const predictiveIndex = predictiveIndexes();
      
    const earlyPredictiveIndex = [];//[...predictiveIndex];
    const imageSetStageTwo = (imageSetStageOne,predictiveIndex,PredictiveFileNameArray) => {
      /*
      *  This Function takes an array and adds the predictive images into it
      * at the places where the result of the predictiveIndexes() function defines it
      *
      */
      let reduxPredictive = PredictiveFileNameArray;
      
      let predictive = [...predictiveIndex];
      let setStageOne = [...imageSetStageOne];
      let PredictiveIndexValue = 0;
      const iteratePredictiveIndex = () => PredictiveIndexValue++;
      let PredictiveReduxValue = 0;
      const iteratePredictiveReduxValue = () => PredictiveReduxValue++;

      predictive.forEach(element => setStageOne.splice(predictiveIndex[iteratePredictiveIndex()],1,PredictiveFileNameArray[iteratePredictiveReduxValue()]))
    return setStageOne;
    } 
    
  const imageStageTwo = imageSetStageTwo(imageSetStageOne,predictiveIndex,PredictiveFileNameArray)
  
  const predictiveMatchesEarly = showMatchesOnly(imageStageTwo,predictiveIndex);
  
  const nBackIndexes = (predictiveIndex,NumberofnBackMatches,nBackDegree, numberOfPhotos) => {
    /*
    *  Takes the Image Array called ImageSetStageTwo and returns an array of the indexes where the nback values
    * Will replace the array values
    * 
    */

    let nBackIndex = [];

    let i = 0;
  while (nBackIndex.length < NumberofnBackMatches) {
  let num = Math.floor(Math.random() * (numberOfPhotos - nBackDegree) + nBackDegree,);
  
  if (!(predictiveIndex.includes(num))
      && !(predictiveIndex.includes(num-nBackDegree))
      && !(predictiveIndex.includes(num+nBackDegree))
      && !(nBackIndex.includes(num))
      && !(nBackIndex.includes(num-nBackDegree))
      && !(nBackIndex.includes(num+nBackDegree))
        ) 
        {
          //console.log["Match",num];
          nBackIndex.push(num);
          //nBackIndex.push(num+nBackDegree)
        }
     i++   
    }
   nBackIndex.sort((a,b)=>a-b);
    return nBackIndex;
  }

  // const nBackIndex = nBackIndexes(predictiveIndex,NumberofnBackMatches,nBackDegree,);

//   const imageSetStageThree = (nBackIndex, nBackDegree, imageStageTwo) => {
//     /*
//       *  This Function takes an array and adds the nback images into it
//       * at the places where the result of the predictiveIndexes() and nBackIndexes() functions define it
//       *
//       */

//     let stage2 = [...imageStageTwo];

//     nBackIndex.forEach(element => stage2.splice(element-nBackDegree,1,stage2[element]));
   
//     return stage2;
//   }

//  const imageStageThree = imageSetStageThree(nBackIndex, nBackDegree, imageStageTwo);
// //  //const imageStageFour = imageSetStageFour(imageStageThree,predictiveIndex,PredictiveFileNameArray)
// //  //setImageSet(imageStageThree);
 

// const nBackMatches2 = showMatchesOnly(imageStageTwo,nBackIndex);
// const predictiveMatches2 = showMatchesOnly(imageStageTwo,predictiveIndex);
// const nBackMatches3 = showMatchesOnly(imageStageThree,nBackIndex);
// const predictiveMatches3 = showMatchesOnly(imageStageThree,predictiveIndex);

// const scoringArray = (imageStageTwo,predictiveIndex,nBackIndex) => {
//   let scorray = [...imageStageTwo];

//   let predictive = [...predictiveIndex];
//   let nBack = [...nBackIndex];
//   //let setStageOne = [...imageSetStageOne];
//   let PredictiveIndexValue = 0;
//   const iteratePredictiveIndex = () => PredictiveIndexValue++;
//   let PredictiveReduxValue = 0;
//   const iteratePredictiveReduxValue = () => PredictiveReduxValue++;
//   predictive.forEach(element => scorray.splice(predictive[iteratePredictiveIndex()],1,"P"))

//   let nBackIndexValue = 0;
//   const iteratenBackIndex = () => nBackIndexValue++;
//   let nBackReduxValue = 0;
//   nBack.forEach(element => scorray.splice(nBack[iteratenBackIndex()],1,"N"))

//   return scorray;
// }

// const correctScoresrray = scoringArray(imageStageTwo,predictiveIndex,nBackIndex,PredictiveFileNameArray);

// // //setScoringArray(correctScoresrray);
 
// // ======= VALIDATE DATA 
// function arrayEquals(a, b) {
//   return Array.isArray(a) &&
//     Array.isArray(b) &&
//     a.length === b.length &&
//     a.every((val, index) => val === b[index]);
// }
// // ======= END VALIDATE DATA 

    return (
        
<div className="imageArray">Image Array Info
<p>
Number of Photos {numberOfPhotos}  {validPhotos} 
</p>

<p>
setPredictiveImageFileNameLength: {ReduxPredictiveFileNameArrayLength} 
</p>

<p>
predictiveIndex: {predictiveIndex.toString()}  Length: {predictiveIndex.length} 
</p>
<p>
PredictiveFileNameArray: {PredictiveFileNameArray.toString()}  Length: {PredictiveFileNameArray.length} 
</p>



<p>
imageSetStageOne:
</p>
<p>{imageFileNameArray.toString()} Length: {imageFileNameArray.length}</p>

<p>
ImageStateTwo: 
</p>

<p>
{imageStageTwo.slice(0, numberOfPhotos).toString()}  Length: {imageStageTwo.length}
</p>


{/* 
<p>
image Stage Three:  
</p>
<p>{imageStageThree.toString()} Length: {imageStageThree.length}</p> */}
{/* 
<p>
nBackMatches3: {nBackMatches3.toString()}  Length: {nBackMatches3.length} 
</p>
<p>
predictiveMatches3: {predictiveMatches3.toString()}  Length: {predictiveMatches3.length} 
</p>

<p>
nBackMatches2: {nBackMatches2.toString()}  Length: {nBackMatches2.length} 
</p>
*/}
{/* 
<p>
predictiveMatches2: {predictiveMatches2.toString()}  Length: {predictiveMatches2.length} 
</p>

<p>
  Predictives the same? {(arrayEquals(predictiveMatchesEarly,predictiveMatches3)).toString()}
</p>

<p>
 nBacks the same? {(arrayEquals(nBackMatches3,nBackMatches2)).toString()} 
</p>
<p>
 Stage 2 and 3 the same? {(arrayEquals(imageStageTwo,imageStageThree)).toString()} 
</p>  */}
{/*
nBackPredictiveIndex: 
</p>

<p>
{nBackIndex.toString()} Length: {nBackIndex.length}
</p>
*/}
{/* 
<p>
ImageStateThree: 
</p>

<p>
{imageStageThree.toString()}  Length: {imageStageThree.length}
</p> */}

{/*
<p>

imageSetStagefour: 
</p>
<p>
{imageStageFour.toString()}  Length: {imageStageFour.length}
</p>
*/}
{/* <p>
nBackPredictiveIndex: {nBackIndex.toString()}  Length: {nBackIndex.length}
</p>
<p>
earlyPredictiveIndex: {predictiveIndex.toString()} Length: {predictiveIndex.length}

</p>
<p>
predictiveIndex: {predictiveIndex.toString()} Length: {predictiveIndex.length}
 
</p> */}
{/*
<p>
Is there an empty part in the imageStageTwo array? 
</p>
<p>emptyArrayCheck: {emptyArrayCheck}
</p>
<p>
nBackMatches: {nBackMatches.toString()}  Length: {nBackMatches.length} 
</p>
<p>
predictiveMatches: {predictiveMatches.toString()}  Length: {predictiveMatches.length} 
</p>
*/}
{/*
<p>
nBackMatches3: {nBackMatches3.toString()}  Length: {nBackMatches.length} 
</p>
<p>
predictiveMatches3: {predictiveMatches3.toString()}  Length: {predictiveMatches.length} 
</p>

<p>
nBackMatches4: {nBackMatches4.toString()}  Length: {nBackMatches.length} 
</p>
<p>
predictiveMatches4: {predictiveMatches4.toString()}  Length: {predictiveMatches.length} 
</p>

*/}

{/* 
<p>correctScoresrray:</p>

<p>
{correctScoresrray.toString()} Length: {correctScoresrray.length};
</p> */}

{/*
<p>
validateCard: {validateCard.toString()} Length: {validateCard.length}
</p>
*/}

{/* 

predictiveMatchesEarly: {predictiveMatchesEarly.toString()} */} 

</div>
    )
}

//-------------------- End of Function that will render the ImageArray Page

export default ImageArray;

