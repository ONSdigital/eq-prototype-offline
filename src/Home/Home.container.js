import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeContainer extends React.Component {

	render () {
		return (
			<ul>
				<li>
					<Link className="page__previous page__previous--bottom"
						data-ga-category="Navigation"
						data-ga="click"
						to='/questionnaire/1'>Questionnaire</Link>
				</li>
				<li>
					<Link className="page__previous page__previous--bottom"
						data-ga-category="Navigation"
						data-ga="click"
						to='/questionnaire/summary'>Summary</Link>
				</li>
			</ul>
		);
	}
}
