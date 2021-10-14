import { filesToPhotosObject } from "../../functions";



  
    const decreaseImages = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/decrease/', false, /\.(png|jpe?g|svg)$/));
    const DecreaseImageFileNameArray = Object.keys(decreaseImages);
    const decreaseFullFileNameArray = DecreaseImageFileNameArray.map(e => './public/images/cognitive-reappraisal/decrease/' + e)

    const lookNegativeImages = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/look-negative/', false, /\.(png|jpe?g|svg)$/));
    const lookNegativeImagesFileNameArray = Object.keys(lookNegativeImages);
    const lookNegativeFullFileNameArray = lookNegativeImagesFileNameArray.map(e => './public/images/cognitive-reappraisal/look-negative/' + e)


    const lookNeutralImages = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/look-neutral/', false, /\.(png|jpe?g|svg)$/));
    const lookNeutralImagesFileNameArray = Object.keys(lookNeutralImages);
    const lookNeutralImagesFullFileNameArray = lookNeutralImagesFileNameArray.map(e => './public/images/cognitive-reappraisal/look-neutral/' + e)

    const combinedCognitiveImagesArray = decreaseFullFileNameArray.concat(lookNegativeFullFileNameArray).concat(lookNeutralImagesFullFileNameArray);
    export const randomizedCombinedCognitiveImagesArray = combinedCognitiveImagesArray.sort(()=> 0.5 - Math.random())