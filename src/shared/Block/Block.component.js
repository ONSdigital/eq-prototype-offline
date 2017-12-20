import React, { Component } from 'react';

const BlockComponent = (props) => (
	<div className="block">
		<p className="block_title neptune" data-qa="block-title">{props.title}</p>

		{props.children}
	</div>
);

export default BlockComponent;
