import React from 'react';
import './Cognitive-Reappraisal-Array-Checker.css';
import { checkForEmptyinArray, showMatchesOnly } from '../n-back-image-array/functions';
import { filesToPhotosObject } from '../../functions.js';
import * as CRAConstant from '../cognitive-Reappraisal-Array/constants';
import { useDispatch, useSelector } from 'react-redux';




let CognitiveReappraisalArray = CRAConstant.randomizedCognitiveReappraisalArrayFileNameArray;



let resultCheckerArray = [
    {name: "Random Cognitive Reappraisal Array", arrayData: CognitiveReappraisalArray},
    {name: "ScoringArray", arrayData: ScoringArray},
    ];



let CRATableGenerator = (ReduxArray) => {

    //const CRAImageState = useSelector(state => state.craNavigation.newCRAViewState);


    return (
        <div className="resultsChecker">
        {/* {CRAImageState} */}
      <table>
        <thead>
            
            <tr>
              {/*ReduxArray.map(column => <th>{column.name}</th>)*/}
              
            </tr>
        </thead>
        <body>

        {/* Current Image: {imageSetStageThreeFromRedux[NBackState]} */}
        <p></p> 
        {/* nBack State: {NBackState} */}
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



const CognitiveReappraisalArrayChecker =  () => {


    return (
        <div className="CognitiveReappraisalArray">
        Cognitive Reappraisal Array Checker
        {CRATableGenerator(resultCheckerArray)}

        </div>
            )
        }
        
        export default CognitiveReappraisalArrayChecker;