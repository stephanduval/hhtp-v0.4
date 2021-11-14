
import ExamNavigation from '../ExamNavigation';
import Photospace from '../PhotoSpace';
import Settings from '../nBackSettings';
import ResultChecker from '../ResultChecker';
import CSVDownloadDiv from '../CSVDownloadDiv';
import StartTestButton from '../StartNBackTestButton';
import CognitiveReappraisalArray from '../Cognitive-Reappraisal-Array';
import StartCognitiveReappraisalTestButton from '../StartCognitiveReappraisalTestButton';
import SettingsButton from '../settingsButton';
import IntroHeader from '../introductionHeader';
import ReturntoMainPageButton from '../ReturntoMainPageButton';
import StartPracticeTestButton from '../StartPracticeNBackTestButton';
import PracticeExamNavigation from '../PracticeExamNavigation';
import PracticePhotospace from '../PracticePhotoSpace';
import CognitivePhotospace from '../Cognitive-Reappraisal-PhotoSpace';
import CognitiveReappraisalExamNavigation from '../CognitiveReappraisalNavigation';
import './renderSwitch.css';
import ReturnToMainPageButton from '../ReturntoMainPageButton';



export const navigationPhaseTypes = {  
    introductionPage: "Has settings, instructions and a start test button",
    nBackPageTutorial: "nBackTutorialPage, May not be implemented in production version",
    nBackTest: "The actual nBack Test, recordning data",
    practiceNBackTest: "Practice nBack Test",
    cognitiveReappraisalTest: "Cognitive Reappraisal Test",
    settings: "The Settings Page",
    practiceNBackExamPage: "The NavigationPhasePage",

  }
  

  

  export const renderState = (navigationPhaseTypesExpression) => {
      
    switch (navigationPhaseTypesExpression) {
        case navigationPhaseTypes.introductionPage:
            // console.log('Introduction Page')
            return <div><IntroHeader/>
            
                        <div className="center">
                        <StartTestButton/>
                        <StartPracticeTestButton/>
                        <SettingsButton/>
                        <StartCognitiveReappraisalTestButton/>

                        </div>
                                </div>
                    
            break;
        case navigationPhaseTypes.nBackTest:
            // console.log('navigationPhaseTypes.nBackTest');
            return <div>
                        <Photospace /> 
                        <ExamNavigation />
                        <ResultChecker />

                    </div>
                 
        case navigationPhaseTypes.nBackComplete:
            // console.log('case navigationPhaseTypes.nBackComplete');
            
            return <div>
                        <CSVDownloadDiv/>
                        <ResultChecker />
                    </div>
    
        case navigationPhaseTypes.cognitiveReappraisalTest:
            // console.log('case navigationPhaseTypes.cognitiveReappraisalTest');
            
            return <div>
                        <CognitivePhotospace/>
                        <CognitiveReappraisalArray className="photospace2" />
                        {/* <CognitiveReappraisalArrayChecker/> */}
                        <CognitiveReappraisalExamNavigation className="navigationSpace"/>


                    </div>
            break;

            case navigationPhaseTypes.settings:
                // console.log('case navigationPhaseTypes.settings');
    
                return <div>
                            <Settings/>
                            <ReturnToMainPageButton/>
                        </div>
                break;

                case navigationPhaseTypes.practiceNBackTest:
                // console.log('case navigationPhaseTypes.settings');
    
                return <div>
                            <PracticePhotospace/>
                        
                            <PracticeExamNavigation/>
                        </div>
                break;


        default:
            // console.log('default');
            return <div><IntroHeader/>
 
                        <div className="center">
                        <StartTestButton/>
                        <StartPracticeTestButton/>
                        <SettingsButton/>
                        <StartCognitiveReappraisalTestButton/>

                         </div>
            </div>;            
            



            
    }
        };