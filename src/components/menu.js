import React, { useContext } from 'react';
import gsap from 'gsap';

import { useStaticQuery, graphql } from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';

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

	const fadeOut = ({ length }, node) => {
		return gsap.to(node, {
			x: 100,
			duration: length,
			opacity: 0,
			onComplete: () => window.scroll.update(),
		});
	};

	const fadeIn = ({ length }, node) => {
		return gsap.fromTo(
			node,
			{ x: -100, opacity: 0 },
			{
				x: 0,
				duration: length,
				opacity: 1,
				onComplete: () => window.scroll.update(),
			},
		);
	};

	return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
		<div className={`Menu${className ? ` ${className}` : ''}`} data-scroll>
			<ul className="Menu__items">
				{wpMenu.menuItems.nodes.map(menuItem => {
					const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url;

					return (
						<li className="Menu__item" key={menuItem.id}>
							<TransitionLink
								className="smallcaps"
								to={path}
								exit={{
									length: 2,
									trigger: ({ exit, node }) => fadeOut(exit, node),
								}}
								entry={{
									delay: 0.1,
									length: 1,
									trigger: ({ exit, node }) => fadeIn(exit, node),
								}}>
								<span>{menuItem.label}</span>
							</TransitionLink>
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
