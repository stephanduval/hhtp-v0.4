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


    //const images = filesToPhotosObject(require.context('./../../../public/images/n-back-photos/RandomLot/', false, /\.(png|jpe?g|svg)$/));
    const randomImagesNegative = filesToPhotosObject(require.context('./../../../public/images/n-back-photos/Remaining Pictures Negative (34 Total)/', false, /\.(png|jpe?g|svg)$/));
    const randomImagesNeutral = filesToPhotosObject(require.context('./../../../public/images/n-back-photos/Remaining Pictures Neutral (34 Total)/', false, /\.(png|jpe?g|svg)$/));
    const imageFileNamerandomImagesNegative = Object.keys(randomImagesNegative);
    const imageFileNamerandomImagesNeutral = Object.keys(randomImagesNeutral);

    const imageFileNamerandomImagesNegativeFullFileNameArray = imageFileNamerandomImagesNegative.map(e => './images/n-back-photos/Remaining Pictures Negative (34 Total)/' + e)
    const imageFileNamerandomImagesNeutralFullFileNameArray = imageFileNamerandomImagesNeutral.map(e => './images/n-back-photos/Remaining Pictures Neutral (34 Total)/' + e)
    let imageRemainingFileNameArray = imageFileNamerandomImagesNegativeFullFileNameArray.concat(imageFileNamerandomImagesNeutralFullFileNameArray);
    //imageRemainingFileNameArray = ["a","b","c","d","e","f","g","h","i","j","empty","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let randomizedRemainingFileNameArray = imageRemainingFileNameArray.sort(()=> 0.5 - Math.random())

    //console.log('imageFullFileNameArray',imageFullFileNameArray.sort());
    //-------------------- End of Create an object of the photo file names
    
    const predictiveImagesNegative = filesToPhotosObject(require.context('./../../../public/images/n-back-photos/Prospective Memory Hits (12 Total)/Negative Prospective Memory Hits (6 Total)/', false, /\.(png|jpe?g|svg)$/));
    const predictiveImagesNeutral = filesToPhotosObject(require.context('./../../../public/images/n-back-photos/Prospective Memory Hits (12 Total)/Neutral Prospective Memory Hits (6 Total)/', false, /\.(png|jpe?g|svg)$/));
    
    // N Back Array Creation
    const nBackImagesNegative = filesToPhotosObject(require.context('./../../../public/images/n-back-photos/Negative N-Back Hits (13 Total)/', false, /\.(png|jpe?g|svg)$/));
    const nBackImagesNeutral = filesToPhotosObject(require.context('./../../../public/images/n-back-photos/Neutral N-Back Hits (13 Total)/', false, /\.(png|jpe?g|svg)$/));
    const imageFileNamenBackImagesNegative = Object.keys(nBackImagesNegative);
    const imageFileNamenBackImagesNeutral = Object.keys(nBackImagesNeutral);

    const imageFileNamenBackImagesNegativeFullFileNameArray = imageFileNamenBackImagesNegative.map(e => './images/n-back-photos/Negative N-Back Hits (13 Total)/' + e)
    const imageFileNamenBackImagesNeutralFullFileNameArray = imageFileNamenBackImagesNeutral.map(e => './images/n-back-photos/Neutral N-Back Hits (13 Total)/' + e)
    const nBackFullFileNameArray = imageFileNamenBackImagesNegativeFullFileNameArray.concat(imageFileNamenBackImagesNeutralFullFileNameArray);
    //
    // console.log("nBackFullFileNameArray",nBackFullFileNameArray)


      // run code for dirHandle
    
    //const predictiveFullFolderLocation = predictiveImages.map((x) => { + 'x' });
   // const predictiveFileNameArray = Object.keys(predictiveFullFolderLocation);
    let predictiveImagesNegativeFileNameArray = Object.keys(predictiveImagesNegative);
    let predictiveImagesNeutralFileNameArray = Object.keys(predictiveImagesNeutral);
    predictiveImagesNegativeFileNameArray = predictiveImagesNegativeFileNameArray.map(e => './images/n-back-photos/Prospective Memory Hits (12 Total)/Negative Prospective Memory Hits (6 Total)/' + e)
    predictiveImagesNeutralFileNameArray = predictiveImagesNeutralFileNameArray.map(e => './images/n-back-photos/Prospective Memory Hits (12 Total)/Neutral Prospective Memory Hits (6 Total)/' + e)

    const predictiveFullFileNameArray = predictiveImagesNegativeFileNameArray.concat(predictiveImagesNeutralFileNameArray);
    //const predictiveFullFileNameArray = predictiveFileNameArray.map(e => './images/n-back-photos/Predictive/' + e)
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
  

  setImageFileNameArray(randomizedRemainingFileNameArray);
  setImageFileNameLength(imageFileNameLength);
  setPredictiveImageFileNameArray(predictiveFullFileNameArray);
  setPredictiveImageFileNameLength(PredictiveFullFileNameArrayLength);
  
  
    const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    const numberOfPredictivePhotos = useSelector(state => state.nBackSettingsReducer.numberOfPredictivePhotos);
    const NumberofnBackMatches = useSelector(state => state.nBackSettingsReducer.NumberofnBackMatches);
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    
  
    
    
    let masterImageSet = Array.apply("null", Array(numberOfPhotos)).map(function () {})
    let imageSetStageOne = masterImageSet
    masterImageSet.fill("empty");
    

    const predictiveIndexes = (masterImageSet,numberOfPredictivePhotos) => {
        /*
        *  Takes the Image Array stage one and returns an array of the indexes where the predictive values
        * Will replace the array values
        */

        let indexOfPredictivePhotos = [];
        //indexOfPredictivePhotos.apply(null, Array(numberOfPhotos)).map(function () {})

        //while(indexOfPredictivePhotos.length < numberOfPredictivePhotos){
        while(indexOfPredictivePhotos.length < numberOfPredictivePhotos){
       // var r = Math.floor(Math.random() * (imageSetStageOneLength - nBackDegree) + 0);
        var r = Math.floor(Math.random() * ((masterImageSet.length)) + 0); // a number needs to be imageSetStageOne.length;

       // if (!indexOfPredictivePhotos.includes(r)) {indexOfPredictivePhotos.push(r)}; 
      if (!indexOfPredictivePhotos.includes(r)) {indexOfPredictivePhotos.push(r)}; 

        }
    indexOfPredictivePhotos.sort((a,b)=>a-b);
    return indexOfPredictivePhotos;
    } 

    const predictiveIndex = predictiveIndexes(masterImageSet,numberOfPredictivePhotos);

    const { setPredictiveIndex } = predictiveIndexDispatch(useDispatch());

    setPredictiveIndex(predictiveIndex);
 
    

    const imageSetStageTwo = (masterImageSet,predictiveIndex,PredictiveFullFileNameArray) => {
      /*
      *  This Function takes an array and adds the predictive images into it
      * at the places where the result of the predictiveIndexes() function defines it
      *
      */
      //let reduxPredictive = PredictiveFullFileNameArray;
      
      let predictive = [...predictiveIndex];
      let setStageOne = [...masterImageSet];
      let PredictiveIndexValueOne = 0;
      let PredictiveIndexValueTwo = 0;
      const iteratePredictiveIndexOne = () => PredictiveIndexValueOne++;
      const iteratePredictiveIndexTwo = () => PredictiveIndexValueTwo++;
      let PredictiveReduxValue = 0;
      const iteratePredictiveReduxValue = () => PredictiveReduxValue++;

      //predictive.forEach(element => masterImageSet.push(setStageOne[iteratePredictiveIndexOne()]));
      predictive.forEach(element => masterImageSet.splice(predictiveIndex[iteratePredictiveIndexTwo()],1,PredictiveFullFileNameArray[iteratePredictiveReduxValue()]))
    return masterImageSet//.slice(0,numberOfPhotos);
    } 
  
  const imageStageTwo = imageSetStageTwo(masterImageSet,predictiveIndex,predictiveFullFileNameArray)
  masterImageSet = imageSetStageTwo(masterImageSet,predictiveIndex,predictiveFullFileNameArray)


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
    let num = Math.floor(Math.random() * (numberOfPhotos - nBackDegree) + nBackDegree);
    //let num = Math.floor(Math.random() * (numberOfPhotos - NumberofnBackMatches - NumberofnBackMatches - numberOfPredictivePhotos + 10) + nBackDegree);
  
   if (
         !(predictiveIndex.includes(num))
         && !(predictiveIndex.includes(num-nBackDegree))
         && !(predictiveIndex.includes(num+nBackDegree))
         && !(nBackIndex.includes(num))
         && !(nBackIndex.includes(num-nBackDegree))
         && !(nBackIndex.includes(num+nBackDegree))
         ) 
  //       {
          //console.log["Match",num];
          nBackIndex.push(num);
          //nBackIndex.push(num+nBackDegree)
   //i++   
    }
   nBackIndex.sort((a,b)=>a-b);
    return nBackIndex;
  }

  
  const createStageThreeSafeShuffleIndexFunction = (predictiveIndex,nBackIndex,nBackDegree,NumberofnBackMatches) => {
    /*
    *  Takes the Image Array called ImageSetStageTwo and returns an array of the indexes where the nback values
    * Will replace the array values
    * 
    */

    let stageThreeSafeShuffleIndex = [];

   // let i = 0;
  while (stageThreeSafeShuffleIndex.length < NumberofnBackMatches) {
  let num = Math.floor(Math.random() * (numberOfPhotos - NumberofnBackMatches - numberOfPredictivePhotos));
  
  if (!(predictiveIndex.includes(num))
      && !(predictiveIndex.includes(num-nBackDegree))
      && !(predictiveIndex.includes(num+nBackDegree))
      && !(nBackIndex.includes(num))
      && !(nBackIndex.includes(num-nBackDegree))
      && !(nBackIndex.includes(num+nBackDegree))
        ) 
        {
          //console.log["Match",num];
          stageThreeSafeShuffleIndex.push(num);
          //nBackIndex.push(num+nBackDegree)
        }
     //i++   
    }
    stageThreeSafeShuffleIndex.sort((a,b)=>a-b);

    return stageThreeSafeShuffleIndex;


    ;
  }

  const stageThreeSafeShuffleIndexFunction = (inputArray,stageThreeSafeShuffleIndex) => {

    stageThreeSafeShuffleIndex.forEach(element => inputArray.splice(element,0,inputArray.pop()) );

    return inputArray;

  }
  let SUM = 0
  SUM = (numberOfPhotos - NumberofnBackMatches - NumberofnBackMatches - numberOfPredictivePhotos + 10) + nBackDegree

  const nBackIndex = nBackIndexes(predictiveIndex,NumberofnBackMatches,nBackDegree,numberOfPhotos);
  const { setNBackIndex } = nBackIndexDispatch(useDispatch()); // how does this work?  It creates an object

    setNBackIndex(nBackIndex);


  const imageSetStageThree = (nBackIndex, nBackDegree, masterImageSet,nBackFullFileNameArray,randomizedRemainingFileNameArray) => {
    /*
      *  This Function takes an array and adds the nback images into it
      * at the places where the result of the predictiveIndexes() and nBackIndexes() functions define it
      *
      */

    let stage2 = [...masterImageSet];
    let stageTwoCopy = [...masterImageSet];



    
    // nBackIndex.forEach(element => 
    //   stage2.push(stage2[element-nBackDegree]+"moved")
    //   //{n++}
    //   //stage2.push(stageTwoCopy[element-nBackDegree])
    //     //stage2.push(stageTwoCopy[element])
    // );
    
    
    // nBackIndex.forEach(element => 
    //   stage2.push(stage2[element])
    //   //{n++}
    //   //stage2.push(stageTwoCopy[element-nBackDegree])
    //     //stage2.push(stageTwoCopy[element])
    // );
    


    nBackIndex.forEach(element => stage2.splice(element-nBackDegree,1,nBackFullFileNameArray[nBackIndex.indexOf(element)]));  
    nBackIndex.forEach(element => stage2.splice(element,1,nBackFullFileNameArray[nBackIndex.indexOf(element)]));

    
   // stageThreeSafeShuffleIndex.forEach(element => stage2.splice(element,0,(stage2.pop())));


    
      //(stageTwoCopy[element-nBackDegree]));
      let n = 0
//a.forEach(function(item, i) { if (item == 3452) a[i] = 1010; });

   
// masterImageSet.forEach(function(item, n)
//  { 
//   //  if (item == "empty"){
//   // imageRemainingFileNameArray[n] ? undefined: "VALUE"
//   console.log("POP",imageRemainingFileNameArray[n])
//   // item = imageRemainingFileNameArray[n]
//    n++
// // }

const alphabet = ["a","b","c","d","e","f","g","h","i","j","empty","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


const find = (needle, haystack) => {
  var results = [];
  var idx = haystack.indexOf(needle);
  while (idx != -1) {
      results.push(idx);
      idx = haystack.indexOf(needle, idx + 1);
  }

  return results;
}

books = [1,2,3,"empty",5,6,7]

let randomizedEmptyIndex = find("empty",stage2)


randomizedEmptyIndex.forEach(element => stage2.splice(element,1,imageRemainingFileNameArray[randomizedEmptyIndex.indexOf(element)]));  
//randomizedEmptyIndex.forEach(element => stage2.splice(element,1,alphabet[randomizedEmptyIndex.indexOf(element)]));  
//randomizedEmptyIndex.forEach(element => stage2.splice(element,1,"Full"));  
  

// let RandomArray = [...randomizedRemainingFileNameArray];


// randomizedRemainingFileNameArray
//       // for (let element of stage2) {
//       //   if (element == "empty") {
//       //     element = "full"
//       //     console.log("empty")
//       //   }
//       // }

    return stage2//.slice(0,numberOfPhotos);
  }

//randomizedRemainingFileNameArray.type)


let  imageStageThreeSafeShuffleIndex = createStageThreeSafeShuffleIndexFunction(predictiveIndex,nBackIndex,nBackDegree,NumberofnBackMatches)


  
  
let books = [1,2,3,4]

let imageStageThree = imageSetStageThree(nBackIndex, nBackDegree, imageStageTwo, nBackFullFileNameArray,randomizedRemainingFileNameArray);
let imageStageThreeForScoringArray = imageSetStageThree(nBackIndex, nBackDegree, imageStageTwo, nBackFullFileNameArray);
   


//testScoredArray = scoringArrayFunction(imageStageThree, nBackDegree) 
//console.log("testScoredArray",testScoredArray)


//let correctScoresrray = scoringArrayFunction(imageStageThree, nBackDegree);


const scoringArray = (imageStageThree,predictiveIndex,nBackIndex) => {
  let scorray = [...imageStageThree];

  let predictive = [...predictiveIndex];
  let nBack = [...nBackIndex];

  //scorray.map(element=>element+"111");
  //let setStageOne = [...imageSetStageOne];
  let PredictiveIndexValue = 0;
  const iteratePredictiveIndex = () => PredictiveIndexValue++;
  // let PredictiveReduxValue = 0;
  // const iteratePredictiveReduxValue = () => PredictiveReduxValue++;
  let scoreLength = scorray.length;
  let scoreArray =  Array.apply("null", Array(scoreLength)).map(function () {})
  scoreArray.fill("-")


  predictive.forEach(element => scoreArray.splice(predictive[iteratePredictiveIndex()],1,"P"))

  let nBackIndexValue = 0;
  const iteratenBackIndex = () => nBackIndexValue++;
  let nBackReduxValue = 0;
  nBack.forEach(element => scoreArray.splice(nBack[iteratenBackIndex()],1,"N"))

  

  return scoreArray;
}
//imageStageThree = stageThreeSafeShuffleIndexFunction(imageStageThree,imageStageThreeSafeShuffleIndex);
let correctScoresrray = scoringArray(imageStageThree,predictiveIndex,nBackIndex);

//correctScoresrray = stageThreeSafeShuffleIndexFunction(correctScoresrray,imageStageThreeSafeShuffleIndex)


  //const imageStageFour = imageSetStageFour(imageStageThree,predictiveIndex,PredictiveFileNameArray)
//  //setImageSet(imageStageThree);
// useEffect prevents it from looping forever
useEffect (() => {
  setFinalFileNameArray(imageStageThree)
  },[]
  );



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

