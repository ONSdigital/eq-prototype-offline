import React, { Component } from 'react';

import logo from '../../logo.svg';

const HeaderComponent = () => {
	return (
		<header className="page__header">
			<div className="container">
				<div className="header2">
					<div className="logo header__logo">
						<img src={logo} alt="Office for National Statistics" className="logo__img" />
					</div>
				</div>
			</div>
			<div className="bar" role="banner">
				<div className="bar__inner container">
					<div className="bar__title venus">Other input fields
						<span className="mars"> for Fake Business Ltd.</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderComponent;
