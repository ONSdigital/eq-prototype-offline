import React, { Component } from 'react';

class TextAreaComponent extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			charactersRemaining: this.props.answer.max_length || 0
		}
	}

	updateCharactersRemaining (e) {
		this.setState({
			charactersRemaining: parseInt(this.props.answer.max_length) - parseInt(e.target.value.length)
		});
	}

	render () {
		return (
			<div className="field">
				<label className="label venus">
					<div className="label__inner">{this.props.answer.label}</div>
				</label>
				<textarea
					onChange={evt => this.updateCharactersRemaining(evt)}
					maxLength={this.props.answer.max_length}
					className="input input--textarea"
					cols="60"
					rows="8"/>

				{this.props.answer.max_length &&
				<div data-qa="textarea-with-limit"
						 className="input__limit u-mt-xs mercury">Characters remaining: <span>{this.state.charactersRemaining}</span>
				</div>}
			</div>
		);
	}
}

export default TextAreaComponent;
