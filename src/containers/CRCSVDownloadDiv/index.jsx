import './CSVDownload.css';
import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {scoringArray, createArrayOfIndexes} from '../../functions.js'
import { CSVLink } from 'react-csv';
import { setCSVDownloadState } from '../CognitiveReappraisalNavigation/actions';
//import { ExpansionPanelDetails } from '@material-ui/core';



const cSVDownloadStateDispatch = (dispatch) => ({
  setCSVDownloadState: (aboolean) => dispatch(setCSVDownloadState(aboolean)),
});

const CRCSVDownloadDiv = () => {

  const CSVDownloadStateRedux = useSelector(state => state.craNavigationReducer.CSVDownloaded);
  const { setCSVDownloadState } = cSVDownloadStateDispatch(useDispatch());




  
const userResponseArrayFromRedux = useSelector(state => state.craNavigationReducer.userResponseArray);




//userResponseArray

let resultCheckerArray = [
  {name: "User Response Array", arrayData: userResponseArrayFromRedux},
  ];


// {ReduxArray.map(column => <td><b>{column.name}</b></td>)}
// {ReduxArray.map(column => <td>{column.arrayData.map(thing => <tr>{thing}</tr>)}</td>)}

// use Array.from()


let csvString = "";

// csvString = resultCheckerArray.map(column => csvString.concat(toString(column.name)));

const makeCSVString = (initialString) => { 
  initialString = initialString.concat(resultCheckerArray.map(column => column.name))
  initialString = initialString.concat("\n")


  for (let n = 0; n < userResponseArrayFromRedux.length ; n++){
    initialString = initialString.concat(userResponseArrayFromRedux[n]+",");
    initialString = initialString.concat("\n")
    
    // initialString ..
  }

  return initialString;


};


 
const csvData = makeCSVString(csvString);


//let canvas = 's';
 


    return (
            
        <div>
               <CSVLink filename='ID_nBack_CSV..csv' data={csvData} onClick={() => {setCSVDownloadState(true)}}>Download CSV</CSVLink>
            
  
        </div>

        )
}

export default CRCSVDownloadDiv