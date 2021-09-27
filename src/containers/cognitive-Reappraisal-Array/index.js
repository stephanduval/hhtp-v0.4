import React from 'react';
import './cognitive-Reappraisal-Array.css';
import { checkForEmptyinArray, showMatchesOnly } from './../n-back-image-array/functions';
import { filesToPhotosObject } from '../../functions.js';

const cognitiveReappraisalImageFolder = './../../../public/images/n-back-photos/RandomLot/'
const images = filesToPhotosObject(require.context('./../../../public/images/n-back-photos/RandomLot/', false, /\.(png|jpe?g|svg)$/));


const CognitiveReappraisalArray =  () => {


    return (
        <div className="CognitiveReappraisalArray">
        </div>
            )
        }
        
        export default CognitiveReappraisalArray;