import React from 'react';
import './cognitive-Reappraisal-Array.css';
import { randomizedCombinedCognitiveImagesArray } from './create-cognitive-Reappraisal-Array';
//import { checkForEmptyinArray, showMatchesOnly } from './../n-back-image-array/functions';
//import { filesToPhotosObject } from '../../functions.js';
//import * as CRAConstant from './constants';


//let FinalCognitiveReappraisalArray = CRAConstant.randomizedCognitiveReappraisalArrayFileNameArray;



const CognitiveReappraisalArray =  () => {


    return (
        <div className="CognitiveReappraisalArray">
        Cognitive Reappraisal Array

        {randomizedCombinedCognitiveImagesArray}
        </div>

            )
        }
        
        export default CognitiveReappraisalArray;