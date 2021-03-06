import ExamNavigation from "../ExamNavigation";
import Photospace from "../PhotoSpace";
import Settings from "../nBackSettings";
import ResultChecker from "../ResultChecker";
import CSVDownloadDiv from "../CSVDownloadDiv";
import StartTestButton from "../StartNBackTestButton";
import CognitiveReappraisalArray from "../cognitive-Reappraisal-Array";
import StartCognitiveReappraisalTestButton from "../StartCognitiveReappraisalTestButton";
import PracticeCognitiveReappraisalTestButton from "../StartPracticeCognitiveReappraisalTestButton copy";
import SettingsButton from "../settingsButton";
import IntroHeader from "../introductionHeader";
import ReturntoMainPageButton from "../ReturntoMainPageButton";
import StartPracticeTestButton from "../StartPracticeNBackTestButton";
import PracticeExamNavigation from "../PracticeExamNavigation";
import PracticePhotospace from "../PracticePhotoSpace";
import CognitivePhotospace from "../Cognitive-Reappraisal-PhotoSpace";
import CognitiveReappraisalExamNavigation from "../CognitiveReappraisalNavigation";
import "../../App.css";
import ReturnToMainPageButton from "../ReturntoMainPageButton";
import ImageArray from "../n-back-image-array";
import "./renderSwitch.css";


export const navigationPhaseTypes = {
  introductionPage: "Has settings, instructions and a start test button",
  nBackPageTutorial:
    "nBackTutorialPage, May not be implemented in production version",
  nBackTest: "The actual nBack Test, recordning data",
  practiceNBackTest: "Practice nBack Test",
  cognitiveReappraisalTest: "Cognitive Reappraisal Test",
  practiceCognitiveReappraisalTest: "Practice Cognitive Reappraisal Test",
  settings: "The Settings Page",
  practiceNBackExamPage: "The NavigationPhasePage",
};

//

export const renderState = (navigationPhaseTypesExpression) => {
  switch (navigationPhaseTypesExpression) {
    case navigationPhaseTypes.introductionPage:
      // console.log('Introduction Page')
      return (
        <div>
          <IntroHeader />

          <div className="center">
            <StartTestButton />
            <StartPracticeTestButton />
            {/* <SettingsButton/> */}
            <PracticeCognitiveReappraisalTestButton />
            <StartCognitiveReappraisalTestButton />
          </div>
        </div>
      );

      break;
    case navigationPhaseTypes.nBackTest:
      // console.log('navigationPhaseTypes.nBackTest');
      return (
        <div> 
          <div class="nBackTestVisible">
            <ImageArray />
            <Photospace />
            <ExamNavigation />
          </div>
          <ResultChecker />
        </div>
      );

    case navigationPhaseTypes.nBackComplete:
      // console.log('case navigationPhaseTypes.nBackComplete');

      return (
        <div>
          <CSVDownloadDiv />
          <ResultChecker />
        </div>
      );

    case navigationPhaseTypes.cognitiveReappraisalTest:
      // console.log('case navigationPhaseTypes.cognitiveReappraisalTest');

      return (
        <div>
          <CognitivePhotospace />
          <CognitiveReappraisalArray className="photospace2" />
          {/* <CognitiveReappraisalArrayChecker/> */}
          <CognitiveReappraisalExamNavigation className="navigationSpace" />
        </div>
      );
      break;

    case navigationPhaseTypes.settings:
      // console.log('case navigationPhaseTypes.settings');

      return (
        <div>
          <Settings />
          <ReturnToMainPageButton />
        </div>
      );
      break;

    case navigationPhaseTypes.practiceNBackTest:
      // console.log('case navigationPhaseTypes.settings');

      return (
        <div>
          <PracticePhotospace />

          <PracticeExamNavigation />
        </div>
      );
      break;

    case navigationPhaseTypes.practiceCognitiveReappraisalTest:
      // console.log('case navigationPhaseTypes.settings');

      return (
        <div>
          <CognitivePhotospace />
          <CognitiveReappraisalArray className="photospace2" />
          {/* <CognitiveReappraisalArrayChecker/> */}
          <CognitiveReappraisalExamNavigation className="navigationSpace" />
        </div>
      );
      break;

    default:
      // console.log('default');
      return (
        <div>
          <IntroHeader />

          <div className="navigationBar">
            <StartTestButton />
            <StartPracticeTestButton />
            {/* <SettingsButton/> */}
            <PracticeCognitiveReappraisalTestButton />
            <StartCognitiveReappraisalTestButton />
          </div>
        </div>
      );
  }
};
