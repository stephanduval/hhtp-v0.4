import '../../App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newCRAViewState, setRenderState, newCRAUserResponseArray, setCSVDownloadState, newCSVScoringArray } from './actions';
import { navigationPhaseTypes } from '../renderSwitch/renderSwitch';
import { Button, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, makeStyles } from '@material-ui/core';
import CRCSVDownloadDiv from '../CRCSVDownloadDiv';
import { updatedArrayChecker, titleCardImagesFullFileNameArray, randomizedCombinedCognitiveImagesArray } from '../cognitive-Reappraisal-Array/create-cognitive-Reappraisal-Array';
import { scoringArray } from '../../functions';
import { RefreshPageButton } from '../RefreshPageButton';
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

const newCSVScoringDispatch = (dispatch) => ({
    newCSVScoringArray: (scoringArray) => dispatch(newCSVScoringArray(scoringArray)),
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
    
    const [defaultRadioValue, setDefaultRadioValue] = useState("No Answer");


    const classes = useStyles();
    const CRAViewState = useSelector(state => state.craNavigationReducer.CRAViewState);
    const { setRenderState } = setRenderStateDispatch(useDispatch());
    const { newCRAViewState } = newCRAViewStateDispatch(useDispatch());
    const { newCRAUserResponseArray } = setCRAUserResponseArrayDispatch(useDispatch());
    const { setCSVDownloadState } = cSVDownloadStateDispatch(useDispatch());
    //const { newCSVScoringArray } = newCSVScoringDispatch(useDispatch());

    const a = useSelector(state => state.craNavigationReducer);
    const CRImageArrayFromRedux = useSelector(state => state.cRImageArrayReducer.cRImageArray);
    const userResponseArrayFromRedux = useSelector(state => state.craNavigationReducer.userResponseArray);
    const CSVDownloadStateRedux = useSelector(state => state.craNavigationReducer.CSVDownloaded);

    const [category, setCategory] = useState();
    let howNegative = "no answer"  
    /*
     my first time using the useState hook.  setCategory is the setter and the '' is the
     initial value. category is the variable

     */
    const userResponseArray = userResponseArrayFromRedux;

    const addToUserResponseArray = (value) => {
        if (value == null) {
            userResponseArray.push(category);
        }
        else {
        userResponseArray.push(value);
        }
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

        if (CRImageArrayFromRedux[CRAViewState].includes("hownegative")) {
      


        switch (event.keyCode) {
            case 49:
                document.getElementById("radioButton1").checked = "true";howNegative="1";
                break;
            case 50:
                document.getElementById("radioButton2").checked = "true";howNegative="2";
                break;
            case 51:
                document.getElementById("radioButton3").checked = "true";howNegative="3";
                break;
            case 52:
                document.getElementById("radioButton4").checked = "true";howNegative="4";
                break;
            case 53:
                document.getElementById("radioButton5").checked = "true";howNegative="5";
                break;
            case 54:
                document.getElementById("radioButton6").checked = "true";howNegative="6";
                break;
            case 55:
                document.getElementById("radioButton7").checked = "true";howNegative="7";
                break;
            case 56:
                document.getElementById("radioButton8").checked = "true";howNegative="8";
                break;
            case 57:
                document.getElementById("radioButton9").checked = "true";howNegative="9";
                break;
            case 97:
                document.getElementById("radioButton1").checked = "true";howNegative="1";
                break;
            case 98:
                document.getElementById("radioButton2").checked = "true";howNegative="2";
                break;
            case 99:
                document.getElementById("radioButton3").checked = "true";howNegative="3";
                break;
            case 100:
                document.getElementById("radioButton4").checked = "true";howNegative="4";
                break;
            case 101:
                document.getElementById("radioButton5").checked = "true";howNegative="5";
                break;
            case 102:
                document.getElementById("radioButton6").checked = "true";howNegative="6";
                break;
            case 103:
                document.getElementById("radioButton7").checked = "true";howNegative="7";
                break;
            case 104:
                document.getElementById("radioButton8").checked = "true";howNegative="8";
                break;
            case 105:
                document.getElementById("radioButton9").checked = "true";howNegative="9";
                break;
                    
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

    const listItemsFunction = (arrayParam) => arrayParam.map((element => <p><li>{element}</li></p>));
    
    // const resetHowNegativeButtons = () => {
    //     document.querySelectorAll('navigationButtonSpace').forEach(el => el.MaterialRadio.checkToggleState());
    // }


    //     const [defaultRadioValue, setDefaultRadioValue] = useState(5);


     const stopRenderSubmitButtonIfTestIsFinished = (finishedMessage) => {
        if (CRAViewState == CRImageArrayFromRedux.length) {
            return (
                <div className="navigationButtonSpace">         
                   
                    {finishedMessage}
                    {CSVDownloadStateRedux}
                    {/* CREATE A CONDITION THAT THE RETURN BUTTON ONLY APPEARS AFTER THE CSV is DOWNLOADED */}
                    <CRCSVDownloadDiv/>

                </div>
                    )
            
        
                
        } else if (CRImageArrayFromRedux[CRAViewState].includes("hownegative")) {
            return (
                <div className="navigationButtonSpace">
                                {renderCognitiveReappraisalView(1)}
                
                    
                        <form class="formFlex">
                            <label class="radio-inline">
                                <input class="radioButton" type="radio" name="howNegative" value="1" id="radioButton1"onClick={()=>{howNegative="1";console.log("clicked 1",howNegative)}}/>1
                            </label>
                            <label class="radio-inline">
                                <input class="radioButton" type="radio" name="howNegative" value="2" id="radioButton2" onClick={()=>{howNegative="2";console.log("clicked 2",howNegative)}}/>2
                            </label>
                            <label class="radio-inline">
                                <input class="radioButton" type="radio" name="howNegative" value="3" id="radioButton3" onClick={()=>{howNegative="3";console.log("clicked 2",howNegative)}}/>3
                            </label>
                            <label class="radio-inline">                      
                                <input class="radioButton" type="radio" name="howNegative" value="4" id="radioButton4" onClick={()=>{howNegative="4";console.log("clicked 4",howNegative)}}/>4
                            </label>
                            <label class="radio-inline">
                                <input class="radioButton" type="radio" name="howNegative" value="5" id="radioButton5" onClick={()=>{howNegative="5";console.log("clicked 5",howNegative)}}/>5
                            </label>
                            <label class="radio-inline">
                                <input class="radioButton" type="radio" name="howNegative" value="6" id="radioButton6" onClick={()=>{howNegative="6";console.log("clicked 6",howNegative)}}/>6
                            </label>
                            <label class="radio-inline">
                                <input class="radioButton" type="radio" name="howNegative" value="7" id="radioButton7" onClick={()=>{howNegative="7";console.log("clicked 7",howNegative)}}/>7
                            </label>
                            <label class="radio-inline">
                                <input class="radioButton" type="radio" name="howNegative" value="8" id="radioButton8" onClick={()=>{howNegative="8";console.log("clicked 8",howNegative)}}/>8
                            </label>
                            <label class="radio-inline">
                                <input class="radioButton" type="radio" name="howNegative" value="9" id="radioButton9" onClick={()=>{howNegative="9";console.log("clicked 9",howNegative)}}/>9
                            </label>
                                

                        </form>

                  
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

            if (!x.includes("titlecards") && x.length > 3) {
                newArray.push(x);
            };

           
        })
            return newArray
        
        }
     

        
      
        let ScoringArray = createScoringArrayFromfinalRandomizedCombinedCognitiveImagesArray(CRImageArrayFromRedux)
      

        const newCSVScoringDispatch = (dispatch) => ({
            newCSVScoringArray: (scoringArray) => dispatch(newCSVScoringArray(scoringArray)),
                });

            newCSVScoringArray(ScoringArray);

        let ScoringArrayFromRedux = useSelector(state => state.cRImageArrayReducer.scoringArray);


        useEffect(() => {
            if (CRAViewState == CRImageArrayFromRedux.length) {
                
            } else if (CRImageArrayFromRedux[CRAViewState].slice(-8,-4) == "look" || CRImageArrayFromRedux[CRAViewState].slice(-12,-4) == "decrease") {
                console.log("decrease or look",CRImageArrayFromRedux[CRAViewState]);
                const timer = setTimeout(() => {
                    newCRAViewState(CRAViewState)
                  }, 2000);

            } else if (!CRImageArrayFromRedux[CRAViewState].includes("hownegative")) { 
                console.log("Navigation Timer ON",CRImageArrayFromRedux[CRAViewState]);
                console.log(typeof CRImageArrayFromRedux[CRAViewState]);
            const timer = setTimeout(() => {
              newCRAViewState(CRAViewState)
            }, 7000);
            // add conditionals:  2000ms for the "Look" and "decrease" sections
        } else if (CRImageArrayFromRedux[CRAViewState].includes("hownegative")) { 
            console.log("Navigation Timer ON",CRImageArrayFromRedux[CRAViewState]);
        const timer = setTimeout(() => {
            newCRAViewState(CRAViewState);
            checkIfTestIsComplete();
            addToUserResponseArray(howNegative);
            newCRAUserResponseArray(userResponseArray)
            ;console.log("State",CRAViewState);
            console.log("RADIO BUTTON SAYS", howNegative);
            setCategory(howNegative);
            console.log("Radio Button One Status",howNegative);

        }, 7000);
        // add conditionals:  2000ms for the "Look" and "decrease" sections
    }
          }, [CRAViewState]);

          
    console.log("current state", CRImageArrayFromRedux[CRAViewState],"Current CRI Index",CRAViewState);



    return (
        <div className="container">
        <div>{stopRenderSubmitButtonIfTestIsFinished('You\'re All Done!  Please do nothing.  Notify the exam Supervisor and have a nice day!')}</div>          

        <div className="buttonSpace">

        
        <div>{listItemsFunction(CRImageArrayFromRedux)}</div>
        
        <div>{listItemsFunction(updatedArrayChecker)}</div>

        
        <div>{listItemsFunction(ScoringArray)}</div>
        <div>{listItemsFunction(userResponseArray)}</div>
        <div>{listItemsFunction(randomizedCombinedCognitiveImagesArray)}</div>

        
        
         <div> {listItems} </div> 

        
        </div>
        </div>

        )
};

export default CognitiveReappraisalExamNavigation;
export { scoringArray }