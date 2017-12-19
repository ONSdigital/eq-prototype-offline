import React, { Component } from 'react';

export default class SurveyPage extends Component {

	handleSubmit (e) {
		e.preventDefault();

		this.props.history.push("/summary");
	}

	render () {
		return (
			<form className="form qa-questionnaire-form" role="form" method="POST" onSubmit={this.handleSubmit.bind(this)}>

				<div className="group">
					<div className="block">
						<p className="block_title neptune" data-qa="block-title">Textarea test</p>

						<div className="question">
							{/*<h1 className="question__title saturn" data-qa="question-title">Tell me about yourself</h1>*/}
							<fieldset className="question__fieldset js-question-fieldset">
								<div className="question__answers">
									<div className="question__answer">

										<div className="answer answer--textfield">
											<div className="answer__fields">

												<div className="field">
													<label className="label venus">
														<div className="label__inner">Enter your comments</div>
													</label>
													<textarea className="input input--textarea" cols="60" rows="8" />
													<div data-qa="textarea-with-limit" className="input__limit u-mt-xs mercury">Characters remaining: <span>20</span></div>
												</div>

											</div>
										</div>

									</div>
								</div>
							</fieldset>
						</div>
					</div>
				</div>

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
