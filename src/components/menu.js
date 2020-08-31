import React, { useContext } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { ContactsContext } from '@/contacts-context';

export default ({ className }) => {
	const { toggle } = useContext(ContactsContext);

	const { wpMenu } = useStaticQuery(graphql`
		{
			wpMenu(slug: { eq: "primary" }) {
				name
				menuItems {
					nodes {
						label
						url
						id
					}
				}
			}
		}
	`);

	return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
		<div className={`Menu${className ? ` ${className}` : ''}`} data-scroll>
			<ul className="Menu__items">
				{wpMenu.menuItems.nodes.map(menuItem => {
					const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url;

					return (
						<li className="Menu__item" key={menuItem.id}>
							<AniLink
								className="smallcaps"
								to={path}
								cover
								direction="up"
								bg="#000000">
								<span>{menuItem.label}</span>
							</AniLink>
						</li>
					);
				})}

				<li className="Menu__item">
					<button className="smallcaps" type="button" onClick={() => toggle()}>
						<span>Contact</span>
					</button>
				</li>
			</ul>
		</div>
	) : null;
};
