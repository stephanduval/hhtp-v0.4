import './CSVDownload.css';
import React from 'react';
import { useSelector} from 'react-redux';
import {scoringArray, createArrayOfIndexes} from './../../functions.js'
import { CSVLink, CSVDownload } from "react-csv";





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

// {ReduxArray.map(column => <td><b>{column.name}</b></td>)}
// {ReduxArray.map(column => <td>{column.arrayData.map(thing => <tr>{thing}</tr>)}</td>)}

const csvData = [
  [resultCheckerArray.map(column => column.name)],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

 
    return (
            
        <div>
               <CSVLink data={csvData}>Download CSV</CSVLink>

  
        </div>

        )
}

export default CSVDownloadDiv