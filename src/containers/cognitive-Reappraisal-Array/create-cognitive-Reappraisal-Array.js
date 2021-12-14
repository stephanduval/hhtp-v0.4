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

    
    const titleCardImages = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/titlecards/', false, /\.(png|jpe?g|svg)$/));
    const titleCardImagesFileNameArray = Object.keys(titleCardImages);
    const titleCardImagesFullFileNameArray = titleCardImagesFileNameArray.map(e => './public/images/cognitive-reappraisal/titlecards/' + e)

    

    function addTitleCardsToCognitiveImagesArray(arrayParam) {
        let originalArray = [...arrayParam];
        let cognitiveImagesArrayWithTitleCards = [];
        //cognitiveImagesArrayWithTitleCards.fill("empty");
        let decreaseString = "decrease";
        let newIndex = 0;
        arrayParam.forEach((x,index)=> {
             if (x.includes(decreaseString)) {
                cognitiveImagesArrayWithTitleCards.push(titleCardImagesFullFileNameArray[0])
                cognitiveImagesArrayWithTitleCards.push(arrayParam[index])
                cognitiveImagesArrayWithTitleCards.push(titleCardImagesFullFileNameArray[2])
                //arrayParam.splice(index,0,aa.index,)

                console.log(x,"PizzaParty",index)
             
             } else {
               cognitiveImagesArrayWithTitleCards.push(titleCardImagesFullFileNameArray[1])
               cognitiveImagesArrayWithTitleCards.push(arrayParam[index])
               cognitiveImagesArrayWithTitleCards.push(titleCardImagesFullFileNameArray[2])
                console.log(x,"noPizza")

             }
            })
            return cognitiveImagesArrayWithTitleCards
             }


   // addTitleCardsToCognitiveImagesArray(updatedArrayChecker);



    const combinedCognitiveImagesArray = decreaseFullFileNameArray.concat(lookNegativeFullFileNameArray).concat(lookNeutralImagesFullFileNameArray);
    const randomizedCombinedCognitiveImagesArray = combinedCognitiveImagesArray.sort(()=> 0.5 - Math.random())
    const randomizedCombinedCognitiveImagesArrayWithTitleCards = addTitleCardsToCognitiveImagesArray(randomizedCombinedCognitiveImagesArray);
    export const finalRandomizedCombinedCognitiveImagesArray = randomizedCombinedCognitiveImagesArrayWithTitleCards.map(x => './' + x.slice(8));
    /*
    ./public/images/cognitive-reappraisal/titlecards/decrease.jpg
    .//images/cognitive-reappraisal/look-negative/Destruction 9.jpg
    */
   // addTitleCardsToCognitiveImagesArray
    



    // Not finished: 
    // const instructionsWithFinalArray = (array) => {
    //     instructionsArray = [];
    //     holderArray = [];
    //     array.map(element => holderArray.push([element]);
    //     holderArray.unshift(returnLookOrDecrease(element));
    //     holderArray.push(returnRelax())


    //     array.map(element) => instructionsArray.element.unShift(returnLookOrDecrease(element))
               
    // }

    //finalRandomizedCombinedCognitiveImagesArray

    
    let updatedArrayChecker = finalRandomizedCombinedCognitiveImagesArray ;    
    //let updatedArrayChecker = finalRandomizedCombinedCognitiveImagesArray.map(e => e.slice(32,40));


    export {updatedArrayChecker}


