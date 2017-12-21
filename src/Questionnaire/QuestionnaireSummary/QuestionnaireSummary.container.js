import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const QuestionnaireSummaryContainer = () => (
	<div>
		<h1 className="saturn">Your responses</h1>
		<div className="print__message panel panel--simple panel--error">
			<h2 className="saturn">Please remember to submit these responses.</h2>
		</div>
		<div className="print__hidden panel panel--simple panel--warn">
			<h2 className="neptune">Please check your responses carefully before submitting.</h2>
		</div>

		<div className="summary__block">
			<div className="summary__items">
				<div className="summary__question" id="question">
					Enter your comments
				</div>
				<div className="summary__answer">
					<div className="summary__answer-text" id="answer-answer" data-qa="answer-answer"><div className="summary__answer-break"><p>123</p></div></div>
					<div className="summary__edit">
						<Link className="summary__edit-link"
							aria-describedby="answer answer-answer"
							data-qa="answer-edit"
							data-ga-category="Summary"
							data-ga="click"
							data-ga-action="Edit click"
							to='/questionnaire/1'>
							Edit <span className="u-vh">your answer</span>
						</Link>
					</div>
				</div>
			</div>
		</div>

		<form className="form qa-questionnaire-form" role="form" method="POST" autoComplete="off" noValidate="">
			<input id="csrf_token" name="csrf_token" type="hidden" value="IjYxMTU0ZjYzYzEzMmY5MWU4OGMzMWVmZTkwNjg5ZjVmYzkyMjhiNDUi.DRp0VA.V8MY8f1_1PyTZJDNSCVqVjDA50M" />
			<button className="btn btn--primary btn--lg btn--loader js-btn-submit" data-qa="btn-submit" data-loading-msg="Submitting…" type="submit">Submit answers</button>
			{/*<div className="u-mb-m">
				<button className="btn btn--link mars js-btn-save" data-qa="btn-save-sign-out" type="submit" name="action[save_sign_out]" data-ga-category="Navigation" data-ga="click" data-ga-action="Save and complete later click">Save and complete later</button>
			</div>*/}
		</form>

		<Link className="page__previous page__previous--bottom"
			data-ga-label="bottom"
			data-ga-category="Navigation"
			data-ga="click"
			data-ga-action="Previous link click"
			to='/questionnaire/1'>Previous</Link>
	</div>
);

export default QuestionnaireSummaryContainer;
