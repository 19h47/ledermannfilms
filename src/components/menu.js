import React, { useContext } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import { ContactsContext } from '@/context/contacts-context';

export default ({ className }) => {
	const { toggleContacts } = useContext(ContactsContext);
	const { scroll } = useLocomotiveScroll();

	const { wpMenu } = useStaticQuery(graphql`
		{
			wpMenu(slug: { eq: "primary" }) {
				name
				menuItems {
					nodes {
						label
						path
						id
					}
				}
			}
		}
	`);

	return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
		<div className={`Menu margin-right-2${className ? ` ${className}` : ''}`} data-scroll>
			<ul className="Menu__items">
				{wpMenu.menuItems.nodes.map(menuItem => {
					return (
						<li className="Menu__item" key={menuItem.id}>
							<AniLink
								className="smallcaps"
								to={menuItem.path}
								cover
								direction="up"
								bg="#000000"
								trigger={() => {
									setTimeout(() => {
										scroll.scrollTo(0, {
											duration: 0,
											disableLerp: true
										})
									}, 800);
								}}>
								<span>{menuItem.label}</span>
							</AniLink>
						</li>
					);
				})}
				<li className="Menu__item">
					<button className="smallcaps" type="button" onClick={toggleContacts}>
						<span>Contact</span>
					</button>
				</li>
			</ul>
		</div>
	) : null;
};
