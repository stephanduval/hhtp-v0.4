import React from 'react';
import { useSelector } from 'react-redux';
import { titleCardImagesFullFileNameArray, finalRandomizedCombinedCognitiveImagesArray} from '../cognitive-Reappraisal-Array/create-cognitive-Reappraisal-Array'
import { blue } from '@material-ui/core/colors';


     



const CognitivePhotospace = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

    //-------------------- Functions Fetch and Store Data for the PhotoSpace:

    //const imageFileNameArray = useSelector(state => state.imageArrayReducer.imageFileNameArray);
    const newCRAViewState = useSelector(state => state.craNavigationReducer.CRAViewState);
    //const finalFileNameArray = useSelector(state => state.imageArrayReducer.finalFileNameArray);
    const CRImageArrayFromRedux = useSelector(state => state.cRImageArrayReducer.cRImageArray);
    const CRAViewState = useSelector(state => state.craNavigationReducer.CRAViewState);
    const userResponseArrayFromRedux = useSelector(state => state.craNavigationReducer.userResponseArray);

    
   // console.log("the array baby",practiceImageArrayFromRedux,NBackState);

    //-------------------- END of functions Fetch and Store Data for the PhotoSpace

    /*  troubleshooting the image not showing up:

<img src={'./images/1026.jpg'} alt='Current nBack'/>
<img src={'./images/Sad face 1.jpg'} alt='Current nBack'/>
<img src={'./images/cognitive-reappraisal/decrease/Sad face 1.jpg'} alt='Current nBack'/>

    */


// console.log("newCRAViewState",newCRAViewState);


function setPhotoBorderColour(arrayParam) {
    let borderColour = 'black'
    let originalArray = [...arrayParam];
    let cognitiveImagesArrayWithTitleCards = [];
    //cognitiveImagesArrayWithTitleCards.fill("empty");
    let decreaseString = "decrease";
    let lookString = "look"
    let newIndex = 0;
    let decreaseCard = titleCardImagesFullFileNameArray[0];
    let relaxCard = titleCardImagesFullFileNameArray[2];
    let lookCard = titleCardImagesFullFileNameArray[1];
    
         if (arrayParam[CRAViewState].includes(decreaseString)) {
            borderColour = 'green'
            //arrayParam.splice(index,0,aa.index,)

         
         } else if (arrayParam[CRAViewState].includes(lookString)){
            borderColour = 'blue'

         } else {
            borderColour = 'black'
         }
        
        return borderColour
         }

               
const stopRenderSubmitButtonIfTestIsFinished = (finishedMessage) => {
    if (CRAViewState == CRImageArrayFromRedux.length) {
        return (
            <div>
               
                {finishedMessage}
                </div>
                )
        
                
            
    } else {
return (
<img src={process.env.PUBLIC_URL + CRImageArrayFromRedux[newCRAViewState]} alt='Current nBack' style={{borderColor: setPhotoBorderColour(finalRandomizedCombinedCognitiveImagesArray)}}/>
)
    }
}

    return (
        
<div className="photospace">

{stopRenderSubmitButtonIfTestIsFinished('END OF EXAM')}


</div>
    )
}

export default CognitivePhotospace;

