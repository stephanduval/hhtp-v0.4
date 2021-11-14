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
    const randomizedCombinedCognitiveImagesArray = combinedCognitiveImagesArray.sort(()=> 0.5 - Math.random())
    export const finalRandomizedCombinedCognitiveImagesArray = randomizedCombinedCognitiveImagesArray.map(x => './' + x.slice(8));
    

    const returnLookOrDecrease = (elementParam) => {
        if (elementParam.map(e => e.slice(32,40)).includes('look')) {
            return 'look'
        }else{
            return 'decrease'
        }
    }

    const returnPictureSRC = (elementParam) => {
        return elementParam
    }

    const returnRelax = () => {
        return 'relax'
    }


    // Not finished: 
    // const instructionsWithFinalArray = (array) => {
    //     instructionsArray = [];
    //     holderArray = [];
    //     array.map(element => holderArray.push([element]);
    //     holderArray.unshift(returnLookOrDecrease(element));
    //     holderArray.push(returnRelax())


    //     array.map(element) => instructionsArray.element.unShift(returnLookOrDecrease(element))
               
    // }

    

    

    let updatedArrayChecker = finalRandomizedCombinedCognitiveImagesArray.map(e => e.slice(32,40));

    export {updatedArrayChecker}


