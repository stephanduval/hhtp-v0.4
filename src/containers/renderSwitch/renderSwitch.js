
import ExamNavigation from '../ExamNavigation';
import Photospace from '../PhotoSpace';
import Settings from '../nBackSettings';
import ResultChecker from '../ResultChecker';
import CSVDownloadDiv from '../CSVDownloadDiv';
import StartTestButton from '../StartNBackTestButton';
import CognitiveReappraisalArray from '../cognitive-Reappraisal-Array';
import StartCognitiveReappraisalTestButton from '../StartCognitiveReappraisalTestButton';
import CognitiveReappraisalArrayChecker from '../cognitive-Reappraisal-Array-Checker';
import CognitiveReappraisalExamNavigation from '../CognitiveReappraisalNavigation';
import SettingsButton from '../settingsButton';
import IntroHeader from '../introductionHeader';
import MainPage from '../ReturntoMainPageButton';
import './renderSwitch.css';



export const navigationPhaseTypes = {  
    introductionPage: "Has settings, instructions and a start test button",
    nBackPageTutorial: "nBackTutorialPage, May not be implemented in production version",
    nBackTest: "The actual nBack Test, recordning data",
    cognitiveReappraisalTest: "Cognitive Reappraisal Test",
    settings: "The Settings Page"
  }
  

  

  export const renderState = (navigationPhaseTypesExpression) => {
      
    switch (navigationPhaseTypesExpression) {
        case navigationPhaseTypes.introductionPage:
            console.log('Introduction Page')
            return <div><IntroHeader/>
 
                        <div className="center">
                        <StartTestButton/>
                        <SettingsButton/>
                        <StartCognitiveReappraisalTestButton/>

                         </div>
                    </div>
                    
            break;
        case navigationPhaseTypes.nBackTest:
            console.log('navigationPhaseTypes.nBackTest');
            return <div>
                        <Photospace /> 
                        <ExamNavigation />
                        <ResultChecker />

                    </div>
                 
        case navigationPhaseTypes.nBackComplete:
            console.log('case navigationPhaseTypes.nBackComplete');
            
            return <div>
                        <CSVDownloadDiv/>
                        <ResultChecker />
                    </div>
    
        case navigationPhaseTypes.cognitiveReappraisalTest:
            console.log('case navigationPhaseTypes.cognitiveReappraisalTest');

            return <div>
                        <CognitiveReappraisalArray/>
                        <CognitiveReappraisalExamNavigation/>
                        <CognitiveReappraisalArrayChecker/>
                    </div>
            break;

            case navigationPhaseTypes.settings:
                console.log('case navigationPhaseTypes.settings');
    
                return <div>
                            <Settings/>
                            <MainPage/>
                        </div>
                break;

        default:
            console.log('default');
            return <div><IntroHeader/>
 
                        <div className="center">
                        <StartTestButton/>
                        <SettingsButton/>
                        <StartCognitiveReappraisalTestButton/>

                         </div>
            </div>;            
            



            
    }
        };