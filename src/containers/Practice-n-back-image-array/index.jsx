import React from 'react';
import './imageArray.css';
import { /*checkForEmptyinArray, showMatchesOnly */ } from './functions'
import { filesToPhotosObject } from '../../functions.js';
import { useSelector, useDispatch/*, connect*/ } from 'react-redux';
import { setPracticeImageArray } from './actions'
import { /*validateNumberOfPhotos, validateNumberOfPredictivePhotos, validatesetNumberofnBackMatches, validatesetnBackDegree, validatesetTimerSeconds*/ } from './../../functions';
// ======== Constants:
//

    const practiceImages = filesToPhotosObject(require.context('./../../../public/images/practice-n-back-photos/RemainingPictures', false, /\.(png|jpe?g|svg)$/));
    const practiceImageFileNameArray = Object.keys(practiceImages);
    const practiceImageFullFileNameArray = practiceImageFileNameArray.map(e => './images/practice-n-back-photos/RemainingPictures' + e);
    
    //-------------------- End of Create an object of the photo file names
    //const randomizedFullFileNameArray = imageFullFileNameArray.sort(()=> 0.5 - Math.random())
    
    const practiceNBackImages = filesToPhotosObject(require.context('./../../../public/images/practice-n-back-photos/Two-Back-Hits', false, /\.(png|jpe?g|svg)$/));
    const practiceNBackImageFileNameArray = Object.keys(practiceNBackImages);
    const practiceNBackFullFileNameArray = practiceNBackImageFileNameArray.map(e => './images/practice-n-back-photos/Two-Back-Hits' + e);

    const numberOfPhotos = practiceImageFullFileNameArray.length + practiceNBackFullFileNameArray.length*2;
    

    const practiceImageArrayDispatch = (dispatch) => ({
    setPracticeImageArray: (array) => dispatch(setPracticeImageArray(array)),
});
//-------------------- Function that will render the ImageArray Page:
const PracticeImageArray =  () => {




  const { setPracticeImageArray } = practiceImageArrayDispatch(useDispatch()); // how does this work?  It creates an object

     

    const imageSetStageOne = practiceImageFullFileNameArray.slice(0, numberOfPhotos);  // when number of photos is removed from here then it works
 
    const imageSetStageTwo = (imageSetStageOne,practiceNBackFullFileNameArray,numberOfPhotos) => {
      /*
      *  This Function takes an array and adds the predictive images into it
      * at the places where the result of the predictiveIndexes() function defines it
      *
      */
      //let reduxPredictive = PredictiveFullFileNameArray;
      let setStageOne = [...imageSetStageOne];
      let predictive = [];
      let n = (setStageOne.length / practiceNBackFullFileNameArray.length)
      let e = 0
      for (let element in practiceNBackFullFileNameArray) {
        setStageOne.splice(n,0, practiceNBackFullFileNameArray[e]);
        setStageOne.splice(n+2,0, practiceNBackFullFileNameArray[e]);
        n = n +(setStageOne.length / practiceNBackFullFileNameArray.length);
        e++
      }

    return setStageOne.slice(0,numberOfPhotos);
    } 
    
  const imageStageTwo = imageSetStageTwo(imageSetStageOne,practiceNBackFullFileNameArray,numberOfPhotos)


  setPracticeImageArray(imageStageTwo);
    
//-------------------- CONTSTANTS FOR REDUX TO DISPATCH ACTIONS: 




let resultCheckerArray = [
  {name: "Index", arrayData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]},
  {name: "imageSetStageOne", arrayData: imageSetStageOne.map(element => element.slice(-25,-4))},
  {name: "imageStageTwo", arrayData: imageStageTwo.map(element => element.slice(-21,-4))},  
  ];
  

  

  const tableGenerator = (ReduxArray) => {
      return (
          <div className="resultsChecker">
        <table>
          <thead>
              
              <tr>
                {/*ReduxArray.map(column => <th>{column.name}</th>)*/}
                
              </tr>
          </thead>
          <body>
  
          Current Image: 
          <p></p> 
          nBack State:
          <p></p>
          <tr>  
          
          {ReduxArray.map(column => <td><b>{column.name}</b></td>)}
          </tr>
          <tr>  
          {ReduxArray.map(column => <td>{column.arrayData.map(thing => <tr>{thing}</tr>)}</td>)}
          </tr>
          
          </body>
        </table>
        </div>
          )
          };
      


    

// useEffect(() => {
//   setPracticeImageArray(imageStageTwo);
//   console.log("ran once")
// },[imageSetStageOne]);


    return (
<div className="PracticeImageArray">
{/* {tableGenerator(resultCheckerArray)} */}
{/* Practice Array: {practiceImageArrayFromRedux} */}


</div>
    )

  }

export default PracticeImageArray;

