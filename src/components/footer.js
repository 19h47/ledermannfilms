import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Link from 'gatsby-plugin-transition-link';

import H0 from '@/components/h0';
import ButtonScrollTo from '@/components/button-scroll-to';

import { ContactsContext } from '@/context/contacts-context';
import { ScrollContext } from '@/context/scroll-context';

const Footer = () => {
	const { toggleContacts } = useContext(ContactsContext);
	const { el } = useContext(ScrollContext);
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
										className={`Footer__item${
											0 !== index % 2
												? ' Footer__item--left'
												: ' Footer__item--right'
										}`}
										key={id}
										data-scroll>
										<AniLink to={path} cover direction="up" bg="#000000">
											<H0
												texts={`${0 !== index % 2 ? '↖ ' : ''}${label}${
													0 === index % 2 ? ' ↗' : ''
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
							<li>
								<AniLink
									to="/"
									cover
									direction="up"
									bg="#000000"
									style={{ transitionDelay: '0s, 0.8s' }}>
									© 2020 Julien Ledermann
								</AniLink>
							</li>
							<li>
								<Link to="/credits" style={{ transitionDelay: '0s, 0.9s' }}>
									Credits
								</Link>
							</li>
							<li>
								<Link to="/legal" style={{ transitionDelay: '0s, 1s' }}>
									Legal
								</Link>
							</li>
							<li>
								<ButtonScrollTo el={el} style={{ transitionDelay: '0s, 1.1s' }} />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	) : null;
};

export default Footer;
