import React, { Component } from 'react';

import appStore from '../../App.store';
import GroupComponent from '../../shared/Group/Group.component';
import BlockComponent from '../../shared/Block/Block.component';
import QuestionComponent from '../../shared/Question/Question.component';

import QuestionnaireClientStorageService from '../Questionnaire.storage';

const initialState = {
	groups: []
};

export default class QuestionnaireFormContainer extends Component {

	constructor (props) {
		super(props);

		this.state = initialState;
		this.isReady = false;

		if (appStore.get().surveySchema) {
			this.state = {
				groups: appStore.get().surveySchema.groups,
				groupBlockAnswers: []
			};
		}

		appStore.emitter.on('STATE_CHANGED', () => {
			const currentGroups = appStore.get().surveySchema.groups;

			this.setState({
				groups: currentGroups
			});

			currentGroups.forEach((group) => {
				group.blocks.forEach((block) => {
					if (block.type === 'Questionnaire') {
						this.fetchExistingAnswers(group.id, block.id);
					}
				})
			});
		});
	}

	handleSubmit (e) {
		e.preventDefault();

		this.props.history.push("/questionnaire/summary");
	}

	updateAnswer (groupId, blockId, answerId, valueObj) {

		let answer = {
			group_id: groupId,
			group_instance: 0,
			block_id: blockId,
			answer_id: answerId,
			answer_instance: 0,
			value: valueObj.value
		};

		QuestionnaireClientStorageService.saveAnswer(answer)
			.then((res) => {
				console.log('response: ', res);
			});
	}

	fetchExistingAnswers (groupId, blockId) {

		QuestionnaireClientStorageService.getAnswersByGroupIdByBlockId(groupId, blockId)
			.then((answerList) => {
				this.isReady = true;

				this.setState({
					groupBlockAnswers: answerList
				});
			});
	}

	render () {
		if (!this.isReady) {
			return null;
		}

		return (
			<form className="form qa-questionnaire-form" role="form" method="POST" onSubmit={this.handleSubmit.bind(this)}>

				{this.state.groups.map((group) => {
					return (
						<GroupComponent key={group.id}>

							{group.blocks.map((block) => {
								return (
									<BlockComponent key={block.id} title={block.title}>

										{block.type === 'Questionnaire' &&
											block.questions.map((question) => {
												return (
													<QuestionComponent
														key={question.id}
														question={question}
														groupBlockAnswers={this.state.groupBlockAnswers}
														onUpdateAnswer={this.updateAnswer.bind(null, group.id, block.id)} />
												);
											})
										}
									</BlockComponent>
								);
							})}
						</GroupComponent>
					);
				})}

				<button
					className="btn btn--primary btn--lg"
					data-qa="btn-submit"
					type="submit"
					name="action[save_continue]">Continue</button>

				{/*<div className="u-mb-m">
					<button className="btn btn--link mars js-btn-save" data-qa="btn-save-sign-out" type="submit" name="action[save_sign_out]" data-ga-category="Navigation" data-ga="click" data-ga-action="Save and complete later click">Save and complete later</button>
				</div>*/}

			</form>
		);
	}
}
