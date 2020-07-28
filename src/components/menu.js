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
						parentId
						connectedNode {
							node {
								... on WpContentNode {
									uri
								}
							}
						}
					}
				}
			}
		}
	`);

	return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
		<div className={`Menu${className ? ` ${className}` : ''}`}>
			<ul className="Menu__items">
				{wpMenu.menuItems.nodes.map(menuItem => {
					if (menuItem.parentId) {
						return null;
					}

					const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url;

					return (
						<li className="Menu__item" key={menuItem.id}>
							<Link className="smallcaps" to={path}>
								{menuItem.label}
							</Link>
						</li>
					);
				})}
				<li className="Menu__item">
					<button className="smallcaps" type="button">
						Contact
					</button>
				</li>
			</ul>
		</div>
	) : null;
};
