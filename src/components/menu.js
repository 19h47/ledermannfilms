import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';

export default ({ className }) => {
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
							<Link className="smallcaps" to={path}>
								<span>{menuItem.label}</span>
							</Link>
						</li>
					);
				})}
				<li className="Menu__item">
					<button className="smallcaps" type="button">
						<span>Contact</span>
					</button>
				</li>
			</ul>
		</div>
	) : null;
};
