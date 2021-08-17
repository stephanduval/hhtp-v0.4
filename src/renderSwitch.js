import ExamNavigation from './containers/ExamNavigation';
import Photospace from './containers/PhotoSpace';
import Settings from './containers/nBackSettings';
import ResultChecker from './containers/ResultChecker';

export const navigationPhaseTypes = {  
    introductionPage: "Has settings, instructions and a start test button",
    nBackPageTutorial: "nBackTutorialPage, May not be implemented in production version",
    nBackTest: "The actual nBack Test, recordning data"
  }
  
  export const renderState = (navigationPhaseTypesExpression) => {
    switch (navigationPhaseTypesExpression) {
        case navigationPhaseTypes.introductionPage:
            return <div><ExamNavigation /></div>;
        case navigationPhaseTypes.nBackTest:
            return <div>
                        <div className="navBarWrapper">
                            <ul className="navBar">
                                <li>one</li>
                                <li>two</li>
                                <li>three</li>
                                <li>four</li>
                                <li>five</li>
                            </ul>
                        </div>
                        <Photospace />
                        <ExamNavigation />
                        <Settings />
                        <ResultChecker/>
                </div>;          
          }
        };




        