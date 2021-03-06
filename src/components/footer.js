import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import H0 from '@/components/h0';
import ButtonScrollTo from '@/components/button-scroll-to';

import { ContactsContext } from '@/context/contacts-context';

const Footer = () => {
	const { toggleContacts } = useContext(ContactsContext);
	const { wpMenu } = useStaticQuery(graphql`
		{
			wpMenu(slug: { eq: "footer" }) {
				name
				menuItems {
					nodes {
						id
						label
						path
					}
				}
			}
		}
	`);
	const { scroll } = useLocomotiveScroll();

	return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
		<footer className="Footer" data-scroll data-scroll-call="footer" data-scroll-repeat>
			<div className="Site-container">
				<div className="row">
					<div className="col-14">
						<ul className="Footer__items">
							{wpMenu.menuItems.nodes.map((item, index) => {
								const { id, path, label } = item;
								return (
									<li
										className={`Footer__item${0 !== index % 2
											? ' Footer__item--left'
											: ' Footer__item--right'
											}`}
										key={id}
										data-scroll>
										<AniLink
											to={path}
											cover
											direction="up"
											bg="#000000"
											trigger={() => {
												setTimeout(() => {
													scroll.scrollTo(0, {
														duration: 0,
														disableLerp: true,
													});
													scroll.update()
												}, 800);
											}}>
											<H0
												texts={`${0 !== index % 2 ? '↖ ' : ''}${label}${0 === index % 2 ? ' ↗' : ''
													}`}
											/>
										</AniLink>
									</li>
								);
							})}
							<li className="Footer__item Footer__item--right" data-scroll>
								<button type="button" onClick={toggleContacts}>
									<H0 texts={'Contact ↗'} />
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-14">
						<ul className="Footer__copyright" data-scroll>
							<li className="text-align-center">
								<AniLink
									to="/"
									cover
									direction="up"
									bg="#000000"
									preventScrollJump={false}
									trigger={() => {

										scroll.scrollTo(0, {
											duration: 0,
											disableLerp: true,
										});

									}}
									style={{ transitionDelay: '0s, 0.8s' }}>
									© 2021 Julien Ledermann
								</AniLink>
							</li>
							<li>
								<p className="margin-0" style={{ transitionDelay: '0s, 0.9s' }}>
									By{' '}
									<a
										href="https://bastienallard.com/"
										rel="noopener noreferrer"
										target="_blank">
										Bast
									</a>{' '}
									&{' '}
									<a href="https://19h47.fr" rel="noopener noreferrer" target="_blank">
										19h47
									</a>
								</p>
							</li>
							<li className="text-align-right">
								<AniLink
									to="/legal"
									style={{ transitionDelay: '0s, 1s' }}
									cover
									direction="up"
									bg="#000000"
									preventScrollJump={false}
									trigger={() => {
										setTimeout(() => {
											scroll.scrollTo(0, {
												duration: 0,
												disableLerp: true,
											});
										}, 700);
									}}>
									Legal
								</AniLink>
							</li>
							<li>
								<ButtonScrollTo style={{ transitionDelay: '0s, 1.1s' }} />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	) : null;
};

export default Footer;
