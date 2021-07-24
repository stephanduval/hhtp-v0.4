
export const checkForEmptyinArray = (array) => {
    /*
    *  A test function that takes an array and tests if it has an empty element
    *
    */ 
  
    let arr = [...array].map((_, i) => i);
    let flag = false;
    let n=0
    arr.map(element => {if (array[element] == undefined) {flag = true; console.log(element, n)}else{ console.log("PASS")}n++});
    return flag.toString();
  }
  
  export const showMatchesOnly = (array,matchIndex) => {
  /*
    *  A test function that returns only the matching nback indices of the cards array 
    * 
    */ 
   let nBackValueTest = []; 
   matchIndex.forEach(element => nBackValueTest.push(array[element]));
  
   return nBackValueTest;
  
   };