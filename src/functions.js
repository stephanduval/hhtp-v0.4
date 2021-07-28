

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
    
        if (numberOfPhotos < nBackDegree+2*numberOfPredictivePhotos){
            return nBackDegree+2*numberOfPredictivePhotos;
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
  if (numberOfPredictivePhotos > numberOfPhotos){
    return numberOfPhotos;  
  } 
  if (numberOfPredictivePhotos > ReduxPredictiveFileNameArrayLength){
    return ReduxPredictiveFileNameArrayLength;
  }


  else {
    return numberOfPredictivePhotos;      
  }
}

export const validatesetNumberofnBackMatches = (NumberofnBackMatches, numberOfPhotos) => {
  if (NumberofnBackMatches < 0){
      return 0;
  }
  if (NumberofnBackMatches > numberOfPhotos/5){
      return Math.ceil(numberOfPhotos/5);
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