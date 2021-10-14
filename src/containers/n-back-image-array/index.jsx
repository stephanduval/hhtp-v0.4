import React, { useEffect } from 'react';
import './imageArray.css';
import { /*checkForEmptyinArray, showMatchesOnly */ } from './functions'
import { filesToPhotosObject } from '../../functions.js';
import { useSelector, useDispatch/*, connect*/ } from 'react-redux';
import { /*setCorrectResponseArray, setUserResponseArray,*/ setImageFileNameArray, setImageFileNameLength, setPredictiveImageFileNameArray, setPredictiveImageFileNameLength, setImageSet, setScoringArray, setFinalFileNameArray, setImageSetStageOne, setImageSetStageTwo, setImageSetStageThree, setCorrectScoresrray, setNBackIndex, setPredictiveIndex} from './actions';
import { /*randomizeArray,*/ arrayLength } from './../../functions'; 
import { /*validateNumberOfPhotos, validateNumberOfPredictivePhotos, validatesetNumberofnBackMatches, validatesetnBackDegree, validatesetTimerSeconds*/ } from './../../functions';
// ======== Constants:
//


    const images = filesToPhotosObject(require.context('./../../../public/images/n-back-photos/RandomLot/', false, /\.(png|jpe?g|svg)$/));
    const imageFileNameArray = Object.keys(images);
    const imageFullFileNameArray = imageFileNameArray.map(e => './images/n-back-photos/RandomLot/' + e)
    //-------------------- End of Create an object of the photo file names
    const randomizedFullFileNameArray = imageFullFileNameArray.sort(()=> 0.5 - Math.random())
    const predictiveImages = filesToPhotosObject(require.context('./../../../public/images/n-back-photos/Predictive/', false, /\.(png|jpe?g|svg)$/));
    //const predictiveFullFolderLocation = predictiveImages.map((x) => { + 'x' });
   // const predictiveFileNameArray = Object.keys(predictiveFullFolderLocation);
    const predictiveFileNameArray = Object.keys(predictiveImages);
    const predictiveFullFileNameArray = predictiveFileNameArray.map(e => './images/n-back-photos/Predictive/' + e)
    //const randomizedPredictiveImageArray = randomizeArray(predictiveFullFileNameArray);


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
const finalFileNameArrayDispatch = (dispatch) => ({
  setFinalFileNameArray: (array) => dispatch(setFinalFileNameArray(array)),
});
const imageSetStageOneDispatch = (dispatch) => ({
  setImageSetStageOne: (array) => dispatch(setImageSetStageOne(array)),
});
const imageStageTwoDispatch = (dispatch) => ({
  setImageSetStageTwo: (array) => dispatch(setImageSetStageTwo(array)),
});
const imageSetStageThreeDispatch = (dispatch) => ({
  setImageSetStageThree: (array) => dispatch(setImageSetStageThree(array)),
});
const correctScoresrrayDispatch = (dispatch) => ({
  setCorrectScoresrray: (array) => dispatch(setCorrectScoresrray(array)),
});
const nBackIndexDispatch = (dispatch) => ({
  setNBackIndex: (array) => dispatch(setNBackIndex(array)),
});
const predictiveIndexDispatch = (dispatch) => ({
  setPredictiveIndex: (array) => dispatch(setPredictiveIndex(array)),
});


//-------------------- END OF CONTSTANTS FOR REDUX TO DISPATCH ACTIONS

//-------------------- Function that will render the ImageArray Page:
const ImageArray =  () => {

  const { setImageFileNameArray } = imageArrayDispatch(useDispatch()); // how does this work?  It creates an object
  const { setImageFileNameLength } = imageFileNameLengthDispatch(useDispatch());
  const { setPredictiveImageFileNameArray } = PredictveImageArrayDispatch(useDispatch()); // how does this work?  It creates an object
  const { setPredictiveImageFileNameLength } = PredictiveImageFileNameLengthDispatch(useDispatch());
  //const { setImageSet } = imageSetDispatch(useDispatch());
  //const { setScoringArray } = scoringArrayDispatch(useDispatch());
  const { setFinalFileNameArray } = finalFileNameArrayDispatch(useDispatch());


  const ReduxStorefileNameArray = useSelector(state => state.imageArrayReducer.imageFileNameArray);
  //const ReduxFinalFileNameArray = useSelector(state => state.imageArrayReducer.finalFileNameArray);
  const imageFileNameLength = arrayLength(ReduxStorefileNameArray)
  const PredictiveFullFileNameArrayLength = arrayLength(predictiveFullFileNameArray)
  //const userResponseArray = useSelector(state => state.examNavigationReducer.userResponseArray);

  setImageFileNameArray(randomizedFullFileNameArray);
  setImageFileNameLength(imageFileNameLength);
  setPredictiveImageFileNameArray(predictiveFullFileNameArray);
  setPredictiveImageFileNameLength(PredictiveFullFileNameArrayLength);
  
    /*
    const ReduxStorefileNameArrayLength = ReduxStorefileNameArray.length;
    const ReduxStorePredictiveFileNameArray = useSelector(state => state.imageArrayReducer.PredictiveImageFileNameArray);
    const numberOfPhotosAlt = useSelector(state => state.nBackSettingsReducer.numberOfPhotosAlt);
    */
    const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    const numberOfPredictivePhotos = useSelector(state => state.nBackSettingsReducer.numberOfPredictivePhotos);
    const NumberofnBackMatches = useSelector(state => state.nBackSettingsReducer.NumberofnBackMatches);
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    /*
    const timerSeconds = useSelector(state => state.nBackSettingsReducer.timerSeconds);
    const finalFileNameArray = useSelector(state => state.imageArrayReducer.finalFileNameArray);
    */
    
    //const validPhotos = validateNumberOfPhotos(numberOfPhotos);
    const imageSetStageOne = randomizedFullFileNameArray.slice(0, numberOfPhotos);  // when number of photos is removed from here then it works
    
    
    // const imageSetStageOneLength =  imageSetStageOne.length;
    // const randomizedPredictiveImageArrayLength = arrayLength(ReduxStorePredictiveFileNameArray);
    /*
    const ReduxPredictiveFileNameArrayLength = useSelector(state => state.imageArrayReducer.predictiveImageFileNameLength)
    const imagesFolder = './images/n-back-photos/RandomLot/';
    const predictiveImagesFolder = './images/n-back-photos/Predictive/';
    */

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


    const { setPredictiveIndex } = predictiveIndexDispatch(useDispatch());

      setPredictiveIndex(predictiveIndex);
 
          
    //const earlyPredictiveIndex = [];//[...predictiveIndex];
    const imageSetStageTwo = (imageSetStageOne,predictiveIndex,PredictiveFullFileNameArray) => {
      /*
      *  This Function takes an array and adds the predictive images into it
      * at the places where the result of the predictiveIndexes() function defines it
      *
      */
      //let reduxPredictive = PredictiveFullFileNameArray;
      
      let predictive = [...predictiveIndex];
      let setStageOne = [...imageSetStageOne];
      let PredictiveIndexValueOne = 0;
      let PredictiveIndexValueTwo = 0;
      const iteratePredictiveIndexOne = () => PredictiveIndexValueOne++;
      const iteratePredictiveIndexTwo = () => PredictiveIndexValueTwo++;
      let PredictiveReduxValue = 0;
      const iteratePredictiveReduxValue = () => PredictiveReduxValue++;

      predictive.forEach(element => setStageOne.push(setStageOne[iteratePredictiveIndexOne()]));
      predictive.forEach(element => setStageOne.splice(predictiveIndex[iteratePredictiveIndexTwo()],1,PredictiveFullFileNameArray[iteratePredictiveReduxValue()]))
    return setStageOne.slice(0,numberOfPhotos);
    } 
    
  const imageStageTwo = imageSetStageTwo(imageSetStageOne,predictiveIndex,predictiveFullFileNameArray)
  
  //const predictiveMatchesEarly = showMatchesOnly(imageStageTwo,predictiveIndex);
  
  const nBackIndexes = (predictiveIndex,NumberofnBackMatches,nBackDegree, numberOfPhotos) => {
    /*
    *  Takes the Image Array called ImageSetStageTwo and returns an array of the indexes where the nback values
    * Will replace the array values
    * 
    */

    let nBackIndex = [];

   // let i = 0;
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
     //i++   
    }
   nBackIndex.sort((a,b)=>a-b);
    return nBackIndex;
  }

  const nBackIndex = nBackIndexes(predictiveIndex,NumberofnBackMatches,nBackDegree,numberOfPhotos);
  const { setNBackIndex } = nBackIndexDispatch(useDispatch()); // how does this work?  It creates an object


    setNBackIndex(nBackIndex);


  const imageSetStageThree = (nBackIndex, nBackDegree, imageStageTwo) => {
    /*
      *  This Function takes an array and adds the nback images into it
      * at the places where the result of the predictiveIndexes() and nBackIndexes() functions define it
      *
      */

    let stage2 = [...imageStageTwo];

    nBackIndex.forEach(element => stage2.splice(element-nBackDegree,1,stage2[element]));
   
    return stage2.slice(0,numberOfPhotos);
  }

 const imageStageThree = imageSetStageThree(nBackIndex, nBackDegree, imageStageTwo);

//  //const imageStageFour = imageSetStageFour(imageStageThree,predictiveIndex,PredictiveFileNameArray)
//  //setImageSet(imageStageThree);
// useEffect prevents it from looping forever
useEffect (() => {
setFinalFileNameArray(imageStageThree)
},[]
);

const scoringArray = (imageStageThree,predictiveIndex,nBackIndex) => {
  let scorray = [...imageStageThree];


  let predictive = [...predictiveIndex];
  let nBack = [...nBackIndex];
  //let setStageOne = [...imageSetStageOne];

  let PredictiveIndexValue = 0;
  const iteratePredictiveIndex = () => PredictiveIndexValue++;
  //let PredictiveReduxValue = 0;
  //const iteratePredictiveReduxValue = () => PredictiveReduxValue++;
  predictive.forEach(element => scorray.splice(predictive[iteratePredictiveIndex()],1,"P"))

  let nBackIndexValue = 0;
  const iteratenBackIndex = () => nBackIndexValue++;
  //let nBackReduxValue = 0;
  nBack.forEach(element => scorray.splice(nBack[iteratenBackIndex()],1,"N"))


  //let UniqueIndexValue = 0;
  //const iterateUniqueIndex = () => UniqueIndexValue++;
//  let UniqueReduxValue = 0;

  // let uniqueImageArray = predictive.concat(nBack);
  // uniqueImageArray.sort((a,b) => a-b);
  // console.log("Unique Image Array",uniqueImageArray,"nback",nBack,"predictive",predictive);
  // uniqueImageArray.forEach(element => scorray.splice(uniqueImageArray[iterateUniqueIndex()],1,"-"))

  scorray[0] = "TTTT";


  return scorray;
}

const correctScoresrray = scoringArray(imageStageThree,predictiveIndex,nBackIndex);

/*
const nBackMatches2 = showMatchesOnly(imageStageTwo,nBackIndex);
const predictiveMatches2 = showMatchesOnly(imageStageTwo,predictiveIndex);
const nBackMatches3 = showMatchesOnly(imageStageThree,nBackIndex);
const predictiveMatches3 = showMatchesOnly(imageStageThree,predictiveIndex);
*/


 
// ======= VALIDATE DATA 
function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}
// ======= END VALIDATE DATA 

// ======= RESULTS CHECKER DATA
 
const createArrayOfIndexes = (ReduxFinalFileNameArray) => {

  let arrayOfIndexes = [];

  for (let i = 1; i <= [...ReduxFinalFileNameArray].length; i++) {
    arrayOfIndexes.push(i);
  }
  return arrayOfIndexes;
}

// ===================== Send Values to Redux Store for ResultChecker to Use

const { setImageSetStageOne } = imageSetStageOneDispatch(useDispatch()); 
const { setImageSetStageTwo } = imageStageTwoDispatch(useDispatch()); 
const { setImageSetStageThree } = imageSetStageThreeDispatch(useDispatch()); 
const { setCorrectScoresrray } = correctScoresrrayDispatch(useDispatch()); 

setImageSetStageOne(imageSetStageOne);
setCorrectScoresrray(correctScoresrray);
setImageSetStageTwo(imageStageTwo);
setImageSetStageThree(imageStageThree);

    return (
<div className="imageArray">
</div>
    )
}

export default ImageArray;

