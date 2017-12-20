import React, { Component } from 'react';

import AnswerComponent from '../Answer/Answer.component';

const QuestionComponent = (props) => (
	<div className="question">
		{/*<h1 className="question__title saturn" data-qa="question-title">Tell me about yourself</h1>*/}
		<fieldset className="question__fieldset js-question-fieldset">
			<div className="question__answers">
				<div className="question__answer">

					{props.question.answers.map((answer) => {
						return (
							<AnswerComponent key={answer.id} answer={answer} />
						);
					})}

				</div>
			</div>
		</fieldset>
	</div>
);

export default QuestionComponent;
