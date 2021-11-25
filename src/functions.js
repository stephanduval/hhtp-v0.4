
export const filesToPhotosObject = (r) => {
    
    /**
     **  Summary: This function takes a string filename as an argument and returns an object of the files in the folder
     * 
     * @param {string}   var           The relative path to the folder within which we want to check the filenames
     * @return {object} Returns an object with each filename separated
     */ 
     let images = {};
     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
     return images;
       }


  export const validateNumberOfPhotos = (numberOfPhotos, nBackDegree, numberOfPredictivePhotos, imageFileNameArrayLength) => {
        if (numberOfPhotos < 90){
          return 90;
    
        // if (numberOfPhotos < nBackDegree+2*numberOfPredictivePhotos){
        //     return nBackDegree+2*numberOfPredictivePhotos;

        }
        if (numberOfPhotos > imageFileNameArrayLength){
            return imageFileNameArrayLength;
        } 
        else {
          return numberOfPhotos;      
    }
  }

  
export const validateNumberOfPredictivePhotos = (numberOfPredictivePhotos, ReduxPredictiveFileNameArrayLength, numberOfPhotos) => {
  if (numberOfPredictivePhotos < 0){
      return 0;
  }
  if (numberOfPredictivePhotos > numberOfPhotos/5){
    return Math.floor(numberOfPhotos/5);  
  } 
  // if (numberOfPredictivePhotos > ReduxPredictiveFileNameArrayLength){
  //   return ReduxPredictiveFileNameArrayLength;
  // }


  else {
    return numberOfPredictivePhotos;      
  }
}

export const validatesetNumberofnBackMatches = (NumberofnBackMatches, numberOfPhotos) => {
  if (NumberofnBackMatches < 0){
      return 0;
  }
  if (NumberofnBackMatches > 25 && numberOfPhotos < 91){
    return 25;
} 
  // if (NumberofnBackMatches > numberOfPhotos/10){
  //     return Math.floor(numberOfPhotos/10);
  // } 
  if (NumberofnBackMatches > (numberOfPhotos/3)){
    return Math.floor(numberOfPhotos/3);
} 
  else {
    return NumberofnBackMatches;      
}
}

export const validatesetnBackDegree = (nBackDegree) => {
  if (nBackDegree < 0){
      return 0;
  }
  if (nBackDegree > 11){
      return 11;
  } 
  else {
    return nBackDegree;      
}
}


export const validatesetTimerSeconds = (setTimerSeconds) => {        
  if (setTimerSeconds < 0){
      return 0;
  }
  if (setTimerSeconds > 15000){
      return 15000;
  } 
  else {
    return setTimerSeconds;      
}
}

export const randomizeArray = (array) => {array.sort(()=> 0.5 - Math.random())};

export const arrayLength = (array) => array.length;


export const scoringArray = (imageStageTwo,predictiveIndex,nBackIndex) => {
  let scorray = [...imageStageTwo];

  let predictive = [...predictiveIndex];
  let nBack = [...nBackIndex];

  //scorray.map(element=>element+"111");
  //let setStageOne = [...imageSetStageOne];
  let PredictiveIndexValue = 0;
  const iteratePredictiveIndex = () => PredictiveIndexValue++;
  // let PredictiveReduxValue = 0;
  // const iteratePredictiveReduxValue = () => PredictiveReduxValue++;
  predictive.forEach(element => scorray.splice(predictive[iteratePredictiveIndex()],1,"P"))

  let nBackIndexValue = 0;
  const iteratenBackIndex = () => nBackIndexValue++;
  let nBackReduxValue = 0;
  nBack.forEach(element => scorray.splice(nBack[iteratenBackIndex()],1,"N"))

  

  return scorray;
}


// ======= RESULTS CHECKER DATA

export const createArrayOfIndexes = (ReduxFinalFileNameArray) => {

  let arrayOfIndexes = [];

  for (let i = 1; i <= ReduxFinalFileNameArray.length; i++) {
    arrayOfIndexes.push(i);
  }
  return arrayOfIndexes;
}

// ======= RESULTS CHECKER DATA END
