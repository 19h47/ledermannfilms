import React from 'react';
import gsap from 'gsap';
import { graphql, useStaticQuery } from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';

const SiteName = ({ delay }) => {
	const { wp } = useStaticQuery(graphql`
		{
			wp {
				generalSettings {
					title
				}
			}
		}
	`);

	const fadeOut = ({ length }, node) => {
		return gsap.to(node, { duration: length, opacity: 0 });
	};

	const fadeIn = ({ length }, node) => {
		return gsap.fromTo(
			node,
			{ opacity: 0 },
			{
				duration: length,
				opacity: 1,
			},
		);
	};

	return (
		<TransitionLink
			exit={{
				length: 2,
				trigger: ({ exit, node }) => fadeOut(exit, node),
			}}
			entry={{
				delay: 0.1,
				length: 1,
				trigger: ({ exit, node }) => fadeIn(exit, node),
			}}
			className="Site-name smallcaps d-inline-block"
			to="/"
			data-scroll>
			<span className="Site-name__line">
				<span style={{ transitionDelay: `${delay}s` }}>
					<i>✦</i>
					{wp.generalSettings.title}
				</span>
			</span>
		</TransitionLink>
	);
};

export default SiteName;
