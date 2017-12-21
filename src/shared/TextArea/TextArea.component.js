import React, { Component } from 'react';

export default class TextAreaComponent extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			charactersRemaining: this.props.answerMetadata.max_length || 0,
			value: this.props.existingAnswer ? this.props.existingAnswer.value : ''
		};
	}

	update (e) {
		this.updateCharactersRemaining(e);

		this.props.onUpdate({
			value: e.target.value
		});

		this.state.value = e.target.value;
	}

	updateCharactersRemaining (e) {
		this.setState({
			charactersRemaining: parseInt(this.props.answerMetadata.max_length) - parseInt(e.target.value.length)
		});
	}

	render () {
		return (
			<div className="field">
				<label className="label venus">
					<div className="label__inner">{this.props.answerMetadata.label}</div>
				</label>
				<textarea
					onChange={evt => this.update(evt)}
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
