// Constants:
import { filesToPhotosObject } from '../../functions.js';

//import CognitiveReappraisalArray from ".";

const decreaseImagesObject = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/decrease/', false, /\.(png|jpe?g|svg)$/));
const lookNegativeImagesObject = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/look-negative/', false, /\.(png|jpe?g|svg)$/));
const lookNeutralImagesObject = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/look-neutral/', false, /\.(png|jpe?g|svg)$/));

const decreaseFileNameArray = Object.keys(decreaseImagesObject);
const lookNegativeFileNameArray = Object.keys(lookNegativeImagesObject);
const lookNeutralFileNameArray = Object.keys(lookNeutralImagesObject);

//const randomizedDecreaseFileNameArray = decreaseFileNameArray.sort(()=> 0.5 - Math.random())
const randomizedLookNegativeFileNameArray = lookNegativeFileNameArray.sort(()=> 0.5 - Math.random())
const randomizedlookNeutralFileNameArray = lookNeutralFileNameArray.sort(()=> 0.5 - Math.random())

//const decreaseFullFileNameArray = decreaseFileNameArray.map(e => './images/cognitive-reappraisal/decrease' + e)
//const lookNegativeFFullFileNameArray = randomizedLookNegativeFileNameArray.map(e => './images/cognitive-reappraisal/look-negative' + e)
//const lookNeutralFullFileNameArray = randomizedlookNeutralFileNameArray.map(e => './images/cognitive-reappraisal/look-neutral' + e)

const cognitiveReappraisalArrayFileNameArray = decreaseFileNameArray.concat(lookNegativeFileNameArray).concat(lookNeutralFileNameArray)

const randomizedCognitiveReappraisalArrayFileNameArray = cognitiveReappraisalArrayFileNameArray.sort(()=> 0.5 - Math.random())


export { randomizedCognitiveReappraisalArrayFileNameArray }; // a List of exported Variables 