import React from 'react';
import './imageArray.css';
import { useSelector, useDispatch } from 'react-redux';
import { filesToPhotosObject } from './../../functions.js';


    const images = filesToPhotosObject(require.context('./../../../public/images/FeeliePhotos/', false, /\.(png|jpe?g|svg)$/));
    let files = Object.keys(images);


    const ImageArray = () => {

    /*
    for (const file of files) {
    console.log(file)
    }
    */
    const nBackArray = useSelector(state => state.ImageArrayReducer.nBackArray);


    const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    const numberOfPredictivePhotos = useSelector(state => state.nBackSettingsReducer.numberOfPredictivePhotos);
    const NumberofnBackMatches = useSelector(state => state.nBackSettingsReducer.NumberofnBackMatches);
    const nBackDegree = useSelector(state => state.nBackSettingsReducer.nBackDegree);
    const timerSeconds = useSelector(state => state.nBackSettingsReducer.timerSeconds);
    const imageFileNameArrayLength = useSelector(state => state.photoSpaceReducer.imageFileNameArrayLength);
    /* fs.readdirSync takes a folder as a parameter and
    returns an array consisting of filenames.
    */
    /* Shuffle the array function (randomizes it) by using the array.sort(compareFunction)
    to create a random relationship between each value as the sort() fucntion crawls across
    the array
    */
    const randomizedImageArray = files.sort(()=> 0.5 - Math.random())
    // Get sub-array of the selected test photo size
    const slicedRandomizedImageArray = randomizedImageArray.slice((numberOfPhotos) => 0, numberOfPhotos);
    // Create an array of random indexes corresponding to the photo array to select the predictive values

    
    function predictiveSet() {
        var arr = [];
        while(arr.length < numberOfPredictivePhotos){
        var r = Math.floor(Math.random() * (slicedRandomizedImageArray.length - 0 + 1) + 0);
        if(arr.indexOf(r) === -1) arr.push(slicedRandomizedImageArray[r]);
        }
    return arr;
    }

    
    const predictiveSetOfImages = predictiveSet()


    

    function spliceNBacksIntoArray(excluded = []) {
        /*
        *  Function: spliceNBacksIntoArray
    
        *  Purpose: It creates a list of unique random integers and uses that to decide which images
        *  In the array will be duplicated for the purpose of creating the n-back test
        * 
        * It also marks each file name as "predictive or matching" for testing purposes
        * 
        *  Parameters: None
        * 
        *  Returns: A modified array of the image list with the n-back matches inserted
        * 
        */ 
    // Map each index of items that match the predictiveSetOfImages
    predictiveSetOfImages.map(x => excluded.push(slicedRandomizedImageArray.indexOf(x)));
    excluded.sort((a,b)=>a-b);
    console.log(excluded);
    
    // adds values that will protect the predictive set of images 
    excluded.map((element) => excluded.push(element+nBackDegree));
    excluded.sort((a,b)=>a-b);
    console.log(excluded);
    
    let i = 0;
    while (i < NumberofnBackMatches) {
    let num = Math.floor(Math.random() * (numberOfPhotos + 1) + 0);
    
    if (!(excluded.includes(num))
        //&& !(excluded.includes(num+nBackDegree))
        && !(excluded.includes(num-nBackDegree))
            ) 
            {
            //console.log["Match",num];
            excluded.push(num,num-nBackDegree);
            slicedRandomizedImageArray.splice(num+nBackDegree,1,slicedRandomizedImageArray[num] + " MATCH " + num + !(excluded.includes(slicedRandomizedImageArray[num])) );
            }
    
    i++   
        }
    
        let j = 0
        while (j < slicedRandomizedImageArray.length) {
        
        if (predictiveSetOfImages.includes(slicedRandomizedImageArray[j])) 
        //slicedRandomizedImageArray[j])) 
        {
        //    console.log("FLAG");
        slicedRandomizedImageArray[j] = slicedRandomizedImageArray[j] + " predictive";
        }
        j++
        }
    
        excluded.sort((a,b)=>a-b);
        console.log(excluded);
        return slicedRandomizedImageArray;
    }
    console.log("slicedrandomImageArray:",slicedRandomizedImageArray);


    React.useEffect(() => {spliceNBacksIntoArray()});
    
    return (
        <div> <button onClick={spliceNBacksIntoArray()}>ADDs</button>{nBackArray}</div>
            )
}

export default ImageArray