import './CSVDownload.css';
import React from 'react';
import { useSelector} from 'react-redux';
import {scoringArray, createArrayOfIndexes} from './../../functions.js'
import { CSVLink } from 'react-csv';
import { ExpansionPanelDetails } from '@material-ui/core';


const CSVDownloadDiv = () => {


  
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
const shortenedReduxFinalFileNameArray = ReduxFinalFileNameArray.map(element => element);
const shortenedimageSetStageOne = imageSetStageOneFromRedux.map(element => element.slice(-8,-4));
const shortenedImageStageTwo = imageStageTwoFromRedux.map(element => element.slice(-8,-4));
const shortenedImageStageThree = imageSetStageThreeFromRedux.map(element => element);
const shortenedcorrectScoresrray = correctScoresrray.map(element => element);




//userResponseArray

let resultCheckerArray = [
{name: "Index", arrayData: arrayOfIndexes},
{name: "imageSetStageOne", arrayData: shortenedimageSetStageOne},
{name: "imageStageTwo", arrayData: shortenedImageStageTwo},
{name: "File Name", arrayData: shortenedImageStageThree},
{name: "Correct Score", arrayData: shortenedcorrectScoresrray},
{name: "User Response", arrayData: userResponseArray},
{name: "Index", arrayData: arrayOfIndexes},
];


// {ReduxArray.map(column => <td><b>{column.name}</b></td>)}
// {ReduxArray.map(column => <td>{column.arrayData.map(thing => <tr>{thing}</tr>)}</td>)}

// use Array.from()


let csvString = "";

// csvString = resultCheckerArray.map(column => csvString.concat(toString(column.name)));

const makeCSVString = (initialString) => { 
  initialString = initialString.concat(resultCheckerArray.map(column => column.name))
  initialString = initialString.concat("\n")


  for (let n = 0; n < arrayOfIndexes.length ; n++){
    initialString = initialString.concat(arrayOfIndexes[n]+",");
    initialString = initialString.concat(shortenedImageStageThree[n]+",");
    initialString = initialString.concat(shortenedcorrectScoresrray[n]+",");
    initialString = initialString.concat(userResponseArray[n]+",");
    initialString = initialString.concat("\n")
    
    // initialString ..
  }

  return initialString;


};


 
const csvData = makeCSVString(csvString);


let canvas = 's';
 


    return (
            
        <div>
               <CSVLink filename='ID_nBack_CSV..csv' data={csvData}>Download CSV</CSVLink>
            
  
        </div>

        )
}

export default CSVDownloadDiv