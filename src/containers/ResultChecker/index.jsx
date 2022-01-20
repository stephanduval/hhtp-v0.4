import React, { useEffect, useLayoutEffect } from 'react';
import { useSelector, connect} from 'react-redux';
import {scoringArray, createArrayOfIndexes} from './../../functions.js'
import './ResultChecker.css';

const ResultChecker = () => {

const ReduxFinalFileNameArray = useSelector(state => state.imageArrayReducer.finalFileNameArray);
const imageSetStageOneFromRedux = useSelector(state => state.imageArrayReducer.imageSetStageOne);
const imageStageTwoFromRedux = useSelector(state => state.imageArrayReducer.imageSetStageTwo);
const imageSetStageThreeFromRedux = useSelector(state => state.imageArrayReducer.imageSetStageThree);
const correctScoresrrayFromRedux = useSelector(state => state.imageArrayReducer.correctScoresrray);
const userResponseArray = useSelector(state => state.examNavigationReducer.userResponseArray);
const nBackIndexFromReduxStore = useSelector(state => state.imageArrayReducer.nBackIndex);
const predictiveIndexFromReduxStore = useSelector(state => state.imageArrayReducer.predictiveIndex);
const NBackState = useSelector(state => state.examNavigationReducer.newNBackState);
const userAnswerTimeArray = useSelector(state => state.examNavigationReducer.answerTimeArray);




const correctScoresrray = scoringArray(ReduxFinalFileNameArray,predictiveIndexFromReduxStore,nBackIndexFromReduxStore);

  
const arrayOfIndexes = createArrayOfIndexes(ReduxFinalFileNameArray);
//const shortenedReduxFinalFileNameArray = ReduxFinalFileNameArray.map(element => element);
const shortenedimageSetStageOne = imageSetStageOneFromRedux.map(element => element.slice(-8,-4));
const shortenedImageStageTwo = imageStageTwoFromRedux.map(element => element.slice(-8,-4));
const shortenedImageStageThree = imageSetStageThreeFromRedux.map(element => element.slice(-54,-4));
const shortenedcorrectScoresrray = correctScoresrrayFromRedux.map(element => element);

// console.log("type for imageSetStageThreeFromRedux", typeof imageSetStageThreeFromRedux,imageSetStageThreeFromRedux)
// console.log("type for ImagesetStageTwo", typeof shortenedImageStageTwo,shortenedImageStageTwo)
// console.log("type for correctScoresrrayFromRedux", typeof correctScoresrrayFromRedux,correctScoresrrayFromRedux)


//userResponseArray

let resultCheckerArray = [
{name: "Index", arrayData: arrayOfIndexes},
{name: "imageSetStageOne", arrayData: shortenedimageSetStageOne},
{name: "imageStageTwo", arrayData: shortenedImageStageTwo},
{name: "Image File Name (Stage 3)", arrayData: shortenedImageStageThree},
{name: "Correct Score", arrayData: correctScoresrrayFromRedux},
{name: "User Response", arrayData: userResponseArray},
{name: "Response Time ms", arrayData: userAnswerTimeArray},
{name: "Index", arrayData: arrayOfIndexes},
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

        Current Image: {imageSetStageThreeFromRedux[NBackState]}
        <p></p> 
        nBack State: {NBackState}
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
    

// ======= END OF RESULTS CHECKER DATA


return (


<div className="resultsChecker">
<h2> These are the results of a single examination</h2>
<h2>You can download the results in CSV format above.</h2>
<h2>Only columns 4,5 and 6 are relevant to the research, the rest are temporary troubleshooting the program</h2>
<div elementId="resultCheckerTable"></div>
{tableGenerator(resultCheckerArray)}
<p></p>

</div>



);

}



export default ResultChecker;