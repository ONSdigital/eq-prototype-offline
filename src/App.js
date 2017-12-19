import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import SurveyPage from './SurveyPage';
import SummaryPage from './SummaryPage';
import './responsive.min.css';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="page__content">
        </div>

        <header className="page__header">
          <div className="container">
            <div className="header2">
              <div className="logo header__logo">
                <img src={logo} alt="Office for National Statistics" className="logo__img" />
              </div>
            </div>
          </div>
          <div className="bar" role="banner">
            <div className="bar__inner container">
              <div className="bar__title venus">Other input fields
                <span className="mars"> for Fake Business Ltd.</span>
              </div>
            </div>
          </div>
        </header>

        <div className="page__subheader">
          <div className="container"></div>
        </div>

        <div className="page_container container">
        {/*<a className="page__previous page__previous--top"
             data-ga-label="top"
             data-ga-category="Navigation"
             data-ga="click"
             data-ga-action="Previous link click"
             href="/questionnaire/test/textarea/789/textarea-group/0/textarea-block"
             id="top-previous">Previous</a>*/}

          <div className="grid grid--reverse">
            <div className="grid__col col-4@m"></div>
            <div className="grid__col col-7@m pull-1@m">

              <main role="main" id="main" className="page_main">

                <Switch>
                  <Route path="/survey" component={SurveyPage} />
                  <Route path="/summary" component={SummaryPage} />
                </Switch>

              </main>

            </div>
          </div>
        </div>

        <div className="page__footer">

          <footer className="footer2 page__footer2">
            <div className="footer2-nav container" role="contentinfo">

              <div className="grid container">
                <div className="">
                  <div className="grid__col col-4@m">
                    <div className="footer2-nav__heading">
                      <p className="venus"><strong>Legal information</strong></p>
                    </div>
                    <ul className="list footer__list">
                      <li className="footer2-nav__item">
                        <a href="/cookies-privacy" className="footer2__link" target="_blank">Cookies and privacy</a>
                      </li>
                    </ul>
                  </div>

                  <div className="grid__col col-4@m">
                    <div className="footer2-nav__heading">
                      <p className="venus"><strong>About ONS</strong></p>
                    </div>
                    <ul className="list footer__list">
                      <li className="footer2-nav__item">
                        <a href="https://www.ons.gov.uk/aboutus/whatwedo" target="_blank" className="footer2__link">What
                          we
                          do</a>
                      </li>
                      <li className="footer2-nav__item">
                        <a href="/contact-us" target="_blank" className="footer2__link">Contact us</a>
                      </li>
                      <li className="footer2-nav__item">
                        <a href="https://www.ons.gov.uk/help/accessibility" target="_blank" className="footer2__link">Accessibility</a>
                      </li>
                    </ul>
                  </div>

                  <div className="grid__col col-4@m">
                    <div className="footer2-nav__heading">
                      <p className="venus"><strong>Statistics</strong></p>
                    </div>
                    <ul className="list footer__list">
                      <li className="footer2-nav__item">
                        <a href="https://www.statisticsauthority.gov.uk/about-the-authority/" target="_blank" className="footer2__link">UK Statistics Authority</a>
                      </li>
                      <li className="footer2-nav__item">
                        <a href="https://www.ons.gov.uk/releasecalendar" target="_blank" className="footer2__link">Release
                          calendar</a>
                      </li>
                      <li className="footer2-nav__item">
                        <a className="footer2__link" href="https://www.ons.gov.uk/news" target="_blank">News</a>
                      </li>
                    </ul>
                    <br />
                  </div>
                  <div className="dl__data mars">
                    <img src="/s/img/ogl.svg?q=c1b276d0c327c792ee3c44a21f88187f18e594ad" className="ogl__img" />
                    All content is available under
                    the <a className="footer2__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank">Open
                    Government Licence v3.0</a>, except where otherwise stated
                  </div>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    );
  }
}

export default App;
