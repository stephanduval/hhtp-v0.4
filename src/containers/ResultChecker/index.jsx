import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';
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


const correctScoresrray = scoringArray(ReduxFinalFileNameArray,predictiveIndexFromReduxStore,nBackIndexFromReduxStore);

  
const arrayOfIndexes = createArrayOfIndexes(ReduxFinalFileNameArray);
const shortenedReduxFinalFileNameArray = ReduxFinalFileNameArray.map(element => element.slice(32));
const shortenedimageSetStageOne = imageSetStageOneFromRedux.map(element => element.slice(32));
const shortenedImageStageTwo = imageStageTwoFromRedux.map(element => element.slice(32,));
const shortenedImageStageThree = imageSetStageThreeFromRedux.map(element => element.slice(32));
const shortenedcorrectScoresrray = correctScoresrray.map(element => element.slice(0,2));

//userResponseArray

let resultCheckerArray = [
{name: "Index", arrayData: arrayOfIndexes},
{name: "imageSetStageOne", arrayData: shortenedimageSetStageOne},
{name: "imageStageTwo", arrayData: shortenedImageStageTwo},
{name: "imageStageThree", arrayData: shortenedImageStageThree},
{name: "Correct Score", arrayData: shortenedcorrectScoresrray},
{name: "User Response", arrayData: userResponseArray},
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


{tableGenerator(resultCheckerArray)}
<p></p>

</div>



);

}



export default ResultChecker;