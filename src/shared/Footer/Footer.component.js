import React, { Component } from 'react';

const FooterComponent = () => (
	<div className="page__footer">

		<footer className="footer2 page__footer2">
			<div className="footer2-nav container" role="contentinfo">

				<div className="grid container">
					<div className="">
						<div className="grid__col col-4@m">
							<div className="footer2-nav__heading">
								<p className="venus"><strong>Legal information</strong></p>
							</div>
							<ul className="list footer__list">
								<li className="footer2-nav__item">
									<a href="/cookies-privacy" className="footer2__link">Cookies and privacy</a>
								</li>
							</ul>
						</div>

						<div className="grid__col col-4@m">
							<div className="footer2-nav__heading">
								<p className="venus"><strong>About ONS</strong></p>
							</div>
							<ul className="list footer__list">
								<li className="footer2-nav__item">
									<a href="https://www.ons.gov.uk/aboutus/whatwedo" className="footer2__link">What
										we
										do</a>
								</li>
								<li className="footer2-nav__item">
									<a href="/contact-us" className="footer2__link">Contact us</a>
								</li>
								<li className="footer2-nav__item">
									<a href="https://www.ons.gov.uk/help/accessibility" className="footer2__link">Accessibility</a>
								</li>
							</ul>
						</div>

						<div className="grid__col col-4@m">
							<div className="footer2-nav__heading">
								<p className="venus"><strong>Statistics</strong></p>
							</div>
							<ul className="list footer__list">
								<li className="footer2-nav__item">
									<a href="https://www.statisticsauthority.gov.uk/about-the-authority/" className="footer2__link">UK Statistics Authority</a>
								</li>
								<li className="footer2-nav__item">
									<a href="https://www.ons.gov.uk/releasecalendar" className="footer2__link">Release
										calendar</a>
								</li>
								<li className="footer2-nav__item">
									<a className="footer2__link" href="https://www.ons.gov.uk/news">News</a>
								</li>
							</ul>
							<br />
						</div>
						<div className="dl__data mars">
							{/*<img src="/s/img/ogl.svg?q=c1b276d0c327c792ee3c44a21f88187f18e594ad" className="ogl__img" />*/}
							All content is available under
							the <a className="footer2__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open
							Government Licence v3.0</a>, except where otherwise stated
						</div>
					</div>
				</div>
			</div>
		</footer>

	</div>
);

export default FooterComponent;
