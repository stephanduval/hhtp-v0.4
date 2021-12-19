import '../../App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newCRAViewState, setRenderState, newCRAUserResponseArray, setCSVDownloadState } from './actions';
import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';
import { Button, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, makeStyles } from '@material-ui/core';
import CRCSVDownloadDiv from '../CRCSVDownloadDiv';
import { updatedArrayChecker } from '../cognitive-Reappraisal-Array/create-cognitive-Reappraisal-Array';
//import { updatedArrayChecker } from '../cognitive-Reappraisal-Array/create-cognitive-Reappraisal-Array';
   
const renderViewDispatch = (dispatch) => ({
    setRenderState: (nameState) => dispatch(setRenderState(nameState)),
});

//
const newCRAViewStateDispatch = (dispatch) => ({
    newCRAViewState: (photoState) => dispatch(newCRAViewState(photoState)),
});

const setRenderStateDispatch = (dispatch) => ({
    setRenderState: (photoState) => dispatch(setRenderState(photoState)),
});

const setCRAUserResponseArrayDispatch = (dispatch) => ({
    newCRAUserResponseArray: (array) => dispatch(newCRAUserResponseArray(array)),
});


const cSVDownloadStateDispatch = (dispatch) => ({
    setCSVDownloadState: (aboolean) => dispatch(setCSVDownloadState(aboolean)),
});

const useStyles = makeStyles ({
    field: {
        marginTop: 20,
        marginBotton: 20,
        display: 'block'
    }
})


const stateOfCognitiveReappraisal = 0

export const renderCognitiveReappraisalView = (stateOfCognitiveReappraisal) => {
    switch (stateOfCognitiveReappraisal) {
        case 1:
            return <div>How Negative Do You Feel?</div>
            break;
        case undefined:
            break;
    }

}


const CognitiveReappraisalExamNavigation = () => {


    const classes = useStyles();
    const CRAViewState = useSelector(state => state.craNavigationReducer.CRAViewState);
    const { setRenderState } = setRenderStateDispatch(useDispatch());
    const { newCRAViewState } = newCRAViewStateDispatch(useDispatch());
    const { newCRAUserResponseArray } = setCRAUserResponseArrayDispatch(useDispatch());
    const { setCSVDownloadState } = cSVDownloadStateDispatch(useDispatch());

    const a = useSelector(state => state.craNavigationReducer);
    const CRImageArrayFromRedux = useSelector(state => state.cRImageArrayReducer.cRImageArray);
    const userResponseArrayFromRedux = useSelector(state => state.craNavigationReducer.userResponseArray);
    const CSVDownloadStateRedux = useSelector(state => state.craNavigationReducer.CSVDownloaded);

    const [category, setCategory] = useState('5')  
    /*
     my first time using the useState hook.  setCategory is the setter and the '' is the
     initial value. category is the variable

     */
    const userResponseArray = userResponseArrayFromRedux;

    const addToUserResponseArray = (value) => {
        userResponseArray.push(value);
    }




    const checkIfTestIsComplete = () => {
        if (CRAViewState == CRImageArrayFromRedux.length) {
            setRenderState(navigationPhaseTypes.introductionPage)
        }
    }


    const keyStrokeListener = (event) => {
        /*
        *  Listens for the keystoke and updates the NBackState
        * 
        */

        if (!CRImageArrayFromRedux[CRAViewState].includes("titlecards")) {
      


        switch (event.keyCode) {
            case 49:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("1");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 50:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("2");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 51:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("3");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState)
            case 52:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("4");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 53:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("5");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 54:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("6");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 55:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("7");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 56:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("8");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 57:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("9");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 97:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("1");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 98:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("2");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 99:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("3");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState)
            case 100:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("4");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 101:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("5");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 102:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("6");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 103:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("7");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 104:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("8");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
            case 105:
                newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray("9");newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState);
                    
    }
};

}

    React.useEffect(() => {
    document.addEventListener('keyup', keyStrokeListener);
    // console.log("RAN useEffect()");
    
    return function cleanup() {
        document.removeEventListener('keyup', keyStrokeListener);
    };
     });



     
    const ReturnToMainPageButton = () => {  // this destructing allows us to use onInputChange instead of props.onInputChange

        //-------------------- Functions Fetch and Store Data for the setRenderState:
    
        const { setRenderState } = renderViewDispatch(useDispatch());  
    
        //-------------------- END of functions Fetch and Store Data for the setRenderState
        if (CSVDownloadStateRedux) {
        return (//
            
    <div className="settings">
    
    
    <Button color ="tertiary" variant="contained" stringvalue={"Start Cognitive Reappraisal Test"} onClick={()=>{setRenderState(navigationPhaseTypes.introductionPage);console.log("clicked  cognitive reappraisal test start button")}}>Back
            </Button>
    
            
            
    </div>
        )
        }else{
            return("Have the proctoc download the CSV")
        }
       
    }
    

    
    // const ReturnToMainPageButton = () => {
        
    //         console.log('ReturnToMainPageButton Ran TRUE')
    //         //return <ReturnToMainPageButton/>
    //        // return <ReturnToMainPageButton/>
    //     }else {
    //         console.log('ReturnToMainPageButton Ran FALSE')
    //         return <button>Login</button>;
    //     }
    // }
 

    const listItems = userResponseArray.map((number => <p><li>{number}</li></p>));
     console.log('CSVDownloadStateRedux',CSVDownloadStateRedux)

    const listItemsFunction = (arrayParam) => arrayParam.map((element => <p><li>{element}</li></p>));
    



     const stopRenderSubmitButtonIfTestIsFinished = (finishedMessage) => {
        if (CRAViewState == CRImageArrayFromRedux.length) {
            return (
                <div className="navigationButtonSpace">         
                   
                    {finishedMessage}
                    {CSVDownloadStateRedux}
                    {/* CREATE A CONDITION THAT THE RETURN BUTTON ONLY APPEARS AFTER THE CSV is DOWNLOADED */}
                    <CRCSVDownloadDiv/>
                    {ReturnToMainPageButton()}

                </div>
                    )
            
        
                
        } else if (!CRImageArrayFromRedux[CRAViewState].includes("titlecards")) {
            return (
                <div className="navigationButtonSpace">
                                {renderCognitiveReappraisalView(1)}
                
                   <FormControl className="navigationButtonSpace" component="fieldset" container justify = "center">
                       <FormLabel component="legend"></FormLabel>
                            <RadioGroup
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            /*  
                            Take from this tutorial:
                            https://www.youtube.com/watch?v=TtJ3eCLYoRQ
                            */
                            row
                            aria-label="Feeling"
                            defaultValue="5" 
                            name="radio-buttons-group"
                            >
                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                <FormControlLabel value="5" control={<Radio />} label="5" />
                                <FormControlLabel value="6" control={<Radio />} label="6" />
                                <FormControlLabel value="7" control={<Radio />} label="7" />
                                <FormControlLabel value="8" control={<Radio />} label="8" />
                                <FormControlLabel value="9" control={<Radio />} label="9" />
                                </RadioGroup>
                                
        
                                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="contained" onClick={()=>{newCRAViewState(CRAViewState);checkIfTestIsComplete();addToUserResponseArray(category);newCRAUserResponseArray(userResponseArray);console.log("State",CRAViewState)}}>
                                Submit Answer 
                                </Button>
                
                   </FormControl>
                   
                   <div>
                   </div>
                   </div>
            )
          
        } else {
          
            const switchPhotosOnInterval = () => {

                newCRAViewState(CRAViewState)

            }

            //setTimeout(switchPhotosOnInterval(){},3000);
        
            return (
                
            


                <div className="navigationButtonSpace">
                {/* <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="contained" onClick={()=>{newCRAViewState(CRAViewState);checkIfTestIsComplete();console.log("State",CRAViewState)}}>
                                Next Step 
                                </Button> */}
                        </div>)
        }
    
    }

    


    function createScoringArrayFromfinalRandomizedCombinedCognitiveImagesArray (arrayParam) {
        let newArray = [];
        let originalArray = [...arrayParam];
        originalArray.forEach((x,index) => {

            if (!x.includes("titlecards")) {
                newArray.push(x);
            };

           
        })
            return newArray
        
        }
     

        
      
        let ScoringArray = createScoringArrayFromfinalRandomizedCombinedCognitiveImagesArray(CRImageArrayFromRedux)
      


        useEffect(() => {
            if (CRImageArrayFromRedux[CRAViewState].includes("titlecards")) { 
            const timer = setTimeout(() => {
              console.log('Advancing Card After 7 Seconds')
              newCRAViewState(CRAViewState)
            }, 7000);
            
        }
          }, [CRAViewState]);

    return (
        <div className="container">
        <div>{stopRenderSubmitButtonIfTestIsFinished('You\'re All Done!  Take a Hike!')}</div>          
{/* 
        <div className="buttonSpace">

        
        <div>{listItemsFunction(CRImageArrayFromRedux)}</div>
        
        <div>{listItemsFunction(updatedArrayChecker)}</div>

        
        <div>{listItemsFunction(ScoringArray)}</div>
        <div>{listItemsFunction(userResponseArray)}</div>
         <div>  State: {CRAViewState}  User Response Array: {listItems} </div> 

        
        </div> */}
        </div>

        )
};

export default CognitiveReappraisalExamNavigation;