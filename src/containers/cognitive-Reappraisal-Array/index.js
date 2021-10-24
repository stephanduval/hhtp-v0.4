import React from 'react';
import './Cognitive-Reappraisal-Array.css';
import { randomizedCombinedCognitiveImagesArray } from './create-cognitive-Reappraisal-Array';
import CognitiveReappraisalExamNavigation from '../CognitiveReappraisalNavigation';
import CognitivePhotospace from '../Cognitive-Reappraisal-PhotoSpace';
//import { checkForEmptyinArray, showMatchesOnly } from './../n-back-image-array/functions';
//import { filesToPhotosObject } from '../../functions.js';
//import * as CRAConstant from './constants';


//let FinalCognitiveReappraisalArray = CRAConstant.randomizedCognitiveReappraisalArrayFileNameArray;



const CognitiveReappraisalArray =  () => {


    return (
        <div className="CognitiveReappraisalArray">
        Cognitive Reappraisal Array

        {randomizedCombinedCognitiveImagesArray}
        <CognitivePhotospace />
        <CognitiveReappraisalExamNavigation className="navigationSpace"/>

        </div>

            )
        }
        
        export default CognitiveReappraisalArray;