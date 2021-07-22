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
    const imageSetStageOne = imageFileNameArray.slice((numberOfPhotos, numberOfPredictivePhotos) => 0, numberOfPhotos-numberOfPredictivePhotos); 
    const PredictiveFileNameArrayLength = arrayLength(PredictiveFileNameArray)
    const NBackState = useSelector(state => state.examNavigationReducer.newNBackState); // gets the NBack state from the store
   // const randomizedPredictiveImageArrayLength = arrayLength(ReduxStorePredictiveFileNameArray);
    const ReduxPredictiveFileNameArrayLength = useSelector(state => state.imageArrayReducer.predictiveImageFileNameLength)

    const { setImageFileNameArray } = imageArrayDispatch(useDispatch()); // how does this work?  It creates an object
    const { setImageFileNameLength } = imageFileNameLengthDispatch(useDispatch());
    const { setPredictiveImageFileNameArray } = PredictveImageArrayDispatch(useDispatch()); // how does this work?  It creates an object
    const { setPredictiveImageFileNameLength } = PredictiveImageFileNameLengthDispatch(useDispatch());

 
    setImageFileNameArray(imageFileNameArray);
    setImageFileNameLength(imageFileNameLength);
    setPredictiveImageFileNameArray(PredictiveFileNameArray);
    setPredictiveImageFileNameLength(PredictiveFileNameArrayLength);

    const predictiveIndexes = (imageSetStageOne,numberOfPredictivePhotos) => {
        /*
        *  Takes the Image Array stage one and returns an array of the indexes where the predictive values
        * Will replace the array values
        */
        let indexOfPredictivePhotos = [];
        while(indexOfPredictivePhotos.length < numberOfPredictivePhotos){
        var r = Math.floor(Math.random() * (imageSetStageOne.length - 0 + 1) + 0);
        indexOfPredictivePhotos.push(r); 
    }
    indexOfPredictivePhotos.sort((a,b)=>a-b);
    return indexOfPredictivePhotos;
    } 

    const predictiveIndex = predictiveIndexes(imageSetStageOne,numberOfPredictivePhotos)

    
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


    predictive.forEach(element => setStageOne.splice(predictive[iteratePredictiveIndex()],0,reduxPredictive[iteratePredictiveReduxValue()]))
    //reduxPredictive[PredictiveIndexValue])
      //predictive.forEach(element => setStageOne.splice(1,0,setStageOne[element]))
      
  return setStageOne;
  } 
    
  const imageStageTwo = imageSetStageTwo(imageSetStageOne,predictiveIndex,PredictiveFileNameArray)

  const nBackPredictiveIndexes = (predictiveIndex,NumberofnBackMatches,nBackDegree) => {
    /*
    *  Takes the Image Array called ImageSetStageTwo and returns an array of the indexes where the nback values
    * Will replace the array values
    * 
    */

    let nBackIndex = [];

    let i = 0;
  while (nBackIndex.length < NumberofnBackMatches) {
  let num = Math.floor(Math.random() * (numberOfPhotos + 1) + nBackDegree);
  
  if (!(predictiveIndex.includes(num))
      && !(predictiveIndex.includes(num-nBackDegree))
      && !(predictiveIndex.includes(num+nBackDegree))
      && !(nBackIndex.includes(num))
      && !(nBackIndex.includes(num-nBackDegree))
      && !(nBackIndex.includes(num+nBackDegree))
        ) 
        {
          //console.log["Match",num];
          nBackIndex.push(num,num-nBackDegree);
        }
     i++   
    }
    nBackIndex.sort((a,b)=>a-b);
    return nBackIndex;
  }

  const nBackPredictiveIndex = nBackPredictiveIndexes(predictiveIndex,NumberofnBackMatches,nBackDegree);

  const imageSetStageThree = (nBackPredictiveIndex, nBackDegree, imageStageTwo) => {
    /*
      *  This Function takes an array and adds the nback images into it
      * at the places where the result of the predictiveIndexes() and nBackIndexes() functions define it
      *
      */

    nBackPredictiveIndex.forEach(element => imageStageTwo.splice(element-nBackDegree,1,imageStageTwo[element]));
   
    return imageStageTwo;

  }

 const imageStageThree = imageSetStageThree(nBackPredictiveIndex, nBackDegree, imageStageTwo);


// function spliceNBacksIntoArray(arraywithPredictives,numberOfPhotos,PredictiveFileNameArray) {
//     /*
//     *  Function: spliceNBacksIntoArray
  
//     *  Purpose: It creates a list of unique random integers and uses that to decide which images
//     *  In the array will be duplicated for the purpose of creating the n-back test
//     * 
//     * It also marks each file name as "predictive or matching" for testing purposes
//     * 
//     *  Parameters: None
//     * 
//     *  Returns: A modified array of the image list with the n-back matches inserted
//     * 
//     */ 
  
//   let excluded = [];
//   let finalArray =[...arraywithPredictives];
//   let scoreArray = [];
//   // Map each index of items that match the items in PredictiveFileNameArray //arraywithPredictives
//   PredictiveFileNameArray.map(x => excluded.push(arraywithPredictives.indexOf(x)));
//   excluded.sort((a,b)=>a-b);

//   // eliminate indexOf() values that indicate the element was not found (result for that is -1)
//   /*while (excluded[0] < 0) 
//     {
//     excluded.shift();
//     }
// */

//   // adds values that will protect the predictive set of images 
//   /*excluded.map((element) => excluded.push(element+nBackDegree));
//   excluded.sort((a,b)=>a-b);
//   while (excluded[0] < 0) 
//     {
//     excluded.shift();
//     }
// */

//   let i = 0;
//   while (i < NumberofnBackMatches) {
//   let num = Math.floor(Math.random() * (numberOfPhotos + 1) + 0);
  
//   if (!(excluded.includes(num))
//       //&& !(excluded.includes(num+nBackDegree))
//       && !(excluded.includes(num-nBackDegree))
//         ) 
//         {
//           //console.log["Match",num];
//           excluded.push(num,num-nBackDegree);
//           finalArray.splice(num+nBackDegree,1,finalArray[num]);
//           }
  
//    i++   
//     }
//   /*
//     let j = 0
//      while (j < finalArray.length) {
       
//       if (PredictiveFileNameArray.includes(finalArray[j])) 
//        //slicedRandomizedImageArray[j])) 
//        {
//        console.log("FLAG");
//      finalArray[j] = "===FLAG===";
//        }
//        j++
//      }
//   */
//     excluded.sort((a,b)=>a-b);

//     return finalArray;
//   }


//   function excludedValuesForSpliceNBacksIntoArray(arraywithPredictives,numberOfPhotos,PredictiveFileNameArray) {
//     /*
//     *  Function: spliceNBacksIntoArray
  
//     *  Purpose: It creates a list of unique random integers and uses that to decide which images
//     *  In the array will be duplicated for the purpose of creating the n-back test
//     * 
//     * It also marks each file name as "predictive or matching" for testing purposes
//     * 
//     *  Parameters: None
//     * 
//     *  Returns: A modified array of the image list with the n-back matches inserted
//     * 
//     */ 
  
//   let excluded = [];
//   let finalArray =[...arraywithPredictives];
//   let scoreArray = [];
//   // Map each index of items that match the items in PredictiveFileNameArray //arraywithPredictives
//   PredictiveFileNameArray.map(x => excluded.push(arraywithPredictives.indexOf(x)));
//   excluded.sort((a,b)=>a-b);

//   // eliminate indexOf() values that indicate the element was not found (result for that is -1)
//   /*while (excluded[0] < 0) 
//     {
//     excluded.shift();
//     }
// */

//   // adds values that will protect the predictive set of images 
//   /*excluded.map((element) => excluded.push(element+nBackDegree));
//   excluded.sort((a,b)=>a-b);
//   while (excluded[0] < 0) 
//     {
//     excluded.shift();
//     }
// */

//   let i = 0;
//   while (i < NumberofnBackMatches) {
//   let num = Math.floor(Math.random() * (numberOfPhotos + 1) + 0);
  
//   if (!(excluded.includes(num))
//       //&& !(excluded.includes(num+nBackDegree))
//       && !(excluded.includes(num-nBackDegree))
//         ) 
//         {
//           //console.log["Match",num];
//           excluded.push(num,num-nBackDegree);
//           finalArray.splice(num+nBackDegree,0,"MATCH"/*finalArray[num]*/);
//           }
  
//    i++   
//     }
//   /*
//     let j = 0
//      while (j < finalArray.length) {
       
//       if (PredictiveFileNameArray.includes(finalArray[j])) 
//        //slicedRandomizedImageArray[j])) 
//        {
//        console.log("FLAG");
//      finalArray[j] = "===FLAG===";
//        }
//        j++
//      }
//   */
//     excluded.sort((a,b)=>a-b);

//     return excluded;
//   }


//   function createScoringArray(finalArray,PredictiveFileNameArray,nBackDegree) {
    
//     let arr = [...finalArray];
//     let arr2 = [...finalArray];
//     let n = 0;
//     let j = 0;
//     arr.forEach(item =>{ 
// /*  if(arr[n] == arr[n+nBackDegree])
//     {
//       arr.splice(n,1,'{=N=}');
//       arr.splice(n+nBackDegree,1,'{=N=}');

//     }*/
// if(PredictiveFileNameArray.includes(arr[n]))
//     {
//       arr.splice(n,1,'=P=');
//     }
//     n++
//   });

//   return arr;
// };

//   function checkArrayValues (array) {
//     let j = 0;
//     let arr = [...array];
//     let arr2 = [...array];
//     arr.forEach(item =>{ 
//       if(arr[j] == arr2[j+2])
//         {
//           arr.splice(j,1,'N=>');
//           arr.splice(j+2,1,'<=N');
//   }
//   j++
//   })

//     return arr;
  
//   }

//     let checkArrayValue = checkArrayValues([1,1,1,2,3,2,3,5,6,7,8,7])

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
  
    //let finalArray = spliceNBacksIntoArray(imageSetStageTwo,numberOfPhotos,PredictiveFileNameArray);
    //let scoringArray = createScoringArray(finalArray,PredictiveFileNameArray,nBackDegree);
    //let excluded = excludedValuesForSpliceNBacksIntoArray(imageSetStageTwo,numberOfPhotos,PredictiveFileNameArray);

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
imageSetStageOne: {imageSetStageOne}    
</p>
<p>
Number of Photos {numberOfPhotos}
<p>

</p>   length: {imageFileNameLength}  ...  ReduxStorePredictiveFileNameArray: {ReduxStorePredictiveFileNameArray}
<p>

</p>
</p>
<p>
setPredictiveImageFileNameLength: {ReduxPredictiveFileNameArrayLength} 
</p>
<p>
image Stage Two:  
</p>
<p>{imageStageTwo.toString()} Length: {imageStageTwo.length}</p>


<p>
nBackPredictiveIndex: 
</p>

<p>
{nBackPredictiveIndex.toString()} Length: {nBackPredictiveIndex.length}
</p>
<p>
ImageStateThree: 
</p>
<p>
{imageStageThree.toString()}  Length: {imageStageThree.length}
</p>
<p>

</p>
<p>
nBackPredictiveIndex: {nBackPredictiveIndex.toString()}  Length: {nBackPredictiveIndex.length}
</p>
<p>
predictiveIndex: {predictiveIndex.toString()} Length: {predictiveIndex.length}
 
</p>
</div>
    )
}

//-------------------- End of Function that will render the ImageArray Page

export default ImageArray;

