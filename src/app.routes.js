import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeContainer from './Home/Home.container';

import questionnareModule from './Questionnaire';

const appRoutes = (
	<Switch>
		<Route exact path="/" component={HomeContainer}/>
		{questionnareModule.questionnaireRoutes}
	</Switch>
);

export default appRoutes;
