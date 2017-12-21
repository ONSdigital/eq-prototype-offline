import React, { Component } from 'react';
import TextAreaComponent from "../TextArea/TextArea.component";

export default class AnswerComponent extends React.Component {

	validAnswerComponentTypes = {
		TextArea: TextAreaComponent
	};

	render () {
		const ValidAnswerComponent = this.validAnswerComponentTypes[this.props.answerMetadata.type];

		return (
			<div className="answer answer--textfield">
				<div className="answer__fields">
					{ValidAnswerComponent &&
						<ValidAnswerComponent {...this.props} />
					}
				</div>
			</div>
		);
	}
}
