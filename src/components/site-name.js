import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const SiteName = ({ delay, classes = [] }) => {
	const { wp } = useStaticQuery(graphql`
		{
			wp {
				generalSettings {
					title
				}
			}
		}
	`);
	const { scroll } = useLocomotiveScroll();

	const className = `Site-name smallcaps d-inline-block ${classes.join(' ')}`;

	return (
		<AniLink
			className={className}
			to="/"
			data-scroll
			cover
			direction="up"
			bg="#000000"
			trigger={() => {
				setTimeout(() => {
					scroll.scrollTo(0, {
						duration: 0,
						disableLerp: true,
					});
				}, 100);
			}}>
			<span className="Site-name__line">
				<span style={{ transitionDelay: `${delay}s` }}>{wp.generalSettings.title}</span>
			</span>
		</AniLink>
	);
};

export default SiteName;
