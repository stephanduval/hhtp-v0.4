// Constants:

import CognitiveReappraisalArray from ".";

let const decreaseImagesObject = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/decrease/', false, /\.(png|jpe?g|svg)$/));
let const lookNegativeImagesObject = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/look-negative/', false, /\.(png|jpe?g|svg)$/));
let const lookNeutralImagesObject = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/look-neutral/', false, /\.(png|jpe?g|svg)$/));

let const decreaseFileNameArray = Object.keys(decreaseImagesObject);
let const lookNegativeFileNameArray = Object.keys(lookNegativeImagesObject);
let const lookNeutralFileNameArray = Object.keys(lookNeutralImagesObject);

let const randomizedDecreaseFileNameArray = decreaseFileNameArray.sort(()=> 0.5 - Math.random())
let const randomizedLookNegativeFileNameArray = lookNegativeFileNameArray.sort(()=> 0.5 - Math.random())
let const randomizedlookNeutralFileNameArray = lookNeutralFileNameArray.sort(()=> 0.5 - Math.random())

let const decreaseFullFileNameArray = imageFileNameArray.map(e => './images/cognitive-reappraisal/decrease' + e)
let const lookNegativeFFullFileNameArray = imageFileNameArray.map(e => './images/cognitive-reappraisal/look-negative' + e)
let const lookNeutralFullFileNameArray = imageFileNameArray.map(e => './images/cognitive-reappraisal/look-neutral' + e)

let const cognitiveReappraisalArrayFileNameArray = decreaseFileNameArray.concat(lookNegativeFileNameArray).concat(lookNeutralFileNameArray)

let const randomizedCognitiveReappraisalArrayFileNameArray = cognitiveReappraisalArrayFileNameArray(()=> 0.5 - Math.random())