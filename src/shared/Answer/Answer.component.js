import React, { Component } from 'react';
import TextAreaComponent from "../TextArea/TextArea.component";

class AnswerComponent extends React.Component {

	validAnswerComponentTypes = {
		TextArea: TextAreaComponent
	};

	constructor (props) {
		super(props);
	}

	render () {
		const ValidAnswerComponent = this.validAnswerComponentTypes[this.props.answer.type];

		return (
			<div className="answer answer--textfield">
				<div className="answer__fields">
					{ValidAnswerComponent && <ValidAnswerComponent {...this.props} />}
				</div>
			</div>
		);
	}
}

export default AnswerComponent;
