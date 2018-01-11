import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import QuestionnaireFormContainer from './QuestionnaireForm/QuestionnaireForm.container';
import QuestionnaireSummaryContainer from './QuestionnaireSummary/QuestionnaireSummary.container';

const questionnaireRoutes = (
	<React.Fragment>
		<Route path="/questionnaire/1" component={QuestionnaireFormContainer} />
		<Route path="/questionnaire/summary" component={QuestionnaireSummaryContainer} />
	</React.Fragment>
);

export default questionnaireRoutes;
