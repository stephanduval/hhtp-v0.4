import { filesToPhotosObject } from "../../functions";



  
    const decreaseImages = filesToPhotosObject(require.context('./../../../public/images/practice-cognitive-reappraisal-photos/decrease/', false, /\.(png|jpe?g|svg)$/));
    const DecreaseImageFileNameArray = Object.keys(decreaseImages);
    const decreaseFullFileNameArray = DecreaseImageFileNameArray.map(e => './public/images/practice-cognitive-reappraisal-photos/decrease/' + e)

    const lookNegativeImages = filesToPhotosObject(require.context('./../../../public/images/practice-cognitive-reappraisal-photos/look-negative/', false, /\.(png|jpe?g|svg)$/));
    const lookNegativeImagesFileNameArray = Object.keys(lookNegativeImages);
    const lookNegativeFullFileNameArray = lookNegativeImagesFileNameArray.map(e => './public/images/practice-cognitive-reappraisal-photos/look-negative/' + e)


    const lookNeutralImages = filesToPhotosObject(require.context('./../../../public/images/practice-cognitive-reappraisal-photos/look-neutral/', false, /\.(png|jpe?g|svg)$/));
    const lookNeutralImagesFileNameArray = Object.keys(lookNeutralImages);
    const lookNeutralImagesFullFileNameArray = lookNeutralImagesFileNameArray.map(e => './public/images/practice-cognitive-reappraisal-photos/look-neutral/' + e)

    
    const titleCardImages = filesToPhotosObject(require.context('./../../../public/images/practice-cognitive-reappraisal-photos/titlecards/', false, /\.(png|jpe?g|svg)$/));
    const titleCardImagesFileNameArray = Object.keys(titleCardImages);
    export const titleCardImagesFullFileNameArray = titleCardImagesFileNameArray.map(e => './public/images/practice-cognitive-reappraisal-photos/titlecards/' + e)

    

    function addTitleCardsToCognitiveImagesArray(arrayParam) {
        let originalArray = [...arrayParam];
        let cognitiveImagesArrayWithTitleCards = [];
        //cognitiveImagesArrayWithTitleCards.fill("empty");
        let decreaseString = "decrease";
        let ratingString = "rating"
        let newIndex = 0;
        let decreaseCard = titleCardImagesFullFileNameArray[0]; //0
        let relaxCard = titleCardImagesFullFileNameArray[3];  //3
        let lookCard = titleCardImagesFullFileNameArray[2]; //2
        let howNegativeCard = titleCardImagesFullFileNameArray[1]; //1
        cognitiveImagesArrayWithTitleCards.push(relaxCard);
        arrayParam.forEach((x,index)=> {
             if (x.includes(decreaseString)) {
                cognitiveImagesArrayWithTitleCards.push(decreaseCard)
                cognitiveImagesArrayWithTitleCards.push(arrayParam[index])
                cognitiveImagesArrayWithTitleCards.push(howNegativeCard)
                cognitiveImagesArrayWithTitleCards.push(relaxCard)
                //arrayParam.splice(index,0,aa.index,)

             
             } else {
               cognitiveImagesArrayWithTitleCards.push(lookCard)
               cognitiveImagesArrayWithTitleCards.push(arrayParam[index])
               cognitiveImagesArrayWithTitleCards.push(howNegativeCard)
               cognitiveImagesArrayWithTitleCards.push(relaxCard)

             }
            })
            return cognitiveImagesArrayWithTitleCards
             }



    

   // addTitleCardsToCognitiveImagesArray(updatedArrayChecker);



    const combinedCognitiveImagesArray = decreaseFullFileNameArray.concat(lookNegativeFullFileNameArray).concat(lookNeutralImagesFullFileNameArray);
    const randomizedPracticeCombinedCognitiveImagesArray = combinedCognitiveImagesArray.sort(()=> 0.5 - Math.random())
    const randomizedPracticeCombinedCognitiveImagesArrayWithTitleCards = addTitleCardsToCognitiveImagesArray(randomizedPracticeCombinedCognitiveImagesArray);
    export const finalRandomizedPracticeCombinedCognitiveImagesArray = randomizedPracticeCombinedCognitiveImagesArrayWithTitleCards.map(x => './' + x.slice(8));
    
    //const cognitiveScoringArray = createScoringArrayFromfinalRandomizedCombinedCognitiveImagesArray(finalRandomizedCombinedCognitiveImagesArray)
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

    
    let updatedArrayChecker = randomizedPracticeCombinedCognitiveImagesArray ;    
    //let updatedArrayChecker = finalRandomizedCombinedCognitiveImagesArray.map(e => e.slice(32,40));


    export {updatedArrayChecker, randomizedPracticeCombinedCognitiveImagesArray}


