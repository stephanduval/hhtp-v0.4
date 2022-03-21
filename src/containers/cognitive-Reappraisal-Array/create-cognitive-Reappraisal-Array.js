import { filesToPhotosObject } from "../../functions";



  
    const decreaseImages = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/decrease/', false, /\.(png|jpe?g|svg)$/));
    const DecreaseImageFileNameArray = Object.keys(decreaseImages);
    const decreaseFullFileNameArray = DecreaseImageFileNameArray.map(e => './public/images/cognitive-reappraisal/decrease/' + e)
    const randomizedDecreaseFileNameArray = decreaseFullFileNameArray.sort(()=> 0.5 - Math.random());

    const lookNegativeImages = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/look-negative/', false, /\.(png|jpe?g|svg)$/));
    const lookNegativeImagesFileNameArray = Object.keys(lookNegativeImages);
    const lookNegativeFullFileNameArray = lookNegativeImagesFileNameArray.map(e => './public/images/cognitive-reappraisal/look-negative/' + e)
    const randomizedLookNegativeFileNameArray = lookNegativeFullFileNameArray.sort(()=> 0.5 - Math.random());

    const lookNeutralImages = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/look-neutral/', false, /\.(png|jpe?g|svg)$/));
    const lookNeutralImagesFileNameArray = Object.keys(lookNeutralImages);
    const lookNeutralImagesFullFileNameArray = lookNeutralImagesFileNameArray.map(e => './public/images/cognitive-reappraisal/look-neutral/' + e)
    const randomizedlookNeutralFileNameArray = lookNeutralImagesFullFileNameArray.sort(()=> 0.5 - Math.random());
    
    const titleCardImages = filesToPhotosObject(require.context('./../../../public/images/cognitive-reappraisal/titlecards/', false, /\.(png|jpe?g|svg)$/));
    const titleCardImagesFileNameArray = Object.keys(titleCardImages);
    export const titleCardImagesFullFileNameArray = titleCardImagesFileNameArray.map(e => './public/images/cognitive-reappraisal/titlecards/' + e)

    

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

      //Shuffle an array into random odd numbered places in another array

      const shuffleArrayAintoArrayB = (arrayA,arrayB) => {

        let blockedArray = [];
        
        while (blockedArray.length < arrayA.length) {
          let randomNumber = Math.floor(Math.random() * arrayB.length);
          let randomOddNumber = randomNumber + (randomNumber%2 == 0 ? 1 : 0);
          if (!(blockedArray.includes(randomOddNumber))) {
            blockedArray.push(randomOddNumber);
          console.log("blockedArray",blockedArray);
          }
        }
        blockedArray.forEach((element, index) => {
          arrayB.splice(element,0,arrayA[index]); 

        })
        return arrayB;
      }




        // const checkIfUnique = (arrayA) => {
        //   let randomNumber = Math.floor(Math.random() * arrayB.length);
        //   let randomOddNumber = randomNumber + (randomNumber%2 == 0 ? 1 : 0);

        //   if (!(arrayOfOddNumbers.includes(randomOddNumber))) {
        //     arrayOfOddNumbers.push(randomOddNumber)
        //     console.log("Check if Unique element is: ",arrayA);   
        //     arrayB.splice(randomOddNumber,0,(arrayA.shift()));  
             
        //     } else {
        //       console.log("ran CheckifUnique Recursively")
        //         checkIfUnique(arrayA);
        //     }
        // } 
        // let arrayOfOddNumbers = [];
        // arrayA.forEach (element => {
        //   console.log("Initial element is: ",element)    
        //   while (arrayOfOddNumbers.length < arrayA.length) {
        //     checkIfUnique(arrayA);

        // }
          
        //  // arrayB.splice(randomOddNumber, 0, element)
        // });
        // console.log("ArrayB",arrayB)
        // console.log("arrayA",arrayA);
        // console.log("arrayOfOddNumbers",arrayOfOddNumbers)
        // return arrayB;
          // }
    /*
 while (arrayFinished = false) {
            
            let randomOddNumber = Math.floor(Math.random() * arrayB.length);
            randomOddNumber +=(randomOddNumber%2 == 0 ? 1 : 0);
            console.log("randomOddNumber",randomOddNumber);
            arrayOfOddNumbers.push(randomOddNumber);
            if (!(arrayOfOddNumbers.includes(randomOddNumber))) {
              { 
            arrayB.splice(randomOddNumber,0,element);
          } else {
            console.log("skipping",randomOddNumber);
          }
          }
          
        } 
    */

   // addTitleCardsToCognitiveImagesArray(updatedArrayChecker);

      


    const combinedNegAndNeutralCognitiveImagesArray = randomizedLookNegativeFileNameArray.concat(randomizedlookNeutralFileNameArray);
    const randomizedNegAndNeutralCombinedCognitiveImagesArray = combinedNegAndNeutralCognitiveImagesArray.sort(()=> 0.5 - Math.random())
    const randomizedNegAndNeutralAndDecreaseCombinedCognitiveImagesArray = shuffleArrayAintoArrayB(randomizedDecreaseFileNameArray,randomizedNegAndNeutralCombinedCognitiveImagesArray);
    
  
    const randomizedCombinedCognitiveImagesArrayWithTitleCards = addTitleCardsToCognitiveImagesArray(randomizedNegAndNeutralAndDecreaseCombinedCognitiveImagesArray);
    export const finalRandomizedCombinedCognitiveImagesArray = randomizedCombinedCognitiveImagesArrayWithTitleCards.map(x => './' + x.slice(8));
    
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

    
    let updatedArrayChecker = finalRandomizedCombinedCognitiveImagesArray ;    
    //let updatedArrayChecker = finalRandomizedCombinedCognitiveImagesArray.map(e => e.slice(32,40));


    export {updatedArrayChecker, randomizedNegAndNeutralAndDecreaseCombinedCognitiveImagesArray}


