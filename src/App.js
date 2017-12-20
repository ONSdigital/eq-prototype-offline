import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './responsive.min.css';
import QuestionnaireFormContainer from './Questionnaire/QuestionnaireForm/QuestionnaireForm.container';
import QuestionnaireSummaryContainer from './Questionnaire/QuestionnaireSummary/QuestionnaireSummary.container';
import FooterComponent from './shared/Footer/Footer.component';
import HeaderComponent from './shared/Header/Header.component';

import QuestionnaireService from './Questionnaire/Questionnaire.service';
import appStore from './App.store';

class App extends Component {

  constructor (props) {
    super(props);

		QuestionnaireService.retrieve()
      .then((data) => {
				appStore.set({
          surveySchema: data
        });
      });
  }

  render() {
    return (
      <div className="page">
        <div className="page__content">
        </div>

        <HeaderComponent />

        <div className="page__subheader">
          <div className="container"></div>
        </div>

        <div className="page_container container">
          <div className="grid grid--reverse">
            <div className="grid__col col-4@m"></div>
            <div className="grid__col col-7@m pull-1@m">

              <main role="main" id="main" className="page_main">

                <Switch>
                  <Route path="/survey" component={QuestionnaireFormContainer} />
                  <Route path="/summary" component={QuestionnaireSummaryContainer} />
                </Switch>

              </main>

            </div>
          </div>
        </div>

        <FooterComponent />
      </div>
    );
  }
}

export default App;
