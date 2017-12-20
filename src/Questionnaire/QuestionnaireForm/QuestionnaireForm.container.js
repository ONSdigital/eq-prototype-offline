import React, { Component } from 'react';

import appStore from '../../App.store';
import GroupComponent from '../../shared/Group/Group.component';
import BlockComponent from '../../shared/Block/Block.component';
import QuestionComponent from '../../shared/Question/Question.component';

const initialState = {
	groups: []
};

export default class QuestionnaireFormContainer extends Component {

	constructor (props) {
		super(props);

		this.state = initialState;

		if (appStore.get().surveySchema) {
			this.state = {
				groups: appStore.get().surveySchema.groups
			};
		}

		appStore.emitter.on('STATE_CHANGED', () => {
			this.setState({
				groups: appStore.get().surveySchema.groups
			});
		});
	}

	handleSubmit (e) {
		e.preventDefault();

		this.props.history.push("/summary");
	}

	render () {
		return (
			<form className="form qa-questionnaire-form" role="form" method="POST" onSubmit={this.handleSubmit.bind(this)}>

				{this.state.groups.map((group, i) => {
					return (
						<GroupComponent key={'group' + i}>

							{group.blocks.map((block) => {
								return (
									<BlockComponent key={block.id} title={block.title}>

										{block.type === 'Questionnaire' &&
											block.questions.map((question) => {
												return (
													<QuestionComponent key={question.id} question={question} />
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
