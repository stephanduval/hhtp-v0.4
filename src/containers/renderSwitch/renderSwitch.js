
import ExamNavigation from '../ExamNavigation';
import Photospace from '../PhotoSpace';
import Settings from '../nBackSettings';
import ResultChecker from '../ResultChecker';
import CSVDownloadDiv from '../CSVDownloadDiv';
import StartTestButton from '../StartTestButton';



export const navigationPhaseTypes = {  
    introductionPage: "Has settings, instructions and a start test button",
    nBackPageTutorial: "nBackTutorialPage, May not be implemented in production version",
    nBackTest: "The actual nBack Test, recordning data"
  }
  


  export const renderState = (navigationPhaseTypesExpression) => {
      
    switch (navigationPhaseTypesExpression) {
        case navigationPhaseTypes.introductionPage:
            return <div>
            <Settings />
                        <StartTestButton/>
            </div>;
        case navigationPhaseTypes.nBackTest:
            return <div>
                        <Photospace /> 
                        <ExamNavigation />
                </div>;         
        case navigationPhaseTypes.nBackComplete:
            return <div>
                        <CSVDownloadDiv/>
                        <ResultChecker />
                </div>;
        default:
            return <div><Settings />
            <StartTestButton/>
</div>;            
    }
        };