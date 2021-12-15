import React from 'react';
import './cognitive-Reappraisal-Array.css';
import { finalRandomizedCombinedCognitiveImagesArray} from './create-cognitive-Reappraisal-Array';
import { useDispatch, useSelector } from 'react-redux';
import { setCRImageArray } from './actions';
//import { checkForEmptyinArray, showMatchesOnly } from './../n-back-image-array/functions';
//import { filesToPhotosObject } from '../../functions.js';
//import * as CRAConstant from './constants';


//let FinalCognitiveReappraisalArray = CRAConstant.randomizedCognitiveReappraisalArrayFileNameArray;




const CRIImageArrayDispatch = (dispatch) => ({
    setCRImageArray: (array) => dispatch(setCRImageArray(array)),
});




const CognitiveReappraisalArray =  () => {


    

  const { setCRImageArray } = CRIImageArrayDispatch(useDispatch()); // how does this work?  It creates an object

  setCRImageArray(finalRandomizedCombinedCognitiveImagesArray);

  const CRImageArrayFromRedux = useSelector(state => state.cRImageArrayReducer.cRImageArray);


  // Create 



    return (
        <div className="CognitiveReappraisalArray">


        </div>

            )
        }
        
        export default CognitiveReappraisalArray;