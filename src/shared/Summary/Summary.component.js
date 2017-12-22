import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SummaryComponent = (props) => (
	<div className="summary">
		<div className="summary__block">

			{props.items.map((summaryItem) => {
				return (
					<div className="summary__items">
						<div className="summary__question" id="question">
							{summaryItem.answerLabel}
						</div>
						<div className="summary__answer">
							<div className="summary__answer-text" id="answer-answer" data-qa="answer-answer">
								<div className="summary__answer-break"><p>{summaryItem.answerValue}</p></div>
							</div>
							<div className="summary__edit">
								<Link className="summary__edit-link"
									aria-describedby="answer answer-answer"
									data-qa="answer-edit"
									data-ga-category="Summary"
									data-ga="click"
									data-ga-action="Edit click"
									to='/questionnaire/1'>
									Edit <span className="u-vh">your answer</span>
								</Link>
							</div>
						</div>
					</div>
				);
			})}

		</div>
	</div>
);

export default SummaryComponent;
