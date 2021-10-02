
import ExamNavigation from '../ExamNavigation';
import Photospace from '../PhotoSpace';
import Settings from '../nBackSettings';
import ResultChecker from '../ResultChecker';
import CSVDownloadDiv from '../CSVDownloadDiv';
import StartTestButton from '../StartTestButton';
import CognitiveReappraisalArray from '../cognitive-Reappraisal-Array';
import StartCognitiveReappraisalTestButton from '../StartCognitiveReappraisalTestButton';
import CognitiveReappraisalArrayChecker from '../cognitive-Reappraisal-Array-Checker';
import CognitiveReappraisalExamNavigation from '../CognitiveReappraisalNavigation';



export const navigationPhaseTypes = {  
    introductionPage: "Has settings, instructions and a start test button",
    nBackPageTutorial: "nBackTutorialPage, May not be implemented in production version",
    nBackTest: "The actual nBack Test, recordning data",
    cognitiveReappraisalTest: "Cognitive Reappraisal Test"
  }
  


  export const renderState = (navigationPhaseTypesExpression) => {
      
    switch (navigationPhaseTypesExpression) {
        case navigationPhaseTypes.introductionPage:
            console.log('Introduction Page')
            return <div>
            <Settings />
                        <StartTestButton/>
                        <StartCognitiveReappraisalTestButton/>
                    </div>
                    
            break;
        case navigationPhaseTypes.nBackTest:
            console.log('navigationPhaseTypes.nBackTest');
            return <div>
                        <Photospace /> 
                        <ExamNavigation />
                    </div>
                 
        case navigationPhaseTypes.nBackComplete:
            console.log('case navigationPhaseTypes.nBackComplete');
            
            return <div>
                        <CSVDownloadDiv/>
                        <ResultChecker />
                    </div>
    
        case navigationPhaseTypes.cognitiveReappraisalTest:
            console.log('case navigationPhaseTypes.cog');

            return <div>
                        <CognitiveReappraisalArray/>
                        <CognitiveReappraisalExamNavigation/>
                        <CognitiveReappraisalArrayChecker/>
                    </div>
            break;

        default:
            console.log('default');
            return <div><Settings />
            <StartTestButton/>
            <StartCognitiveReappraisalTestButton/>
            </div>;            
            
    }
        };