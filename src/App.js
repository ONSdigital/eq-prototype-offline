import React, { Component } from 'react';

import './missing-sdc-pattern-library-styles.css';
import FooterComponent from './shared/Footer/Footer.component';
import HeaderComponent from './shared/Header/Header.component';

import questionnaireModule from './Questionnaire';
import appStore from './App.store';

import appRoutes from './app.routes';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
			isReady: false
    };

		questionnaireModule.QuestionnaireClientStorageService.createStore({
      name: 'ONS - Electronic Questionnaire',
      version: 2,
      storeName: 'ons-eq',
    });

		questionnaireModule.QuestionnaireService.retrieve()
			.then((data) => {
				appStore.set({
					surveySchema: data
				});

				this.setState({
					isReady: true
        });
			});
  }

  render() {
		if (!this.state.isReady) {
			return null;
		}

    return (
      <div className="page">
        <div className="page__content">
        </div>

        <HeaderComponent />

        <div className="page__subheader">
          <div className="container">
          </div>
        </div>

        <div className="page_container container">
          <div className="grid grid--reverse">
            <div className="grid__col col-4@m">
            </div>
            <div className="grid__col col-7@m pull-1@m">

              <main role="main" id="main" className="page_main">
								{appRoutes}
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
