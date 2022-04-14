import React, { useContext } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import { ContactsContext } from '@/context/contacts-context';

const Menu = ({ className }) => {
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
		<div className={`Menu 	d-flex flex-row margin-right-2${className ? ` ${className}` : ''}`} data-scroll>
			<ul className="flex-row Menu__items list-style-type-none d-flex">
				{wpMenu.menuItems.nodes.map(menuItem => {
					return (
						<li className="Menu__item d-block" key={menuItem.id}>
							<AniLink
								className="overflow-hidden smallcaps d-block"
								to={menuItem.path}
								cover
								direction="up"
								bg="#000000"
								trigger={() => {
									setTimeout(() => {
										scroll.scrollTo(0, {
											duration: 0,
											disableLerp: true,
										});
										scroll.update();
									}, 800);
								}}>
								<span className="d-inline-block position-relative">
									{menuItem.label}
								</span>
							</AniLink>
						</li>
					);
				})}
				<li className="Menu__item d-block">
					<button
						className="overflow-hidden smallcaps d-block"
						type="button"
						onClick={toggleContacts}>
						<span className="d-inline-block position-relative">Contact</span>
					</button>
				</li>
			</ul>
		</div>
	) : null;
};

export default Menu;
