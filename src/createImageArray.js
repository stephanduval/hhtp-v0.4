// Set path of photo folder here

const testFolder = './images/FeeliePhotos/';

/* Import fs.realpath() which we will use to create an array of file names
 in the image folder
*/

const fs = require('fs');

// Establish the default values of the n-back function

let numberOfPhotos = 126;
let numberOfPredictivePhotos = 12;
let NumberofnBackMatches = 26;
let nBackDegree = 2;
let timerSeconds = 5;


/*  ================================== BEING n-Back Code 
              PLEASE REFACTOR THIS INTO ITS OWN MODULES LATER
=====================================================
              */

/* fs.readdirSync takes a folder as a parameter and
returns an array consisting of filenames.
*/

const testFolder = './images/FeeliePhotos/';
var files = fs.readdirSync(testFolder);

// CONSOLE TESTING
/*
console.log("first item in the array",files[0]);
console.log("second item in the",files[1]);
console.log("all files",files);
*/
// END OF CONSOLE TESTING

/* Shuffle the array function (randomizes it) by using the array.sort(compareFunction)
to create a random relationship between each value as the sort() fucntion crawls across
the array
*/

/* It's the same as this function:
console.log(files.sort(function(){return 0.5 - Math.random()}));
*/
let randomizedImageArray = files.sort(()=> 0.5 - Math.random())

// CONSOLE TESTING
/*
console.log("randomizedImageArray",randomizedImageArray)
*/
// END OF CONSOLE TESTING


// Get sub-array of the selected test photo size

let slicedRandomizedImageArray = randomizedImageArray.slice((numberOfPhotos) => 0, numberOfPhotos);


// CONSOLE TESTING
/*
console.log("slicedRandomizedImageArray",slicedRandomizedImageArray);
console.log("slicedRandomizedImageArray length:",slicedRandomizedImageArray.length);
*/
// END OF CONSOLE TESTING

// Create an array of random indexes corresponding to the photo array to select the predictive values

function predictiveSet() {
  var arr = [];
while(arr.length < numberOfPredictivePhotos){
    var r = Math.floor(Math.random() * (slicedRandomizedImageArray.length - 0 + 1) + 0); // returns a random integer between  array length and 0
    if(arr.indexOf(r) === -1) arr.push(slicedRandomizedImageArray[r]);
    
}
return arr;
}

let predictiveSetOfImages = predictiveSet()

// CONSOLE TESTING
// console.log("predictiveSetOfImages",predictiveSetOfImages);
// console.log("predictiveSetOfImages: ???",predictiveSetOfImages.length);
// END OF CONSOLE TESTING



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
// console.log(excluded);

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
  // console.log(excluded);
}
// console.log(spliceNBacksIntoArray());
// console.log(slicedRandomizedImageArray);

