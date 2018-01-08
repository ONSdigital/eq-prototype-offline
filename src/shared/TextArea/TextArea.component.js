import React, { Component } from 'react';

export default class TextAreaComponent extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			charactersRemaining: this.props.existingAnswer
				? this.getCharactersRemaining(this.props.existingAnswer.value)
				: this.props.answerMetadata.max_length,

			value: this.props.existingAnswer ? this.props.existingAnswer.value : ''
		};
	}

	update (val) {
		this.updateCharactersRemaining(val);

		this.props.onUpdate({
			value: val
		});

		this.state.value = val;
	}

	textChange_handler (e) {
		this.update(e.target.value);
	}

	getCharactersRemaining (val) {
		return parseInt(this.props.answerMetadata.max_length) - parseInt(val.length);
	}

	updateCharactersRemaining (val) {
		this.setState({
			charactersRemaining: this.getCharactersRemaining(val)
		});
	}

	render () {
		return (
			<div className="field">
				<label className="label venus">
					<div className="label__inner">{this.props.answerMetadata.label}</div>
				</label>
				<textarea
					onChange={evt => this.textChange_handler(evt)}
					maxLength={this.props.answerMetadata.max_length}
					className="input input--textarea"
					cols="60"
					rows="8"
					value={this.state.value} />

				{this.props.answerMetadata.max_length &&
					<div data-qa="textarea-with-limit"
						 className="input__limit u-mt-xs mercury">Characters remaining: <span>{this.state.charactersRemaining}</span>
					</div>
				}
			</div>
		);
	}
}
