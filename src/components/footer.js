import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-plugin-transition-link';

const Footer = () => {
	const { wpMenu } = useStaticQuery(graphql`
		{
			wpMenu(slug: { eq: "footer" }) {
				name
				menuItems {
					nodes {
						label
						url
						id
						parentId
					}
				}
			}
		}
	`);

	return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
		<footer className="Footer">
			<div className="Site-container">
				<div className="row">
					<div className="col-14">
						<ul className="Footer__items">
							{wpMenu.menuItems.nodes.map((menuItem, index) => {
								const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url;

								return (
									<li className="Footer__item" key={menuItem.id}>
										<Link to={path}>
											{0 !== index % 2 ? '↖ ' : ''}
											{menuItem.label}
											{0 === index % 2 ? ' ↗' : ''}
										</Link>
									</li>
								);
							})}

							<li className="Footer__item">
								<button type="button">Contact ↗</button>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-14">
						<ul className="Footer__copyright">
							<li>
								<Link to="/">© 2020 Julien Ledermann</Link>
							</li>
							<li>
								<Link to="/credits">Credits</Link>
							</li>
							<li>
								<Link to="/legal">Legal</Link>
							</li>
							<li>
								<button type="button">⏏</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	) : null;
};

export default Footer;
