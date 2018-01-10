import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import appStore from '../../App.store';
import { fetchExistingAnswers, iterateGroupsBlocks } from '../utils';
import SummaryComponent from '../../shared/Summary/Summary.component';

import QuestionnaireClientStorageService from '../Questionnaire.storage';

export default class QuestionnaireSummaryContainer extends React.Component {

	constructor (props) {
		super(props);

		window.scrollTo(0, 0);

		this.state = {
			groupsData: appStore.get().surveySchema ? appStore.get().surveySchema.groups : [],

			isReady: false,
			isOnline: navigator.onLine,
			summaryItems: []
		};

		if (!this.state.groupsData.length) {
			appStore.emitter.on('STATE_CHANGED', this.handleAppStateChange.bind(this));
		}
		else {
			this.fetchAnswersForEachBlockInGroups(this.state.groupsData);
		}

		window.addEventListener('online',  this.handleOnlineStatusChange.bind(this));
		window.addEventListener('offline', this.handleOnlineStatusChange.bind(this));
	}

	fetchAnswersForEachBlockInGroups (groups) {

		iterateGroupsBlocks(groups, (group, block) => {
			if (block.type === 'Questionnaire') {

				QuestionnaireClientStorageService
					.getAnswersByGroupIdByBlockId(group.id, block.id)
					.then(this.handleFetchExistingAnswersForBlock.bind(this, block));
			}
		});
	}

	createSummaryItem (answerMetadata, answerValue) {
		return {
			answerLabel: answerMetadata.label,
			answerValue: answerValue.value
		}
	}

	updateOnlineStatus (bool) {
		this.setState({
			isOnline: bool
		});
	}

	handleAppStateChange () {
		const currentGroups = appStore.get().surveySchema.groups;

		this.setState({
			groupsData: currentGroups
		});

		this.fetchAnswersForEachBlockInGroups(currentGroups);
	}

	handleFetchExistingAnswersForBlock (block, answerList) {
		let newSummaryItems = [ ...this.state.summaryItems ];

		if (answerList.length) {

			answerList.forEach((answer) => {
				newSummaryItems.push(this.createSummaryItem(block.questions[0].answers[0], answer));
			});
		}

		this.setState({
			isReady: true,
			summaryItems: newSummaryItems
		});
	}

	handleOnlineStatusChange (e) {
		this.updateOnlineStatus(e.type === 'online');
	}

	handleSubmit (e) {
		e.preventDefault();

		alert('Answers would be submitted if the service was available.');
	}

	render () {
		if (!this.state.isReady) {
			return null;
		}

		return (
			<React.Fragment>
				<h1 className="saturn">Your responses</h1>
				<div className="print__message panel panel--simple panel--error">
					<h2 className="saturn">Please remember to submit these responses.</h2>
				</div>
				<div className="print__hidden panel panel--simple panel--warn">
					<h2 className="neptune">Please check your responses carefully before submitting.</h2>
				</div>

				<SummaryComponent items={this.state.summaryItems} />

				<br />

				<form
					className="form qa-questionnaire-form"
					role="form"
					method="POST"
					autoComplete="off"
					noValidate=""
					onSubmit={this.handleSubmit.bind(this)}>

					{!this.state.isOnline && <p>Connect to the Internet to submit your answers.</p>}
					<button
						disabled={!this.state.isOnline || !this.state.summaryItems.length}
						className={'btn btn--lg btn--loader ' +
							((this.state.isOnline && this.state.summaryItems.length) ? 'btn--primary' : 'btn--neutral')}
						data-qa="btn-submit"
						data-loading-msg="Submitting…" type="submit">Submit answers</button>

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
			</React.Fragment>
		);
	}
}
